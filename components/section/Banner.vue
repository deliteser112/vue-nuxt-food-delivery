<template>
  <div
    class="flex container flex-wrap items-center min-h-screen justify-between"
  >
    <div class="md:w-6/12 pb-16 w-11/12 mx-auto md:mx-0 animate">
      <Logo :large="isDesktop" class="mb-2 md:mb-4" />
      <h1
        class="bg-text-gradiant font-extrabold text-2xl sm:text-3xl md:text-4xl py-8 animate"
      >
        A New Age <br v-if="isxl" />
        Video Streaming Platform
      </h1>
      <div class="links">
        <p class="text-xs md:text-sm text-muted animate w-9/12">
          Create, Share and Monetize your proprietary videos in your community
          or in a closed group.
        </p>
        <div>
          <form class="email-input my-6 md:my-8" @submit.prevent="joinWaitlist">
            <input
              v-model="earlyAccessEmail"
              type="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit" class="app-button">Early Access</button>
          </form>
        </div>
      </div>
    </div>
    <div class="w-11/12 md:w-4/12 md:mx-8 p-4 grid grid-cols-3 grid-rows-4">
      <div
        v-for="(box, i) in boxes"
        :key="i"
        class="box animate__animated"
        v-bind="box"
      >
        <span v-text="box.text"></span>
      </div>
    </div>
    <Model v-model="ui.dialog">
      <template>
        <div class="w-full flex flex-col items-center justify-center">
          <img src="~/assets/img/success.svg" width="128" alt="success" />
          <p class="font-semibold text-lg text-gray-800">
            Thanks for joining waitlist
          </p>
          <p class="text-sm text-gray-600 text-center mt-4">
            You will be one of our first user to get access to our platform once
            we launch. Stay tuned.
          </p>
          <button
            class="flex justify-center items-center text-white bg-primary rounded p-2 w-full my-4 focus:outline-none"
            @click="ui.dialog = false"
          >
            Okay, Got it 👍
          </button>
        </div>
      </template>
    </Model>
  </div>
</template>

<script>
/* eslint-disable no-case-declarations */

import responsiveness from '@/mixins/responsiveness'
import request from '@/mixins/request'

const images = [
  'person-1.webp',
  'person-2.webp',
  'person-3.webp',
  'person-4.webp',
].map((image) => require(`@/assets/img/${image}`))

const texts = ['Art', 'Business', 'Chef', 'Recipe']
const colors = [
  '#606EEA',
  '#8352D7',
  '#FE5D5C',
  '#FFA342',
  //
  '#CE277B',
  '#FE3F37',
  '#FF8037',
  '#AE1EA4',
]
const animations = [
  // 'animate__flipInX',
  // 'animate__flipInY',
  // 'animate__flip',
  // 'animate__bounceIn',
  // 'animate__swing',
  // 'animate__rubberBand',
  // 'animate__tada',
  // 'animate__wobble',
]
const radii = [
  'rounded-none',
  'rounded-half',
  'rounded-tl-half rounded-br-half',
  'rounded-bl-half rounded-tr-half',
  'rounded-tl-half',
  'rounded-tr-half',
  'rounded-bl-half',
  'rounded-br-half',
]

const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  )

export default {
  mixins: [responsiveness, request],
  data() {
    return {
      boxes: [],
      ui: {
        dialog: false,
      },
    }
  },
  mounted() {
    this.generateBoxes()
    this.intervalId = setInterval(() => this.generateBoxes(), 2500)
  },
  destroyed() {
    if (this.intervalId) clearInterval(this.intervalId)
  },
  methods: {
    generateBoxes() {
      const boxes = []

      const _images = [...images]
      const _texts = [...texts]

      const indexes = randomIntArrayInRange(0, 12, 12)
      const colorIndexes = randomIntArrayInRange(0, 12, 12)
      const classIndexes = randomIntArrayInRange(0, 12, 12)

      for (let i = 0; i < 12; i++) {
        const pickMe = indexes[i]
        const color = colors[colorIndexes[i] % colors.length]

        const row = Math.floor(i / 3)
        const col = Math.floor(i % 3)

        const style = {
          backgroundColor: color,
          transitionDelay: `${col * row * 50}ms`,
          animationDelay: `${col * row * 50}ms`,
        }

        const classes = [
          animations[classIndexes[i] % animations.length],
          radii[classIndexes[i] % radii.length],
        ]
        const index = randomIntArrayInRange(0, 6, 1)[0]
        const base = {
          style,
          class: classes,
        }
        switch (index % 3) {
          case 0:
            /// remove to avoid duplication
            const textIndex = pickMe % _texts.length
            const text = _texts[textIndex]
            _texts.splice(textIndex, 1)

            base.text = text
            break
          case 1:
            /// remove to avoid duplication
            const imgIndex = pickMe % _images.length
            const image = _images[imgIndex]
            _images.splice(imgIndex, 1)

            base.style = {
              backgroundImage: `url('${image}')`,
              ...base.style,
            }
            break
          case 2: // color
            break
        }
        boxes.push(base)
      }

      this.boxes = boxes
    },
  },
}
</script>

<style lang="scss">
.move-move {
  transition: all 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
}
.box {
  width: 100%;
  position: relative;
  padding-top: 100%;
  background: white;
  transition: all 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  span {
    position: absolute;
    top: calc(50% - 8px);
    color: white;
    left: 0;
    text-align: center;
    font-size: 12px;
    height: 16px;
    right: 0;
  }
}

.email-input {
  @apply flex;
  @apply items-center;
  @apply p-3;
  @apply transition-all;
  @apply duration-300;
  @apply ease-out;
  max-width: 420px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  input {
    flex: 1;
    @apply min-w-0;
    @apply outline-none;
  }
}
</style>
<style>
.move-move {
  transition: transform 240ms ease-in-out;
}

.move-enter-active,
.move-leave-active {
  transition: all 240ms ease-in-out;
}
</style>
