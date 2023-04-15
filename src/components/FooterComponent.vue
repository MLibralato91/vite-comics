<template>
  <footer>
    <TopFooter />
    <div class="mainFooter">
      <div class="container position-relative overflow-hidden">
        <img src="../../public/images/dc-logo-bg.png" alt="dc-logo-bg">
        <div class="row">
          <div class="col-2 listMenu" v-for="menu in allMenu">
            <ul class="my-4">
              <h5 class="text-uppercase fw-bolder">{{ menu.title }}</h5>
              <li class="small" v-for="link in menu.links">
                {{ link.text }}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    <div class="bottomFooter d-flex align-items-center">
      <div class="container d-flex justify-content-between ">
        <div class="sign">
          <button type="button" class="btn btn-outline-primary text-white">SIGN-UP NOW!</button>
        </div>
        
        <div class="social d-flex align-items-center">
          <h5 class="text-uppercase text-primary m-0 fw-bolder">Follow Us</h5>
          <div class="contacts ps-3" v-for="contact in allContacts">
            <img :src="contact.src" :alt="contact.titolo">
          </div>
        </div>
      </div>
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

  img {
    width: 500px;
    position: absolute;
    right: 0;
    bottom: -40%;
  }

}

h5 {
  color: $white;
}

ul {
  padding-inline-start: 0;
}

li {
  list-style: none;
  color: grey;
}


button {
  border-radius: 0;
}
</style>