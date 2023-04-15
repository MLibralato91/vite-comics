<template>
  <main>
    <section class="content d-flex align-items-center">
      <div class="container ">
        <h5>  Content goes here  </h5>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    name: 'MainComponent'
  }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
main{
  
  background-color: $black;
  color: $white;
}
</style>
