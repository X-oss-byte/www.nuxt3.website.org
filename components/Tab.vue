<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String
    },
    selected: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  computed: {
    href() {
      return '#' + this.name.toLowerCase().replace(/ |\./g, '-');
    }
  },
  mounted() {
    this.isActive = this.selected;
  }
};
</script>
