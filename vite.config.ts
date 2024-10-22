import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "Vite PWA Project",
        short_name: "Vite PWA Project",
        display: "standalone",
        description: "WIM-I 해석 상담 보고서를 위한 검사 어플리케이션",
        background_color: "#ffffff",
        theme_color: "#008649",
        icons: [
          {
            src: "img/pwa-64x64.png",
            sizes: "64x64",
            type: "image/jpg",
          },
          {
            src: "img/pwa-192x192.png",
            sizes: "192x192",
            type: "image/pwa/jpg",
          },
          {
            src: "img/pwa-256x256.png",
            sizes: "256x256",
            type: "image/jpg",
            purpose: "any",
          },
          {
            src: "img/pwa-384x384.png",
            sizes: "256x256",
            type: "image/jpg",
            purpose: "any",
          },
          {
            src: "img/pwa-512x512.png",
            sizes: "512x512",
            type: "image/jpg",
            purpose: "any",
          },
          {
            src: "img/maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
