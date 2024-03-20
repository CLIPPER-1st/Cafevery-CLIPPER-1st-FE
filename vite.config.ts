import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import {fileURLToPath} from 'url';
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        icons: [
          {
            "src": "app-icon/icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "app-icon/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "app-icon/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "app-icon/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "app-icon/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "app-icon/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "app-icon/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "app-icon/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png",
            "purpose": "any"
          },
          {
            "src": "app-icon/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "app-icon/icon-1024x1024.png",
            "sizes": "1024x1024",
            "type": "image/png",
            "purpose": "maskable"
          }
        ]
      }
    }
  )
],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
        },
      },
    },
  },
});
