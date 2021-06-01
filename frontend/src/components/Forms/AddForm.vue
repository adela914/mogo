<template lang="pug">
  v-container(style="max-width:450px;")
    v-layout(row wrap)
      v-flex(xs12)
        v-form(ref="form")
          p.font-weight-medium.headline.font-italic.text-center Share your favourite restaurant!
          v-text-field(v-model="author" label="You Name" single-line color="rgb(253, 210, 74)" :rules="maxRule")
          v-text-field(v-model="name" label="Name of Restaurant" single-line color="rgb(253, 210, 74)" :rules="maxRule")
          v-text-field(v-model="location" label="Location" single-line color="rgb(253, 210, 74)")
          v-text-field(v-model="image" label="Image URL" single-line color="rgb(253, 210, 74)")
          v-textarea(v-model="description" color="rgb(253, 210, 74)")
            template(v-slot:label)
              div Description
          v-text-field(v-model="password" label="Password" type="password" single-line color="rgb(253, 210, 74)" style="max-width:200px;" :rules="maxRule")
          v-btn(@click="submit" color="rgb(253, 210, 74)") Submit

</template>

<script>
import { mapActions } from 'vuex'
import formValidation from '../../mixins/validation_mixin'

export default {
  name: 'Form',
  props: ['Home'],
  mixins: [formValidation],

  data() {
    return {
      author: '',
      name: '',
      location: '',
      image: '',
      description: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['addRes']),
    async submit() {
      const nesRes = {
        author: this.author,
        name: this.name,
        location: this.location,
        image: this.image,
        description: this.description,
        password: this.password
      }
      if (this.$refs.form.validate()) {
        await this.addRes(nesRes)
        await this.$refs.form.reset()
        this.$router.push('/')
      }
    }
  }
}
</script>
