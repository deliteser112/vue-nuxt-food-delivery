<template>
  <div id="contact" class="bg-white">
    <div class="container" style="min-height: unset !important">
      <div class="flex flex-wrap justify-around h-full py-16">
        <div class="w-full md:w-6/12">
          <h3 class="text-xl font-bold text-black mb-3">Get in touch</h3>
          <p class="text-muted mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <address class="not-italic text-muted mb-8">
            <p class="mb-8">
              Dubai Design District,<br />
              Dubai, UAE.
            </p>
            <p class="flex items-center">
              <img src="@/assets/img/mail.svg" alt="mail" class="m-2 mr-6" />
              <a href="mailto:contact@veehive.ai"> contact@veehive.ai </a>
            </p>
            <p class="flex items-center">
              <img src="@/assets/img/phone.svg" alt="phone" class="m-2 mr-6" />
              <a href="tel:+971 50 2753576">+971 50 2753576</a>
            </p>
          </address>
          <p class="text-muted">
            Looking for careers?
            <a href="#" class="text-primary">View all openings</a>
          </p>
        </div>
        <div class="w-full mt-12 md:mt-0 md:w-6/12 md:pl-16">
          <form @submit.prevent>
            <input class="input" placeholder="Full Name" />
            <input class="input" placeholder="Phone" />
            <input class="input" placeholder="Email Address" />

            <textarea class="input" rows="5" placeholder="Message"> </textarea>
            <div>
              <button class="app-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div style="background-color: #f5f3f0">
      <div class="container text-sm" style="min-height: unset !important">
        <div class="flex py-4">
          <a href="/terms.html" class="text-muted"> Terms of Service </a>
          <a href="/policy.html" class="mx-4 text-muted"> Privacy Policy </a>
          <Spacer />
          <div class="flex align-bottom">
            <a
              v-for="social in socials"
              :key="social.text"
              :href="social.herf"
              target="__blank"
            >
              <img
                :src="require(`@/assets/img/${social.icon}.svg`)"
                :alt="social.text"
                class="ml-3 h-4"
              />
            </a>
          </div>
        </div>
        <hr />
        <div class="flex py-4 text-muted">
          <span>© 2020 Veehive.ai. All rights reserved.</span>
          <Spacer />
          Download on
          <img
            src="@/assets/img/Apple logo.svg"
            alt="Apple logo"
            class="mr-3 ml-3 h-4"
          />
          <img
            src="@/assets/img/google-play logo.svg"
            alt="google-play logo"
            class="h-4"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          icon: 'twitter',
          text: 'Twitter',
          herf: 'https://twitter.com/letsveehive',
        },
        {
          icon: 'facebook',
          text: 'Facebook',
          herf: 'https://www.facebook.com/LetsVeeHive/',
        },
        {
          icon: 'instagram',
          text: 'Instagram',
          herf: 'https://www.instagram.com/letsveehive/',
        },
        {
          icon: 'linkedin',
          text: 'linkedin',
          herf: 'https://www.linkedin.com/company/letsveehive/',
        },
        {
          icon: 'medium',
          text: 'medium',
          herf: 'https://medium.com/@letsveehive',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.input {
  background: #ffffff;
  border: 2px solid rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  min-width: 0;
  padding: 8px 12px;
  outline: none !important;
  min-height: 48px;
  transition: border 350ms cubic-bezier(0.165, 0.84, 0.44, 1);

  &:focus,
  &:active {
    @apply border-primary;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
}
</style>
