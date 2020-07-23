<template lang="pug">
  content
    v-container(style="max-width:500px")
      v-text-field(solo label="Search" v-model="searchName")
    v-container.container
        v-row
          ResCard(v-for="restaurant in searchUserList", :restaurant="restaurant" :key="restaurant._id") 

</template>


<style scoped>

.container {
  display: flex;
  flex-direction: row;
  
}

</style>

<script>
import ResCard from '@/components/Cards/ResCard.vue'
import { mapState } from 'vuex'
 
export default {
  name: 'Home',
  components: {
    ResCard
  },
  data(){
    return{
      searchName : '',  
    }
  },
  computed: {
    ...mapState(['restaurants']), 
    searchUserList(){

      return this.restaurants.filter((val) => { 

        if(val.name) return val.name.indexOf(this.searchName) !== -1
        else return true

      })
    }
  }
}
</script>