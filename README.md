# Portfolio

Design portfolio built with [Astro](https://astro.build). Static output, deployed to GitHub Pages.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321/Portfolio/
npm run build    # outputs to dist/
```

## Where things live

| What | File |
| --- | --- |
| Name, tagline, email, social links | `src/site.ts` |
| Case studies (one folder each) | `src/content/work/<slug>/index.md` |
| Case study structure to copy | `docs/case-study-template.md` |
| Case study images | Next to the Markdown file, in the same folder |
| Default link-preview image | `public/og.png` (1200×630) |
| About page | `src/pages/about.astro` |
| Colours, type, spacing | `src/styles/global.css` |

## Adding a case study

1. Copy `docs/case-study-template.md` to `src/content/work/<slug>/index.md`.
2. Drop images in the same folder and reference them relatively: `cover: ./cover.jpg` in
   frontmatter, `![Alt text](./flow.png)` in the body.
3. Keep `draft: true` until it's ready. Drafts show in `npm run dev` but never in production.

Export images at 2x and don't compress them yourself. At build time Astro resizes every image,
serves AVIF/WebP with a JPEG fallback, and lazy-loads anything below the fold. Don't put case
study images in `public/`, because files there are served as-is with no optimisation.

## Performance

The site loads no third-party resources and ships about 1 KB of JavaScript (link prefetching).
Fonts are self-hosted Latin subsets with size-matched fallbacks, so text doesn't jump when they
load. CSS is inlined. Pages fade between each other using native view transitions.

Images are what will make or break this. If a page feels slow, check the image sizes first.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it.
One-time setup: in the repo go to **Settings → Pages → Source** and pick **GitHub Actions**.

The site will be at `https://abhimanyu-saha.github.io/Portfolio/`.
For a custom domain, set `SITE` to your domain and `BASE` to `/` in `astro.config.mjs`
and add `public/CNAME`.
