<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo">
        <img class="" src="../assets/images/dc-logo.png" alt="">
      </div>
      <div class="navLinks w-75 ">
        <ul class="d-flex justify-content-between">
          <li class="text-uppercase fw-bolder small" v-for="link in navbar">
            <a class="nav-link" :href="link.url">{{link.text}}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import {links} from '../data/data.js'
  export default {
    name:'HeaderComponent',
    data(){
      return{
        navbar:links
      }
    }
  }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
header{
  height: 80px;
  background-color: $white;
  color: $black;
}
img{
  width: 60px;
}
li{
  list-style: none;
}
</style>