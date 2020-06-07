export default {
  data() {
    return {
      maxRule: [v => v.length >= 3 || 'Minimum length is 3 characters.'],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ]   
    }
  }
}