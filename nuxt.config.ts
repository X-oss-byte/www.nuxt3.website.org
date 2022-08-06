import { defineNuxtConfig } from 'nuxt';
import Fonts from 'vite-plugin-fonts';
import svgLoader from 'vite-svg-loader';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  /*
   ** Global CSS
   */
  css: [
    'virtual:fonts.css',
    '~/assets/css/main.scss',
    // 'aos/dist/aos.css',
    // 'highlight.js/styles/github.css',
  ],

  image: {
    dir: 'assets/images',
  },

  modules: ['@nuxt/content', '@nuxt/image-edge', '@nuxtjs/tailwindcss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/css/_variables.scss";',
        },
      },
    },
    plugins: [
      Fonts({
        custom: {
          families: [{ name: 'Pier Sans', src: '~/assets/fonts/*.woff2' }],
        },
      }),
      svgLoader(),
    ],
  },

  // hooks: {
  //   'content:file:beforeInsert': async (document, database) => {
  //     if (document.extension === '.md' && document.dir === '/blog') {
  //       const html = converter.makeHtml(document.text);
  //       const description = truncate(html.replace(/(<([^>]+)>)/gi, ''), {
  //         length: 260,
  //         separator: /,?\.* +/,
  //       });

  //       document.description = description;

  //       const author = await database
  //         .query(`/blog/authors/${document.authorId}`)
  //         .fetch();

  //       document.author = author;
  //     }
  //   },
  // },
});
