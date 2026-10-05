# Portfolio

Design portfolio built with [Astro](https://astro.build). Static output, deployed to GitHub Pages.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321/portfolio/
npm run build    # outputs to dist/
```

## Where things live

| What | File |
| --- | --- |
| Name, tagline, email, social links | `src/site.ts` |
| Case studies (one Markdown file each) | `src/content/work/*.md` |
| Case study structure to copy | `docs/case-study-template.md` |
| Images | `public/work/<slug>/` |
| About page | `src/pages/about.astro` |
| Colours, type, spacing | `src/styles/global.css` |

## Adding a case study

1. Copy `docs/case-study-template.md` to `src/content/work/<slug>.md`.
2. Put images in `public/work/<slug>/`. In frontmatter (`cover`), use `/work/<slug>/cover.jpg`.
   Inside the Markdown body, include the base path: `/portfolio/work/<slug>/image.png`.
3. Keep `draft: true` until it's ready. Drafts show in `npm run dev` but never in production.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it.
One-time setup: in the repo go to **Settings → Pages → Source** and pick **GitHub Actions**.

The site will be at `https://abhimanyu-saha.github.io/portfolio/`.
For a custom domain, set `SITE` to your domain and `BASE` to `/` in `astro.config.mjs`
(the Markdown image paths then drop the `/portfolio` prefix), and add `public/CNAME`.
