# Base44 Setup Notes

## Project Overview
This is a minimal static HTML project — a single `index.html` file with no framework, backend, or build step.

## Running the App
```bash
docker compose -f docker-compose.base44.yml up -d
```
- nginx:alpine serves `index.html` on host port 3000.
- The repo root is bind-mounted read-only into the nginx html directory, so edits to `index.html` are reflected on reload.

## Verification
- `curl http://localhost:3000/` should return the HTML page.
- The preview shows the page at the sandbox URL.

## No Secrets Required
This project has no external service dependencies and needs no credentials.
