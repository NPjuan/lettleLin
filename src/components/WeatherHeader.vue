<template>
  <header>
    <span class="city">{{ currentCity }}</span>
    <span class="manage">
      <img src="../assets/city.svg" alt="city">
    </span>
  </header>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex';

export default {
  name: "WeatherHeader",
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['currentCity'])
  }
}
</script>

<style scoped lang="scss">
 header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 60px;
   span{
     padding: 0 20px;
   }

   .city{
     font-size: 36px;
   }
   .manage{
     margin-top: 10px;
     img{
       width: 25px;
     }
   }
 }
</style>
