<template>
  <div class="products">
    <div class="container">
      <ul class="d-flex justify-content-between">
        <li v-for="product in mainProd">
          <div class="d-flex ">
            <img :src="product.src" :alt="product.titolo">
            <p>{{product.titolo}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { products } from '../data/data.js';

  export default {
    name: 'ProductsMain',
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
}

img{
  width: 70px;
}
</style>