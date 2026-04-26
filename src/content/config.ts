import { defineCollection, z } from 'astro:content';

export const CATEGORIES = [
  'hiking-trails',
  'restaurants-food',
  'attractions',
  'shopping',
  'nightlife',
  'family-activities',
  'parks',
  'museums',
  'day-trips',
] as const;

export const CATEGORY_META: Record<
  (typeof CATEGORIES)[number],
  { title: string; tagline: string; emoji: string }
> = {
  'hiking-trails': {
    title: 'Hiking & Trails',
    tagline: 'Summit views, foothills, and quiet forest paths.',
    emoji: '🥾',
  },
  'restaurants-food': {
    title: 'Restaurants & Food',
    tagline: 'From green chile to farm-to-table tasting menus.',
    emoji: '🍽️',
  },
  attractions: {
    title: 'Attractions',
    tagline: 'Iconic Colorado Springs experiences worth the drive.',
    emoji: '🎢',
  },
  shopping: {
    title: 'Shopping',
    tagline: 'Locally made goods, boutiques, and bookshops.',
    emoji: '🛍️',
  },
  nightlife: {
    title: 'Nightlife',
    tagline: 'Taprooms, live music, and late-night hangouts.',
    emoji: '🌙',
  },
  'family-activities': {
    title: 'Family Activities',
    tagline: 'Kid-approved adventures for every age.',
    emoji: '👨‍👩‍👧',
  },
  parks: {
    title: 'Parks',
    tagline: 'Wide open spaces and red-rock playgrounds.',
    emoji: '🌲',
  },
  museums: {
    title: 'Museums',
    tagline: 'Art, history, and the stories of the Rockies.',
    emoji: '🏛️',
  },
  'day-trips': {
    title: 'Day Trips',
    tagline: 'Mountain towns and scenic drives within easy reach.',
    emoji: '🚗',
  },
};

const listings = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.enum(CATEGORIES),
    address: z.string(),
    description: z.string(),
    photos: z.array(z.string()).default([]),
    hours: z.string().optional(),
    website: z.string().url().optional(),
    phone: z.string().optional(),
    priceRange: z.enum(['Free', '$', '$$', '$$$', '$$$$']).optional(),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
    featured: z.boolean().default(false),
    lloydsPick: z.boolean().default(false),
  }),
});

export const collections = { listings };
