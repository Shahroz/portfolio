# Shahroz Allauddin — Portfolio v2

Dark-mode, glassmorphic single-page portfolio built with Next.js 16 (App Router, Turbopack, static export), React 19, TypeScript, Tailwind CSS, and Framer Motion.

Requires Node.js 20.9+.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/
```

## Contact form

The contact form uses [Web3Forms](https://web3forms.com) (free, client-side). Get an access key and paste it into `siteConfig.web3formsAccessKey` in `src/data/portfolioData.ts`. Until then the form will show an error state; email/LinkedIn/phone links work regardless.

## Editing content

All content lives in one typed file: `src/data/portfolioData.ts` — profile, metrics, experience, projects, tech stack, and nav links. No component changes needed for content updates.

Set your production domain in `siteConfig.url` (used by metadata, sitemap, robots, and JSON-LD).

## Deploy

Static export — deploy `out/` anywhere (Vercel, Netlify, Cloudflare Pages, S3). On Vercel, just import the repo; it auto-detects Next.js.
