<template>
  <span class="inline-flex items-center">
    <IconLogo :size="logoSize" />
    <div
      v-if="!noText"
      class="text-primary font-logo ml-3 mt-1 animate leading-none"
      :class="[textSize]"
    >
      Veehive.ai
    </div>
  </span>
</template>

<script>
export default {
  props: {
    noText: { type: Boolean, default: false },
    large: { type: Boolean, default: false },
  },
  computed: {
    textSize() {
      return this.large ? 'text-logo-large' : 'text-logo'
    },
    logoSize() {
      return this.large ? '64' : '40'
    },
  },
}
</script>
