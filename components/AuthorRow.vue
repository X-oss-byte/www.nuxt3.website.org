<template>
  <div class="flex">
    <div
      class="flex items-center pb-8"
      itemprop="author"
      itemscope
      itemtype="http://schema.org/Person"
    >
      <div class="w-12">
        <nuxt-img
          class="h-auto rounded-full w-full"
          format="webp"
          :src="`${image}`"
          alt="Author image"
          itemprop="image"
        />
      </div>

      <div class="pl-2 pb-2">
        By

        <nuxt-link :to="`/blog/authors/${id}/`" itemprop="name">
          {{ name }}
        </nuxt-link>

        |
      </div>
    </div>

    <div class="flex items-center pb-8">
      <div class="pl-2 pb-2">
        <time :datetime="date" itemprop="datePublished dateModified">
          {{ formatDate(date) }}
        </time>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from '~/utils/date';

export default {
  props: {
    date: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    formatDate
  }
};
</script>
