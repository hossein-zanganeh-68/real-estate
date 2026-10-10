import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// In Base44 preview mode, allow the sandbox host domain so the
// preview proxy can reach the dev server. Unset = original behavior.
const isPreview = process.env.BASE44_PREVIEW_MODE === '1'
const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    ...(isPreview && sandboxDomain ? { allowedHosts: [`.${sandboxDomain}`] } : {}),
  },
  preview: {
    host: '0.0.0.0',
    port: 5173,
    ...(isPreview && sandboxDomain ? { allowedHosts: [`.${sandboxDomain}`] } : {}),
  },
})
