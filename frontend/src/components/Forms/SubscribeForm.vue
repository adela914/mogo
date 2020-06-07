<template lang="pug">
    v-container(style="max-width:500px" align-center)
      v-layout
        v-col
          v-alert(v-model="alert" v-if="alert" type="success") Thank you for subscribing us! ❤️
          v-form(ref="form")
            p.font-weight-medium.headline.font-italic.text-center Join our newsletter
            v-text-field.mt-3(v-model="fName" label="First Name" outlined color="yellow" :rules="maxRule")
            v-text-field(v-model="lName" label="Last Name" outlined color="yellow" :rules="maxRule")
            v-text-field(v-model="email" label="Email" outlined color="yellow" :rules="emailRules")
            v-btn(@click="Signup" color="rgb(253, 210, 74)") SUBSCRIBE
            div.mt-4 * By clicking "subscribe", I agree that my information can be used for marketing segmentation.

</template>

<script>
import { mapActions } from 'vuex'
import formValidation from '../../mixins/validation_mixin'

export default {
  name: 'SubscribeForm',
  mixins: [formValidation],
  
  data() {
    return {
      alert: false,
      fName: '',
      lName: '',
      email: ''
    }
  },

  methods: {
    ...mapActions(['subscribe']),
      Signup() {
      const userInfo = {
        fName: this.fName,
        lName: this.lName,
        email: this.email
      }
      if (this.$refs.form.validate()) {
        this.subscribe(userInfo)
        this.alert = true
        setTimeout(() => this.alert = false, 5000)
        this.$refs.form.reset()
      }
    }
  }
}
</script>
