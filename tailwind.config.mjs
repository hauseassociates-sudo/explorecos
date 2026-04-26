/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        mountain: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#1e3a5f',
          950: '#0f1e30',
        },
        forest: {
          50: '#f1f5ee',
          100: '#dce7d4',
          200: '#bbcfac',
          300: '#93b27d',
          400: '#6f9459',
          500: '#547840',
          600: '#3f5e30',
          700: '#334a28',
          800: '#2a3b22',
          900: '#24321f',
        },
        clay: {
          50: '#fdf6ee',
          100: '#faead5',
          200: '#f3d1a9',
          300: '#ebb074',
          400: '#e18b44',
          500: '#c67b4a',
          600: '#b35f2b',
          700: '#944925',
          800: '#793b25',
          900: '#633221',
        },
        sand: {
          50: '#fbf7f0',
          100: '#f5ebd8',
          200: '#e8d5b0',
          300: '#d9b880',
          400: '#c89a5a',
          500: '#b88244',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(30, 58, 95, 0.04), 0 4px 12px rgba(30, 58, 95, 0.06)',
        'card-hover': '0 4px 6px rgba(30, 58, 95, 0.06), 0 12px 24px rgba(30, 58, 95, 0.12)',
      },
    },
  },
  plugins: [],
};
