# Base44 Setup Notes

## Project
Horizon Properties — a premium real estate website built with Vite + React + React Router.
Multi-page app: Home, Properties (with filtering/search), Property Detail (with gallery), About, Services, Team, Contact.

## Stack
- Vite 6.x dev server on port 5173 (mapped to host 3000)
- React 18, React Router DOM 6
- CSS: three files (index.css, styles/components.css, styles/pages.css) using CSS custom properties
- Images: downloaded from Unsplash and served locally from `public/images/`

## Running
`docker compose -f docker-compose.base44.yml up -d` starts a `node:22-slim` container that runs `npm install && vite --host 0.0.0.0`. Source is bind-mounted at `/app`; Vite live-reloads on edits.

## Architecture
- `src/data/` — properties, services, team, and site content as JS modules
- `src/components/` — reusable: Header, Footer, PropertyCard, PropertyCarousel, ImageGallery, CTASection, ScrollReveal, Icons
- `src/pages/` — route pages (Home, Properties, PropertyDetail, About, Services, Team, Contact)
- `src/styles/` — component and page CSS

## No secrets required
This project has no external service dependencies.

## Notes
- The sandbox host directory has restrictive permissions (700); the Vite dev server (Node) handles this fine.
- Vite `allowedHosts: true` is set when `BASE44_PREVIEW_MODE === "1"` for preview proxy compatibility.
- Images are served from `/public/images/` so they load reliably in the preview iframe.
