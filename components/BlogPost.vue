<template>
  <article itemscope itemtype="http://schema.org/BlogPosting">
    <link itemprop="mainEntityOfPage" :href="$route.path" />
    <link itemprop="publisher" href="shipshapeorg" />
    <link itemprop="image" href="shipshapelogo" />

    <div class="section flex flex-wrap justify-center">
      <div class="max-w-3xl w-full">
        <h1 class="blog-post-title font-semibold" itemprop="headline">
          {{ post.title }}
        </h1>

        <!-- <AuthorRow v-bind="post.author" :date="post.date" /> -->

        <ContentRenderer class="post-content" :value="post"/>

        <ContentQuery find="surround" :path="post._path" v-slot="{ data }">
          <BottomLinks
            :next-link="`/blog/${data[0]?.slug}/`"
            :next-link-text="data[0]?.title"
            :previous-link="`/blog/${data[1]?.slug}/`"
            :previous-link-text="data[1]?.title"
          />
        </ContentQuery>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    default: () => {},
  },
});

debugger;
</script>
<script>
export default {
  async setup() {
    debugger;
    if (props.post) {
      debugger;
      const {
        data: [nextPost, previousPost],
      } = await useAsyncData('surround-posts', () =>
        queryContent('blog')
          .only(['title', 'slug'])
          .sort({ date: 1 })
          .findSurround(props.post._path)
      );
      if (!previousPost) {
        const { data: firstPost } = await useAsyncData('first-post', () =>
          queryContent('blog')
            .only(['title', 'slug'])
            .sort({ date: 1 })
            .findOne()
        );
        if (lastPost) {
          previousPost = firstPost;
        }
      }
      if (!nextPost) {
        const { data: lastPost } = await useAsyncData('last-post', () =>
          queryContent('blog')
            .only(['title', 'slug'])
            .sort({ date: -1 })
            .findOne()
        );
        if (lastPost) {
          nextPost = lastPost;
        }
      }
      debugger;
      return {
        post: {
          ...post,
          nextSlug: nextPost.slug,
          nextTitle: nextPost.title,
          previousSlug: previousPost.slug,
          previousTitle: previousPost.title,
        },
      };
    }
  },
};
</script>
