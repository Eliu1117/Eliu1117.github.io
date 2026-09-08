# Ethan Liu — Portfolio

Personal site for Ethan Liu, a Computer Science student at the University of Maryland, College Park, seeking Summer 2027 software engineering internships.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed as a single-page portfolio with sticky navigation.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint
```

## Fill in placeholders

Contact details and a resume file were not supplied, so they are **clearly marked as placeholders** in the UI. Edit `src/data/site.ts`:

| Field | What to set |
| --- | --- |
| `email` | Your email address, e.g. `"you@example.com"` |
| `phone` | Your phone number |
| `linkedin` | Full LinkedIn profile URL |
| `resumeUrl` | `"/resume.pdf"` after you add the file |

Then add your resume PDF at `public/resume.pdf`.

Project screenshot files were also not supplied. Replace the labeled screenshot placeholders in `src/components/Projects.tsx` (and add images under `public/projects/`) when you have them.

Experience dates are unknown. Set `dates` on each item in `src/data/experience.ts` when you have start/end dates.

All other copy — identity, projects, skills, experience, education — lives in `src/data/` so you can update it without touching layout code.

## Deploy on Vercel (recommended)

This project is a standard Next.js app. Vercel is the primary host:

1. Push this repository to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Leave the defaults (`npm install`, `npm run build`, output `.next`).
4. Deploy. Set a custom domain if you want something other than the Vercel URL.

After deploy, update `siteUrl` in `src/data/site.ts` to your production URL so Open Graph tags, `sitemap.xml`, and `robots.txt` match.

This repository is named `Eliu1117.github.io`. If the live site should stay on that hostname, either:

- Point the GitHub Pages custom-domain / DNS setup at Vercel, or
- Change GitHub Pages to not serve the raw Next.js source from `main`.

Merging this app onto `main` **without** a Vercel (or Actions) deploy will stop GitHub Pages from serving a working site, because Pages expects static HTML at the repo root.

## GitHub Pages (optional)

GitHub Pages cannot run the Next.js server. If you want to keep publishing at `https://eliu1117.github.io` from this repo:

1. In `next.config.ts`, add static export:

   ```ts
   const nextConfig: NextConfig = {
     reactStrictMode: true,
     output: "export",
   };
   ```

2. Run `npm run build`. Next.js writes a static site to `out/`.
3. Publish `out/` with GitHub Actions (GitHub Pages source = GitHub Actions), for example:

   ```yaml
   # .github/workflows/pages.yml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
             cache: npm
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: out
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

4. In the repo **Settings → Pages**, set Source to **GitHub Actions**.

Static export is optional. Prefer Vercel if you want the full Next.js feature set (no `output: "export"` required).

## Project structure

```
src/
  app/           App Router pages, metadata, OG image, favicon
  components/    Layout and section UI
  data/          Projects, skills, experience, site config
  lib/           Small helpers
public/          Static files (add resume.pdf here)
```
