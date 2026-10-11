# Base44 Setup Notes

## Project
Single static `index.html` page (Real Estate). No backend, no dependencies, no build step.

## Running
Served by `python:3.12-slim` running `http.server` on port 80 (mapped to host 3000) via `docker-compose.base44.yml`. The repo directory is bind-mounted read-only at `/app`.

## Why not nginx
The sandbox root directory has restrictive permissions (700) that nginx's non-root worker process cannot traverse, causing 403 Forbidden. Python's `http.server` runs as root and reads the files without issue.

## No secrets required
This project has no external service dependencies.
