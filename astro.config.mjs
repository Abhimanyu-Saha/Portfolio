// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves this repo at https://abhimanyu-saha.github.io/portfolio/.
// If you move to a custom domain, set SITE to it and BASE to '/'.
const site = process.env.SITE ?? 'https://abhimanyu-saha.github.io';
const base = process.env.BASE ?? '/portfolio';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
