<template>
  <main>
    <section class="content d-flex align-items-center">
      <div class="container ">
        <h5>  Content goes here  </h5>
      </div>
    </section>
    <ProductsMain/>
  </main>
</template>

<script>
import ProductsMain from "./ProductsMain.vue"
  export default {
    name:'MainComponent',
    components:{
      ProductsMain,
    }
  }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
main{
  height: calc(100vh - 160px);
  background-color: $black;
}
.content{
  height: 80px;
  background-color: black;
  color: $white;
}
</style>