import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/me/',              // project repo name
  build: { outDir: 'docs' }, // deploying from main → /docs
  optimizeDeps: { exclude: ['lucide-react'] },
})
