<script setup>
import { generateMeta } from '~/utils/meta';
const route = useRoute();
const { category } = route.params;
const dasherizedCategory = category.replace(/ |\./g, '-');

let { data: posts } = await useAsyncData('category-posts', () =>
  queryContent('blog/posts')
    .where({ categories: { $contains: dasherizedCategory } })
    .sort({ date: -1 })
    .find()
);

const numPosts = posts?.value ? posts.value.length : 0;
const title = `${category} - Blog Category`;
const description = `See the ${numPosts} blog posts Ship Shape has written about ${category}.`;
const url = `https://shipshape.io/blog/categories/${category.replace(
  / |\./g,
  '-'
)}/`;

useHead(generateMeta(title, description, url));
</script>

<template>
  <div class="blog-posts section flex flex-wrap justify-center">
    <div class="section-content">
      <div class="flex items-center">
        <h1 class="font-semibold">
          {{ category }}
        </h1>
      </div>

      <BlogPostMenu :posts="posts" />
    </div>
  </div>
</template>
