# Deploying ExploreCOS

The site is a fully static Astro build — `npm run build` outputs to `dist/`,
which any static host can serve. The two easiest options are **Cloudflare
Pages** and **Netlify**. Both are free for a project this size.

## Before you start

1. Make sure the project builds locally:

   ```powershell
   cd C:\Users\lloyd\explorecos
   npm install        # installs the new @astrojs/sitemap dependency
   npm run build
   ```

   You should see a `dist/` folder with `sitemap-index.xml`, `sitemap-0.xml`,
   `robots.txt`, the home page, every category page, and every listing page.

2. Push the project to GitHub. From PowerShell in the project folder:

   ```powershell
   git init
   git add .
   git commit -m "Initial commit — ExploreCOS site"
   ```

   Then create an empty repo on github.com (e.g. `explorecos`) and follow the
   "push an existing repository" instructions GitHub shows you. Roughly:

   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/explorecos.git
   git branch -M main
   git push -u origin main
   ```

---

## Option A — Cloudflare Pages (recommended)

Free, fast, no build minutes limit, and the CDN is excellent.

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create
   application** → **Pages** → **Connect to Git**.
2. Authorize Cloudflare to read your GitHub repos, then pick `explorecos`.
3. **Build settings**:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: leave blank
4. Click **Save and Deploy**. The first build takes ~1–2 minutes.
5. When it's done, you'll get a URL like
   `https://explorecos.pages.dev`. Every push to `main` triggers a new build.

### Custom domain (explorecos.com)

In the Pages project → **Custom domains** → **Set up a custom domain** →
enter `explorecos.com`. Cloudflare will tell you what DNS records to add at
your registrar (or auto-configure them if your domain is already on
Cloudflare).

---

## Option B — Netlify

Equally easy. The repo includes `netlify.toml` so you don't have to fill in
build settings.

1. Go to https://app.netlify.com → **Add new site** → **Import an existing
   project** → connect to GitHub → pick `explorecos`.
2. Netlify reads `netlify.toml` and uses:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Click **Deploy**. First build is ~2 minutes.
4. You'll get a URL like `https://your-site-name.netlify.app`.

### Custom domain

Site settings → **Domain management** → **Add custom domain** →
`explorecos.com`. Netlify will give you the DNS records to add at your
registrar.

---

## After it's live

- **Sitemap**: visit `https://explorecos.com/sitemap-index.xml` to confirm.
- **Submit to Google**: https://search.google.com/search-console — add the
  property, verify (DNS or HTML file), then submit the sitemap URL.
- **Test social previews**:
  - Facebook / general OG: https://www.opengraph.xyz/
  - Twitter / X: https://cards-dev.twitter.com/validator (legacy but still works)
  - LinkedIn: https://www.linkedin.com/post-inspector/

---

## Troubleshooting

**Build fails with `Cannot find module '@astrojs/sitemap'`**: run
`npm install` first to pick up the new dependency.

**OG image isn't showing on shared links**: social platforms cache OG
metadata aggressively. Use the inspector tools above to force a re-scrape.

**Maps aren't loading on /map after deploy**: Leaflet pulls tiles from
OpenStreetMap. If you see no tiles in production but they work locally, your
host might be blocking unpkg.com (where Leaflet's JS/CSS comes from). Switch
to a self-hosted copy of Leaflet by running `npm install leaflet` and
importing it from a script tag.
