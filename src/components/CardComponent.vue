<template>
  <div class="col-12 col-sm-6 col-md-3 col-lg-2 gy-3">
          
    <div class="myCard text-center pb-5">
      <img :src="img" :alt="title" class="img-fluid">
      <sub class="text-uppercase">{{ title }}</sub>

    </div>
          
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
  width: 250px;
  height: 250px;

}
img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>