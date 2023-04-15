<template>
  <div class="products d-flex align-items-center small">
    <div class="container">
      <ul class="d-flex justify-content-between">
        <li v-for="product in mainProd">
          <div class="d-flex align-items-center">
            <img :src="product.src" :alt="product.titolo">
            <p class="text-white ps-3 text-uppercase">{{product.titolo}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { products } from '../data/data.js';

  export default {
    name: 'ProductsFooter',
    data() {
    return {
      mainProd: products,
    }
  }
  }
</script>

<style lang="scss" scoped>

@use '../assets/styles/partials/variables' as *;
.products{
  height: 100px;
  background-color: $lightblue;
}
li {
  list-style: none;
  p{
    margin-bottom: 0;
  }
}

img{
  width: 50px;
  height: 50px;
  object-fit: contain;
}
ul{
  margin-bottom: 0;
}
</style>