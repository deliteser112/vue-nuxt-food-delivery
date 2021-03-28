const screens = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export default {
  data() {
    return {
      width: window.document.body.clientWidth,
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.width = window.document.body.clientWidth
    },
  },
  computed: {
    ...Object.entries(screens).reduce((obj, [key, value]) => {
      obj['is' + key] = function () {
        return value < this.width
      }
      return obj
    }, {}),
    isMoblie() {
      return screens.md > this.width
    },
    isDesktop() {
      return screens.md < this.width
    },
  },
}
