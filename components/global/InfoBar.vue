<template>
  <transition-expand>
    <div v-if="!close">
      <div class="info-bar">
        Veehive is a video streaming platform to convert your audience into
        subscribers.
        <nuxt-link v-scroll-to="'#contact'" to="#" class="underline">
          Register your interest.
        </nuxt-link>
        <img src="@/assets/img/cancel.svg" @click="close = true" />
      </div>
    </div>
  </transition-expand>
</template>

<script>
export default {
  data() {
    return {
      close: false,
    }
  },
}
</script>

<style lang="scss">
.info-bar {
  @apply bg-primary;
  color: white;
  text-align: center;
  width: 100%;
  padding: 12px;
  /* figma styles */
  // font-family: 'Circular Std';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  padding-right: 32px;
  img {
    @apply cursor-pointer;

    position: absolute;
    filter: invert(100%);
    top: calc(50% - 12px / 2);
    height: 12px;
    width: 12px;
    right: 12px;
    object-fit: contain;
    opacity: 0.6;
    transition: opacity 200ms ease-in-out;

    &:hover,
    &:focus,
    &:active {
      opacity: 1;
    }
  }
}
</style>
