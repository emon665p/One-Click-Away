# One Click Away ❤️

A premium, luxury date invitation website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Features

- App Router pages for the full invitation flow
- Premium animation system with fade, slide, scale, hover, and floating hearts
- Shared selection state across pages for vibe, date, time, and food
- Responsive design for mobile, tablet, and desktop
- SEO metadata and Open Graph support
- Loading screen for a polished initial experience

## Scripts

- `npm run dev` - start local development server
- `npm run build` - build for production
- `npm run start` - start production server
- `npm run export` - build and export a static site
- `npm run lint` - run ESLint checks

## Deployment

### Vercel

1. Push your repository to GitHub.
2. In Vercel, create a new project and import the repository.
3. Use the default Next.js settings.
4. Set the root directory to `/`.
5. Deploy.

### GitHub Pages

1. In `package.json`, run `npm run export` to generate static files in the `out` folder.
2. Push the repository to GitHub.
3. In the repository settings, enable GitHub Pages and select the `gh-pages` branch or the `out` folder on the `main` branch.
4. Optionally use the `gh-pages` package or GitHub Actions to automate deploys.

## Notes

- Update the `metadataBase` and Open Graph URL in `src/app/layout.tsx` for your live domain.
- The app is optimized for screens from mobile to desktop and uses glassmorphism styling throughout.
