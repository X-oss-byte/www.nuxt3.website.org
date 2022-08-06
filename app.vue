<template>
  <div
    itemscope
    itemtype="https://schema.org/Organization"
    itemid="shipshapeorg"
    :class="{
      'bg-blue-light':
        $route.name === 'index' ||
        $route.name === 'services' ||
        $route.name === 'about',
    }"
  >
    <meta itemprop="legalName" content="Ship Shape Consulting LLC" />

    <NavMenu />

    <main>
      <NuxtPage />
    </main>

    <WaveFooter />
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'preload',
      href: '~/assets/fonts/PierSans-Bold.woff2',
      as: 'font',
      type: 'font/woff2',
    },
    {
      rel: 'preload',
      href: '~/assets/fonts/PierSans-Light.woff2',
      as: 'font',
      type: 'font/woff2',
    },
    {
      rel: 'preload',
      href: '~/assets/fonts/PierSans-Regular.woff2',
      as: 'font',
      type: 'font/woff2',
    },
  ],
});
</script>
