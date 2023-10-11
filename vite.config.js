import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

const manifestForPlugIn = {
  registerType: 'prompt',
  includeAssets: ['images/favicon/favicon.ico', 'images/favicon/apple-touch-icon.png'],
  manifest: {
    name: 'trackapoint',
    short_name: 'trackapoint',
    description: 'Game points tracking helper. Roll dice helper.',
    icons: [
      {
        src: 'images/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'images/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: '#242e42',
    background_color: '#242e42',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [react(), VitePWA(manifestForPlugIn)],
});
