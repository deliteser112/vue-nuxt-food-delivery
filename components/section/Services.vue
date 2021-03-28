<template>
  <div id="services" class="services bg-white">
    <div class="py-12">
      <h2
        class="text-center text-sm text-gray-800 font-bold tracking-widest my-6"
      >
        WE PROVIDE THESE SERVICES
      </h2>
      <div class="flex text-center flex-wrap mt-4 mb-5 md:mb-8 _m_img_">
        <div class="p-5 w-full md:w-1/3 text-xs-center">
          <img src="@/assets/img/undraw_1.png" />
          <h3 class="services--title no-mb">A SaaS Platform</h3>
          <p class="services--subtext">to host content to a closed group</p>
        </div>
        <div class="p-5 w-full md:w-1/3 text-xs-center _m_img_">
          <img src="@/assets/img/undraw_2.png" />
          <h3 class="services--title no-mb">A Marketplace</h3>
          <p class="services--subtext">to showcase content</p>
        </div>
        <div class="p-5 w-full md:w-1/3 text-xs-center _m_img_">
          <img src="@/assets/img/undraw_3.png" />
          <h3 class="services--title no-mb">Creative Services</h3>
          <p class="services--subtext">like branding and content creation</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.services {
  &--group-img,
  &--monotize-img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 230px;
    width: 230px;
    padding-top: 100%; /* 1:1 Aspect Ratio */
    position: relative; /* If you want text inside of it */

    &:after {
      position: absolute;
      content: '';
      height: 50px;
      width: 50px;
    }
  }

  &--group-img {
    border-top-left-radius: 50%;
    background-image: url('~@/assets/img/closedgroup.png');
    &:after {
      right: -25px;
      bottom: 15%;
      border-bottom-right-radius: 50%;
      background-color: #336cea;
    }
  }

  &--monotize-img {
    border-bottom-left-radius: 50%;
    border-top-right-radius: 50%;
    background-image: url('~@/assets/img/monotize.png');
    &:after {
      right: -25px;
      bottom: 15%;
      height: 50px;
      border-bottom-left-radius: 75%;
      border-top-right-radius: 75%;
      background-color: #fc373c;
      width: 50px;
    }
  }

  &--title {
    @apply text-xl;
    @apply text-gray-900;
    @apply tracking-wide;
    font-weight: 600;
    margin-bottom: 1rem;
    &.no-mb {
      margin-bottom: 0.25rem;
    }
  }
  &--subtext {
    @apply text-muted;
    @apply text-xs;
  }
}

@media (min-width: theme('screens.md')) {
  .services {
    &--group-img,
    &--monotize-img {
      width: 100%;
      &:after {
        right: -40px;
        height: 80px;
        width: 80px;
      }
    }
    &--title {
      @apply text-2xl;
    }
    &--subtext {
      @apply text-base;
    }
  }
}
</style>
