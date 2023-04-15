<template>
  <main>
    <div class="jumbotron">
      <img src="../../public/images/jumbotron.jpg" alt="">
    </div>
      <div class="container ">
        <div class="row">
          <CardComponent :img="picture.thumb" :title="picture.series" v-for="picture in pictures"/>
        </div>
      </div>
 
  </main>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import { thumbnails } from "../data/data";
  export default {
    name: 'MainComponent',
    components:{
      CardComponent
    },
    data() {
    return {
      pictures: thumbnails
    }
  }
  }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
main{
  
  background-color: $black;
  color: $white;
}
.jumbotron{
  height: 300px;
  overflow: hidden;
}
img{
  object-fit: contain;
  object-position: -200px;
  
}
</style>
