<template>

  <ProductsFooter/>
</template>

<script>
import ProductsFooter from "./ProductsFooter.vue"
  export default {
    name:'TopFooter',
    components:{
      ProductsFooter,
    }
  }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.content{
  height: 80px;
  background-color: black;
  color: $white;
}
</style>