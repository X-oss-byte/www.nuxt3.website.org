<script setup>
import { generateMeta } from '~/utils/meta';
import { sephoraTestimonial, expelTestimonial } from '~/testimonials/index.js';

const testimonials = [sephoraTestimonial, expelTestimonial];

const { data: posts } = await useAsyncData('recent-posts-list', () =>
  queryContent('blog/posts').sort({ date: -1 }).limit(3).find()
);

const title = 'Top-Tier, Full-Stack Software Consultants';
const description =
  "Ship Shape's app development company offers a top-tier team of on-shore, full-stack software consultants who can't wait to build or improve your product.";
const url = 'https://shipshape.io/';

useHead(generateMeta(title, description, url));
</script>

<template>
  <div class="relative">
    <HeroBlock hero-classes="home bg-blue-light">
      <template #content>
        <h1 class="leading-none">Our software consultants make waves</h1>

        <div class="mt-3 flex w-full justify-center lg:mt-8 lg:justify-start">
          <NuxtLink to="/contact/" class="btn btn-red w-full lg:w-auto">
            Come on board
          </NuxtLink>
        </div>
      </template>

      <template #icon>
        <nuxt-img
          alt="Ship Shape octopus mascot, with a pencil in its tentacle, is working hard on Ember, Next.js and Nuxt apps."
          class="h-auto w-full max-w-3xl"
          format="webp"
          height="1250"
          src="/img/hero-images/landing.png"
          width="1536"
        />
      </template>
    </HeroBlock>

    <div class="relative z-10">
      <BuildTheFuture />

      <WeKnowTheRopes />

      <BigNames />

      <WhyUsGrid />

      <DoubleQuotes :testimonials="testimonials" />

      <RecentBlogPosts :posts="posts" />

      <!-- <NewsletterSignup /> -->
    </div>
  </div>
</template>
