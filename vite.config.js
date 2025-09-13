import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'assets',
  publicDir: false,
  build: {
    outDir: '../static/dist',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'assets/js/main.js'),
        styles: resolve(__dirname, 'assets/scss/main.scss')
      }
    }
  },
  server: {
    hmr: {
      port: 3001,
      host: 'localhost'
    },
    port: 3000,
    strictPort: true,
    host: 'localhost',
    cors: true
  }
});