import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/main.scss',
    // 'aos/dist/aos.css',
    // 'highlight.js/styles/github.css',
  ],

  image: {
    dir: 'assets/images'
  },

  modules: ['@nuxt/image-edge', '@nuxtjs/tailwindcss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/_variables.scss";',
        },
      },
    },
  },
});
