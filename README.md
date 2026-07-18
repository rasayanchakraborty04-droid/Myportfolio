# Portfolio Website

A modern personal portfolio built with Next.js, React, and a clean light theme. This project showcases a polished hero section, profile highlights, responsive mobile layout, and social integration through a custom footer.

## Key Features

- Responsive hero section with animated visuals and call-to-action buttons
- Image optimization using Next.js `Image` component for better loading performance
- Light-themed UI with soft gradients, glassmorphism-style cards, and subtle motion
- Dedicated `about` page for personal story and technology focus
- Custom footer with direct social links for Instagram, X, and GitHub
- Mobile-first responsive design across hero and footer sections

## Tech Stack

- Next.js 16.2.6
- React 19.2.4
- TypeScript
- CSS Modules
- `react-icons`
- ESLint for code quality

## Project Structure

- `app/`
  - `layout.tsx` — application shell and global wrapper
  - `page.tsx` — homepage / hero section
  - `about/page.tsx` — about page content
  - `globals.css` — global browser styles and theme basics
- `src/app/components/`
  - `HeroSection.tsx` — hero area with imagery and CTA buttons
  - `HeroSection.module.css` — hero-specific styles and animations
- `src/app/utils/`
  - `Footer.tsx` / `Footer.module.css` — footer links and layout
  - `Navbar.tsx` / `Navbar.module.css` — optional navigation bar styling
- `package.json` — project scripts and dependencies

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser to preview the site.

## Available Scripts

- `npm run dev` — run the local development server
- `npm run build` — build the production app
- `npm run start` — run the production build
- `npm run lint` — lint the project with ESLint

## Customization Notes

- Update the hero section text and profile image in `src/app/components/HeroSection.tsx`
- Change the about page content in `app/about/page.tsx`
- Adjust colors, spacing, and responsive behavior in the corresponding CSS module files

## Deployment

This app is ready to deploy on any platform that supports Next.js, including Vercel and Netlify. Use the `npm run build` command to generate a production build before deployment.

## Contact

For quick edits, update the social links in `src/app/utils/Footer.tsx` and the hero section buttons in `src/app/components/HeroSection.tsx`.
