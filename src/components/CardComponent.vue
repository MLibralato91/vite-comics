<template>
  <div class="col-12 col-sm-6 col-md-3 col-lg-2 gy-3">
          
    <div class="myCard">
      <img :src="img" :alt="title" class="img-fluid">

    </div>
          <h5>{{ title }}</h5>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: ['img', 'title'],
}
</script>

<style lang="scss" scoped>

.myCard{

}
</style>