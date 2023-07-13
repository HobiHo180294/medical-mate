import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: '/src/components',
      pages: '/src/pages',
      styles: '/src/styles',
      types: '/src/types',
      sections: '/src/sections',
      constants: '/src/constants',
      helpers: '/src/helpers',
    },
  },
});
