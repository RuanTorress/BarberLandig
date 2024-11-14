import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/LandingPageBarbearia/', // ajuste para o nome exato do repositório
  plugins: [react()],
});
