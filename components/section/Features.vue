<template>
  <div id="features" class="container features">
    <div class="justify-around items-center mt-12 flex-wrap-reverse">
      <div class="md:w-5/12 py-8 md:p-8">
        <div class="features--group-img mx-auto" />
      </div>
      <div class="w-11/12 md:w-5/12 py-5 md:p-5">
        <h3 class="features--title">Closed Group Management</h3>
        <p class="features--subtext md:w-8/12">
          Don’t hold back, you’re safe. Create private groups, invite your
          friends and businesses and share your content in short video format.
        </p>
      </div>
    </div>
    <div class="flex mb-12 justify-around items-center flex-wrap">
      <div class="w-11/12 md:w-1/3 py-5 md:p-5">
        <h3 class="features--title">Live Streaming</h3>
        <p class="features--subtext">
          Create a public or private group, invite your friends and businesses
          and share your content in short video format.
        </p>
      </div>
      <div class="md:w-1/3 py-5 md:p-5">
        <div class="features--monotize-img mx-auto" />
      </div>
      <div class="w-11/12 md:w-1/3 py-5 md:p-5 md:pl-12">
        <h3 class="features--title">Monetization</h3>
        <p class="features--subtext">
          Create a public or private group, invite your friends and businesses
          and share your content in short video format.
        </p>
      </div>
    </div>
    <div class="w-full">
      <hr class="w-1/6 h-1 rounded-sm bg-black opacity-75 mx-auto" />
    </div>
    <div class="py-12 much_more">
      <h2
        class="text-center text-sm text-gray-800 font-bold tracking-widest my-6"
      >
        AND MUCH MORE
      </h2>
      <div class="flex text-center flex-wrap mt-4 mb-5 md:mb-8">
        <div class="p-5 w-full md:w-1/3">
          <h3 class="features--title no-mb">Community Channels</h3>
          <p class="features--subtext">Find your tribe.</p>
        </div>
        <div class="p-5 w-full md:w-1/3">
          <h3 class="features--title no-mb">Short Form Content</h3>
          <p class="features--subtext">Inspire your audience.</p>
        </div>
        <div class="p-5 w-full md:w-1/3">
          <h3 class="features--title no-mb">Mobile First & Clean UX</h3>
          <p class="features--subtext">Intuitive interface and easy to use.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.features {
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
  .features {
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
