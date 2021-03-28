<template>
  <div class="model">
    <div v-if="model" class="model--container">
      <transition name="model-drop">
        <div class="model--card" :style="{ maxWidth: `${maxWidth}px` }">
          <slot></slot>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="model" class="model--backdrop" @click="model = false"></div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean,
    maxWidth: { type: [String, Number], default: '320' },
  },
  data() {
    return {
      model: this.value,
    }
  },
  watch: {
    value() {
      this.model = this.value

      if (this.model) {
        document.body.style.position = 'fixed'
        document.body.style.top = `-${window.scrollY}px`
      } else {
        const scrollY = document.body.style.top
        document.body.style.position = ''
        document.body.style.top = ''
        window.scrollTo(0, parseInt(scrollY || '0') * -1)
      }
    },
    model() {
      this.$emit('input', this.model)
    },
  },
}
</script>

<style lang="scss">
.model {
  z-index: 100;

  &--container,
  &--backdrop {
    @apply fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 20;
  }

  &--container {
    @apply flex;
    @apply justify-center;
    @apply items-center;
  }

  &--card {
    z-index: 100;
    @apply bg-white;
    @apply shadow-md;
    @apply rounded;
    @apply p-3;
    max-height: 90vh;
    width: 100%;
    overflow-y: auto;
  }

  &--backdrop {
    @apply bg-black;
    @apply bg-opacity-25;
  }
}

.modal-drop-enter,
.modal-drop-leave-active {
  opacity: 0;
}

.modal-drop-enter .model--card,
.modal-drop-leave-active .model--card {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
