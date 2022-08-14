<script setup>
const props = defineProps({
  post: {
    type: Object,
    default: () => {},
  },
});

let previousPost;
let nextPost;

if (props.post) {
  const { data: response } = await useAsyncData('surround-posts', () =>
    queryContent('blog/posts')
      .sort({ date: 1 })
      .findSurround({ _path: props.post._path })
  );

  if (response?.value) {
    nextPost = response.value[0];
    previousPost = response.value[1];

    if (!previousPost) {
      const { data: firstPost } = await useAsyncData('first-post', () =>
        queryContent('blog/posts').only(['title', 'slug']).sort({ date: 1 }).findOne()
      );

      if (firstPost) {
        previousPost = firstPost;
      }
    }
    if (!nextPost) {
      const { data: latestPost } = await useAsyncData('latest-post', () =>
        queryContent('blog/posts')
          .only(['title', 'slug'])
          .sort({ date: -1 })
          .findOne()
      );

      if (latestPost) {
        nextPost = latestPost;
      }
    }
  }
}
</script>

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

        <AuthorRow v-bind="post.author" :date="post.date" />

        <ContentRenderer class="post-content" :value="post" />

        <BottomLinks
          :next-link="`/blog/${nextPost.slug}/`"
          :next-link-text="nextPost.title"
          :previous-link="`/blog/${previousPost.slug}/`"
          :previous-link-text="previousPost.title"
        />
      </div>
    </div>
  </article>
</template>
