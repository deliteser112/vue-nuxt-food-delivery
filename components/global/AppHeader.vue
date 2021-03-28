<template>
  <div class="app-header" :class="{ elevate }">
    <a v-scroll-to="'#top'" href class="leading-none">
      <Logo v-if="elevate" />
    </a>
    <Spacer />
    <template v-if="isDesktop">
      <TextButton
        v-for="{ to, text } in buttons"
        :key="to"
        v-scroll-to="to"
        to="#"
        class="space-x-5"
        v-text="text"
      />
    </template>

    <template v-if="false">
      <button
        class="text-primary text-xs rounded py-1 px-3 hover:bg-primary hover:bg-opacity-25 animate uppercase outline-none"
        @click="menu = true"
      >
        <small>menu</small>
      </button>
      <div v-if="menu" class="menu">
        <div class="menu--wrapper">
          <div class="menu--close" @click="close = true" />

          <ul>
            <li @click="menu = false">
              <nuxt-link to="/#features">Features</nuxt-link>
            </li>
            <li @click="menu = false">
              <nuxt-link to="/#download">Download</nuxt-link>
            </li>
            <li @click="menu = false">
              <nuxt-link to="/#contact">Contact</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import responsiveness from '@/mixins/responsiveness'

export default {
  mixins: [responsiveness],
  props: { elevate: Boolean },
  data() {
    return {
      buttons: [
        {
          to: '#features',
          text: 'Features',
        },
        {
          to: '#download',
          text: 'Download',
        },
        {
          to: '#contact',
          text: 'Contact',
        },
      ],
      menu: true,
    }
  },
}
</script>

<style lang="scss">
.app-header {
  min-height: 54px;
  padding: 8px 16px;
  @apply flex;
  @apply items-center;
  @apply items-center;
  transition: 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
  &.elevate {
    @apply bg-white;
    @apply shadow-lg;
  }
}
.menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  .menu--wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    @apply bg-black;
    @apply bg-opacity-25;
    .menu--close {
      backdrop-filter: brightness(220%) blur(20px);
      height: 58px;
      width: 58px;
      @apply rounded-full;
      padding: 2rem;
      background: url('~@/assets/img/cancel.svg');
      background-clip: content-box;
      background-size: contain;
      background-repeat: no-repeat;
    }
    ul {
      width: 100%;
      flex: 1;
      li {
        backdrop-filter: brightness(220%) blur(20px);
        @apply m-4;
        @apply rounded;
        @apply shadow-md;
        height: calc(33.3333% - theme('margin.4') * 2);
        a {
          @apply px-8;
          @apply text-primary;
          @apply text-4xl;
          @apply py-6;
          height: 100%;
          @apply items-center;
          @apply flex;
          @apply justify-center;
          width: 100%;
        }
      }
    }
  }
}
</style>
