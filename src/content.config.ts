import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    company: z.string(),
    role: z.string(),
    year: z.number(),
    tags: z.array(z.string()).default([]),
    // Relative to the Markdown file, e.g. "./cover.jpg". Astro resizes it and serves AVIF/WebP.
    // Omit to show a colour block instead.
    cover: image().optional(),
    coverAlt: z.string().default(''),
    accent: z.string().default('#e8e4dc'),
    // Lower numbers show first on the home page.
    order: z.number().default(100),
    // Drafts build locally (npm run dev) but are hidden from production.
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
