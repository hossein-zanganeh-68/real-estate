# Horizon Properties — Base44 Dev Environment

## Stack
- **Framework:** Vite + React 18 (SPA)
- **Routing:** react-router-dom v6
- **Animations:** framer-motion
- **Fonts:** Outfit (headings) + Inter (body), loaded via Google Fonts in index.html
- **No backend/database:** All property data is in `src/data/properties.js` as static arrays. Structured for future DB connection.

## Running the app
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The Vite dev server runs on port 5173 inside the container, mapped to host port 3000. Live reload is active via Vite HMR.

## Project structure
- `src/data/` — static data (properties, team, services)
- `src/components/` — reusable UI (Header, Footer, PropertyCard, Button, etc.)
- `src/sections/` — homepage sections (Hero, About, Featured, Services, Team, CTA)
- `src/pages/` — route pages (Home, Properties, PropertyDetail, About, Services, Team, Contact)
- `src/index.css` — design system: CSS variables, reset, all component/section/page styles

## Key design tokens
- Deep Navy: `#0A1420` / `#102A43`
- Champagne/Gold: `#C5A059`
- Ivory: `#F9F7F2`
- Near-Black: `#1A1A1A`

## Sandbox overrides
- Vite binds `0.0.0.0` and accepts external hosts via `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS` (set by platform).
- No application code is gated on `BASE44_PREVIEW_MODE`.
