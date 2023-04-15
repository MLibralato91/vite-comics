<template>
  <header class="d-flex align-items-center">
    <div class="container d-flex  ">
      <div class="logo w-25">
        <img class="img-fluid" src="../assets/images/dc-logo.png" alt="">
      </div>
      <div class="navLink w-75 d-flex flex-column justify-content-center ">
        <ul class="d-flex justify-content-between ">
          <li class="text-uppercase fw-bolder small" v-for="link in navbar">
            <a class="nav-link" :href="link.url">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { links } from '../data/data.js'
export default {
  name: 'HeaderComponent',
  data() {
    return {
      navbar: links
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

header {
  height: 80px;
  background-color: $white;
  color: $black;
}

img {
  width: 60px;
}

li {
  list-style: none;
}
ul{
  margin-bottom: 0;
}
</style>