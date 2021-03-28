<template>
  <div>
    <Banner ref="banner" />
    <Features />
    <Services />
    <Organization />
    <Download />
    <Contact />
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$route.hash)
      setTimeout(() => {
        try {
          this.$scrollTo(this.$route.hash)
        } catch {
          //
        }
      }, 200)
  },
}
</script>
