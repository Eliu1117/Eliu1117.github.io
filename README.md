# Ethan Liu — Portfolio

Personal site for Ethan Liu, a Computer Science student at the University of Maryland, College Park, seeking Summer 2027 software engineering internships.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. **Vercel is the intended host.** This is a standard Next.js app — no static export.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build (same command Vercel runs)
npm run start   # serve the production build
npm run lint
```

## Deploy on Vercel

This repository is already linked to the Vercel project **`eliu1117-github-io`**. Pushing to GitHub creates a preview; merging to `main` updates production.

Production URL: [https://eliu1117-github-io.vercel.app](https://eliu1117-github-io.vercel.app)

### Import a new project (if you ever re-link)

1. Push this repository to GitHub (`Eliu1117/Eliu1117.github.io`).
2. Open [vercel.com/new](https://vercel.com/new) and **Import** that GitHub repo.
3. Confirm these settings (Vercel’s Next.js preset is correct — do not switch to “Other”):

   | Setting | Value |
   | --- | --- |
   | Framework Preset | **Next.js** |
   | Root Directory | `.` (repository root) |
   | Build Command | `npm run build` |
   | Output Directory | *leave default* (`.next` — do **not** set `out`) |
   | Install Command | `npm install` |

4. Click **Deploy**.

Do **not** set `output: "export"` in `next.config.ts`. Static export is for GitHub Pages and is not used here.

After the first production deploy, you can optionally set `NEXT_PUBLIC_SITE_URL` (for example `https://eliu1117-github-io.vercel.app` or a custom domain) so Open Graph tags, `sitemap.xml`, and `robots.txt` stay aligned. If it is unset, the app uses Vercel’s deployment URL automatically.

To use a custom domain: Vercel project → **Settings → Domains**. Then set `canonicalUrl` in `src/data/site.ts` or `NEXT_PUBLIC_SITE_URL` to that domain.

## Remaining placeholders

Email, phone, LinkedIn, and GitHub are live in the site (see `src/data/site.ts`).

A resume PDF is not in the repo yet, so **Download Resume** stays a labeled, disabled placeholder. To enable it, add `public/resume.pdf` and set `resumeUrl` to `"/resume.pdf"` in `src/data/site.ts`.

Project screenshot files were not supplied. Replace the labeled screenshot placeholders in `src/components/Projects.tsx` (and add images under `public/projects/`) when you have them.

Experience dates are unknown. Set `dates` on each item in `src/data/experience.ts` when you have start/end dates.

Optional custom domain: set `canonicalUrl` in `src/data/site.ts` or `NEXT_PUBLIC_SITE_URL`. Leave `canonicalUrl` as `null` on Vercel to use the deployment URL.

All other copy — identity, projects, skills, experience, education — lives in `src/data/` so you can update it without touching layout code.

## Project structure

```
src/
  app/           App Router pages, metadata, OG image, favicon
  components/    Layout and section UI
  data/          Projects, skills, experience, site config
  lib/           Small helpers
public/          Static files (add resume.pdf here)
```
