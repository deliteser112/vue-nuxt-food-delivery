<template>
  <div id="channels" class="bg-white">
    <!-- <div class="w-full">
      <hr class="w-1/6 h-1 rounded-sm bg-black opacity-75 mx-auto" />
    </div> -->
    <div class="py-4 md:pt-12">
      <h2
        class="text-center text-sm text-gray-800 font-bold tracking-widest my-6"
      >
        OUR CHANNELS
      </h2>
      <div class="flex text-center justify-center flex-wrap mt-4 mb-5 md:mb-8">
        <div
          class="p-5 w-full md:w-1/3 flex flex-col justify-center items-center"
        >
          <div class="bg-white w-full md:w-2/3 rounded-md shadow-lg">
            <img
              src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"
              class="object-cover rounded-md"
              alt=""
            />
          </div>
          <h3 class="features--title no-mb pt-4">Food</h3>
          <!-- <p class="features--subtext">Inspire your audience.</p> -->
        </div>
        <div
          class="p-5 w-full md:w-1/3 flex flex-col justify-center items-center"
        >
          <div class="bg-white w-full md:w-2/3 rounded-md shadow-lg">
            <img
              src="https://media.istockphoto.com/photos/happiness-bliss-and-freedom-picture-id180709080?k=6&m=180709080&s=170667a&w=0&h=i7B8G1xaQqLAWXC_cVGVHcPLkhk2fnGs4Xg2vWDCdv0="
              class="object-cover rounded-md"
              alt=""
            />
          </div>
          <h3 class="features--title no-mb pt-4">Bliss</h3>
          <!-- <p class="features--subtext">Inspire your audience.</p> -->
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
