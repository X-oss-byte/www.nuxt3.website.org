import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  /*
   ** Global CSS
   */
  css: [
    '~/assets/css/main.scss',
    // 'aos/dist/aos.css',
    // 'highlight.js/styles/github.css',
  ],

  modules: ['@nuxt/content', '@nuxt/image-edge', '@nuxtjs/tailwindcss'],
});
