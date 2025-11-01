import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/me/',                 // repo name → required for GitHub Pages project sites
  build: { outDir: 'docs' },    // build to /docs so Pages can serve it
  optimizeDeps: { exclude: ['lucide-react'] },
})