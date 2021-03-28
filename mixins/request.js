export default {
  data() {
    return {
      contact: {
        name: '',
        email: '',
        phone: '',
        message: '',
      },
      earlyAccessEmail: '',
    }
  },
  methods: {
    async joinWaitlist() {
      if (this.earlyAccessEmail) {
        const result = await this.$axios.post(
          'https://veehive-api.vercel.app/earlyAccess',
          {
            email: this.earlyAccessEmail,
          }
        )
        console.log(result)
      }
    },
    async contactUs() {
      if (this.contact) {
        const result = await this.$axios.post(
          'https://veehive-api.vercel.app/contactus',
          this.contact
        )
        console.log(result)
      }
    },
  },
}
