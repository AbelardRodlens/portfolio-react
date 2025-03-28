import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 
  server: {
    allowedHosts: []
  },

  base: "/portfolio-react",
  
  build: {
    outDir:'./docs'
  }
  
})
