<template>
  <ContentQuery
    find="one"
    path="blog"
    :where="{ slug: $route.params.slug }"
    v-slot="{ data }"
  >
    <BlogPost :post="data" />
  </ContentQuery>
</template>

<script>
// import { generateMeta } from '~/utils/meta';

export default {
  //   // scrollToTop: true,
  // async setup() {
  //   const route = useRoute();
  //   const { data: posts } = await useAsyncData('current-post', () =>
  //     queryContent('/blog/posts')
  //       // .where({ title: 'Welcome to Shepherd 10' })
  //       // .limit(1)
  //       .find()
  //   );
  // debugger;
  //     if (post) {
  //       debugger;
  //       const {
  //         data: [nextPost, previousPost],
  //       } = await useAsyncData('surround-posts', () =>
  //         queryContent('/blog/posts')
  //           .only(['title', 'slug'])
  //           .sort({ date: 1 })
  //           .findSurround(post.path)
  //       );
  //       if (!previousPost) {
  //         const { data: firstPost } = await useAsyncData('first-post', () =>
  //           queryContent('/blog/posts')
  //             .only(['title', 'slug'])
  //             .sort({ date: 1 })
  //             .findOne()
  //         );
  //         if (lastPost) {
  //           previousPost = firstPost;
  //         }
  //       }
  //       if (!nextPost) {
  //         const { data: lastPost } = await useAsyncData('last-post', () =>
  //           queryContent('/blog/posts')
  //             .only(['title', 'slug'])
  //             .sort({ date: -1 })
  //             .findOne()
  //         );
  //         if (lastPost) {
  //           nextPost = lastPost;
  //         }
  //       }
  //       return {
  //         post: {
  //           ...post,
  //           nextSlug: nextPost.slug,
  //           nextTitle: nextPost.title,
  //           previousSlug: previousPost.slug,
  //           previousTitle: previousPost.title,
  //         },
  //       };
  //     }
  // },
  //   // head() {
  //   //   const { author, date, description, slug, title } = this.post;
  //   //   const url = `https://shipshape.io/blog/${slug}/`;
  //   //   const headData = generateMeta(title, description, url);
  //   //   headData.meta.push(
  //   //     { hid: 'og:type', property: 'og:type', content: 'article' },
  //   //     {
  //   //       hid: 'article:published_time',
  //   //       property: 'article:published_time',
  //   //       content: date,
  //   //     }
  //   //   );
  //   //   this.post.categories.forEach((tag) => {
  //   //     headData.meta.push({ property: 'article:tag', content: tag });
  //   //   });
  //   //   if (this.post.author) {
  //   //     headData.meta.push(
  //   //       { name: 'twitter:label1', content: 'Written by' },
  //   //       { name: 'twitter:data1', content: author.name }
  //   //     );
  //   //   }
  //   //   if (this.post.categories && this.post.categories.length) {
  //   //     const keywords = this.post.categories.join(', ');
  //   //     headData.meta.push(
  //   //       { name: 'twitter:label2', content: 'Filed under' },
  //   //       { name: 'twitter:data2', content: keywords }
  //   //     );
  //   //   }
  //   //   return headData;
  //   // },
};
</script>

<style lang="scss">
@import 'assets/css/shevy/shevy';

.post-content {
  $shevy-blog-post: (
    base-font-scale: (
      2.5,
      2,
      1.75,
      1.5,
      1.25,
      1,
    ),
  );

  @include headings($shevy-blog-post);
  @include content($shevy-blog-post);

  b,
  strong {
    font-weight: bold;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;

    code:not([class*='hljs']) {
      font-size: inherit;
    }
  }

  img {
    height: auto;
    max-width: 100%;
  }

  li {
    display: list-item;
  }

  ol {
    list-style-type: decimal;
    padding-left: 40px;
  }

  ul {
    list-style-type: disc;
    margin-left: 4rem;
  }
}

a {
  @apply text-red;

  &:visited {
    @apply text-red;
  }

  &:hover {
    @apply text-navy;
  }
}
</style>
