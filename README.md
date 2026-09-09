# Ethan Liu — Portfolio

Personal site for Ethan Liu, a Computer Science student at the University of Maryland, College Park (General Business Minor, May 2028), seeking Summer 2027 software engineering and technology internships.

**Live site:** [eliu1117-github-io.vercel.app](https://eliu1117-github-io.vercel.app)

Featured project report: [Diabetes Risk Prediction from CDC Health Indicators](https://eliu1117-github-io.vercel.app/projects/diabetes-risk)

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Hosted on **Vercel**.

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

## Deploy

This repository is linked to the Vercel project **`eliu1117-github-io`**. Pushing to GitHub creates a preview; merging to `main` updates production.

- Production: [https://eliu1117-github-io.vercel.app](https://eliu1117-github-io.vercel.app)
- Do **not** set `output: "export"` in `next.config.ts` — this app uses the standard Next.js runtime on Vercel, not GitHub Pages static export.

Optional: set `NEXT_PUBLIC_SITE_URL` or `canonicalUrl` in `src/data/site.ts` if you add a custom domain.

## Content

Site copy lives in `src/data/` (projects, skills, experience, education, contact). Resume PDF: `public/Ethan-Liu-Resume.pdf`.

## Project structure

```
src/
  app/           App Router pages, metadata, OG image, favicon
  components/    Layout and section UI
  data/          Projects, skills, experience, site config
  lib/           Small helpers
public/          Resume, project screenshots, hosted project reports
```
