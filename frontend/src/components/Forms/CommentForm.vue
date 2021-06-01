<template lang="pug">
  main
    v-form(ref="form")
      v-text-field(v-model="author" label="Name" :rules="maxRule"
              placeholder="What's your name?" color="rgb(253, 210, 74)")
      v-textarea(v-model="text" solo
            name="input-7-4" color="rgb(253, 210, 74)"
            label="What do you think?" :rules="maxRule")
      v-btn(@click="submitComment" color="rgb(253, 210, 74)") Comment
    


</template>

<script>
import { mapActions } from 'vuex'
import formValidation from '../../mixins/validation_mixin'

export default {
  name: 'FormComment',
  props: ['restaurant'],
  mixins: [formValidation],

  data() {
    return {
      author: '',
      text: ''
    }
  },
  methods: {
    ...mapActions(['addComment']),
    async submitComment() {
      const newComment = {
        author: this.author,
        text: this.text
      }
      if (this.$refs.form.validate()) {
        await this.addComment([newComment, this.restaurant._id])
        await this.$refs.form.reset()
      }
    }
  }
}
</script>
