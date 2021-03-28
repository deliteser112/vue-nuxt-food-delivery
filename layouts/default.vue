<template>
  <div class="bg-gradiant">
    <header ref="header" class="main-header" :class="{ show, scrolled }">
      <InfoBar />
      <AppHeader :elevate="scrolled" />
    </header>
    <main id="top" ref="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      scrolled: false,
      scrollTop: window.document.scrollingElement.scrollTop,
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    window.document.addEventListener('scroll', this.onScroll)
    // this.onResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize)
    window.document.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const scrollTop = window.document.scrollingElement.scrollTop
      this.show = this.scrollTop > scrollTop
      this.scrolled = !!scrollTop
      this.scrollTop = scrollTop
    },
    // onResize() {
    //   this.$refs.banner.$el.style.paddingTop =
    //     this.$refs.header.clientHeight + 'px'
    // },
  },
}
</script>

<style lang="scss">
.main-header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  transition: 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 99;

  &.scrolled {
    position: fixed;
    transform: translateY(-100%);
  }
  &.show {
    transform: translateY(0%);
  }
}
</style>
