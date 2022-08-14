<template>
  <div class="blog-posts section flex flex-wrap justify-center">
    <div class="section-content">
      <div class="flex items-center">
        <h1 class="font-semibold">Ship Shape Insights</h1>

        <a
          class="-mt-3 p-12"
          href="https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2Fshipshape.io%2Ffeed.xml"
          target="_blank"
          rel="noopener"
        >
          <RSS />
        </a>
      </div>

      <p>
        Our thoughtful ramblings about Ember.js, Nuxt.js, JavaScript, life,
        liberty and the pursuit of happiness.
      </p>

      <ContentQuery path="blog" :sort="{ date: -1 }" v-slot="{ data }">
        <BlogPostMenu :posts="data" />
      </ContentQuery>
    </div>
  </div>
</template>

<script setup>
import { generateMeta } from '~/utils/meta';
import RSS from '~/assets/images/svgs/rss.svg';

const title = 'Blog';
const description =
  'Read our blog to stay ahead of trends in Ember.js, JavaScript, and everything in between.';
const url = 'https://shipshape.io/blog/';

useHead(generateMeta(title, description, url));
</script>
