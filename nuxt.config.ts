import { defineNuxtConfig } from 'nuxt';
import svgLoader from 'vite-svg-loader';
import { viteRequire } from 'vite-require';

const imgSrc = 'http://i.imgur.com/30OI4fv.png';
const twitterUsername = '@shipshapecode';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  ssr: true,
  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.scss'],

  app: {
    /*
     ** Headers of the page
     */
    head: {
      titleTemplate: '%s | Ship Shape',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'referrer', content: 'unsafe-url' },
        { property: 'og:site_name', content: 'Ship Shape' },

        // Opengraph
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', property: 'og:image', content: imgSrc },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image/png',
        },
        { hid: 'og:image:height', property: 'og:image:height', content: '256' },
        { hid: 'og:image:width', property: 'og:image:width', content: '256' },

        // Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:site', name: 'twitter:site', content: twitterUsername },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: twitterUsername,
        },
        {
          hid: 'twitter:image:src',
          name: 'twitter:image:src',
          content: imgSrc,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'preload',
          href: '/fonts/PierSans-Bold.woff2',
          as: 'font',
          type: 'font/woff2',
        },
        {
          rel: 'preload',
          href: '/fonts/PierSans-Light.woff2',
          as: 'font',
          type: 'font/woff2',
        },
        {
          rel: 'preload',
          href: '/fonts/PierSans-Regular.woff2',
          as: 'font',
          type: 'font/woff2',
        },
      ],
    },
  },

  nitro: {
    plugins: ['~/server/plugins/content.ts'],
  },

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
    plugins: [svgLoader(), viteRequire()],
  },

  content: {
    highlight: {
      preload: ['css', 'handlebars', 'scss', 'js', 'json', 'ts', 'tsx'],
      // TODO: support multiple themes later
      theme: 'github-light',
    },
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
