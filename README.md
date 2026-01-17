# Ilya QA Portfolio (Next.js)

## Quick start
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Replace content
- Main profile data: `content/profile.ts`
- Case studies: `content/projects.ts`
- Images: put your real images in:
  - `public/projects/cross-browser/*.jpg`
  - `public/projects/api/*.jpg`
  - `public/projects/data/*.jpg`
  - `public/projects/release/*.jpg`
- CV: replace `public/cv.pdf`

## Deploy (Vercel)
1. Push this repo to GitHub (new repo).
2. Go to Vercel → “Add New Project” → import repo.
3. Framework: Next.js (auto).
4. Deploy.

## Notes
- Language switch uses `?lang=ru|en`.
- Styling: Tailwind. Fonts: Inter + IBM Plex Mono.
