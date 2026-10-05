// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves this repo at https://abhimanyu-saha.github.io/portfolio/.
// If you move to a custom domain, set SITE to it and BASE to '/'.
const site = process.env.SITE ?? 'https://abhimanyu-saha.github.io';
const base = process.env.BASE ?? '/portfolio';

/** @param {string} pkg @param {string} file */
const fontsource = (pkg, file) => `./node_modules/${pkg}/files/${file}`;

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],

  // Self-hosted, Latin-only fonts: no third-party requests, no render-blocking
  // stylesheet, and Astro generates size-adjusted fallbacks so text doesn't jump on swap.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter',
      fallbacks: ['system-ui', 'sans-serif'],
      options: {
        variants: [
          { src: [fontsource('@fontsource-variable/inter', 'inter-latin-wght-normal.woff2')], weight: '100 900', style: 'normal' },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Instrument Serif',
      cssVariable: '--font-instrument',
      fallbacks: ['Georgia', 'serif'],
      options: {
        variants: [
          { src: [fontsource('@fontsource/instrument-serif', 'instrument-serif-latin-400-normal.woff2')], weight: 400, style: 'normal' },
        ],
      },
    },
  ],

  // Start loading the next page when a link is hovered or focused.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },

  // The whole stylesheet is a few KB; inlining it removes a render-blocking request.
  build: { inlineStylesheets: 'always' },

  image: {
    // Covers are rendered in a fixed aspect ratio; let Astro crop to fit.
    layout: 'constrained',
    objectFit: 'cover',
  },
});
