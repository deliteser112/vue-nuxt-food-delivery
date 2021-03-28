<template>
  <component
    :is="component"
    :to="to"
    class="text-muted font-medium hover:text-primary flex items-center px-8 py-2 h-12"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    to: { type: [String, Object], default: null },
  },
  computed: {
    component() {
      if (this.to) return 'nuxt-link'
      return 'button'
    },
  },
}
</script>
