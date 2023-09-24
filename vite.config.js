import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@Image': '/src/assets',
      '@Components': '/src/components',
      '@Containers': '/src/containers',
      '@Imports': '/src/imports/*',
      '@Utils': '/src/utils',
      '@Styles': '/src/styles',
    },
  },
});
