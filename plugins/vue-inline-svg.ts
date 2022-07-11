import { InlineSvgPlugin } from 'vue-inline-svg';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(InlineSvgPlugin);
});
