import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/LandingPageBarbearia/',
  plugins: [react()],
  build: {
    publicDir: 'public',
    base: "/BarberLandig",
  },
})