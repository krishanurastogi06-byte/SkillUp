// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ← this allows access from other devices on your network
    port: 5173,      // optional: specify a port
  },
})
