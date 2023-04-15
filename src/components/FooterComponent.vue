<template>
  <footer>
    <TopFooter />
    <div class="mainFooter">
      <div class="container position-relative overflow-hidden">
        <img src="../../public/images/dc-logo-bg.png" alt="dc-logo-bg">
        <div class="row">
          <div class="col-2 listMenu" v-for="menu in allMenu">
            <ul>
              <h5 class="text-uppercase fw-bolder">{{ menu.title }}</h5>
              <li class="small" v-for="link in menu.links">
                {{ link.text }}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    <div class="bottomFooter">

    </div>
  </footer>
</template>

<script>
import TopFooter from "./TopFooter.vue"
import { contacts } from "../data/data";
import { menu } from "../data/data";
export default {
  name: 'FooterComponent',
  components: {
    TopFooter,
  },
  data() {
    return {
      allMenu: menu,
      allContacts: contacts
    }
  }
}

</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.bottomFooter {
  height: 80px;
  background-color: $bgFooter;
}

.mainFooter {
  background-image: url(../../public/images/footer-bg.jpg);
 
  
  
}

h5 {
  color: $white;
}
ul{
  padding-inline-start: 0;
}

li {
  list-style: none;
  color: grey;
}
img{
  width: 500px;
  position: absolute;
  right: 0;
  bottom: -40%;
  
  
}
</style>