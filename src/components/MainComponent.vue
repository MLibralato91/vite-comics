<template>
  <main>
    <div class="jumbotron">
      <img class="" src="../../public/images/jumbotron.jpg" alt="">

    </div>
    <div class="container position-relative ">
      <div class="current text-uppercase fw-bolder bg-primary position-absolute ">
        Current Series
      </div>
      <div class="row pt-4">
        <CardComponent :img="picture.thumb" :title="picture.series" v-for="picture in pictures" />
      </div>

    </div>
    <div class="text-center p-3">
      <button type="button" class="bg-primary text-white small px-5 py-1">
        LOAD MORE
      </button>

    </div>
  </main>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import { thumbnails } from "../data/data";
export default {
  name: 'MainComponent',
  components: {
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

main {

  background-color: $black;
  color: $white;
}

.jumbotron {
  height: 300px;
  overflow: hidden;
}

img {
  object-fit: contain;
  object-position: -200px;

}

.current {

  top: -25px;
  left: 0;
  padding: 15px;
}
</style>
