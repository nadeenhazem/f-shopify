<template>
  <div class="Footer-Page row">
    <div class="col-3 footer-div">
      <h1 class="footer-logo">Natural</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      </p>
    </div>

    <div class="col-3 footer-div">
      <p>082 106 739</p>
      <p>natural@gmail.com</p>
      <div class="footer-icons">
        <router-link to="/"
          ><font-awesome-icon icon="fa-brands fa-facebook"
        /></router-link>
        <router-link to="/"
          ><font-awesome-icon icon="fa-brands fa-instagram" />
        </router-link>

        <router-link to="/"
          ><font-awesome-icon icon="fa-brands fa-twitter"
        /></router-link>
      </div>
    </div>

    <div class="col-3 footer-div text-center">
      <h2>Find Us</h2>
      <p>
        1 kingly Court<br />
        London <br />W1B5PW
      </p>
    </div>
  </div>
</template>
<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
// import { faFacebook, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
// import fatwitter
library.add(faFacebook, faTwitter, faInstagram);
</script>
<style scoped>
@import "@/assets/style/Footer&Nav.css";
</style>
