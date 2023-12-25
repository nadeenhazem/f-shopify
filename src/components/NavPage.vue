<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand nav-header" to="/">natural</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item nav-li-link">
            <router-link
              class="nav-link hover-underline-animation"
              aria-current="page"
              to="/"
              >Home</router-link
            >
            <!-- <div class="nav-hr"></div> -->
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Features</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Pricing</router-link>
          </li>
        </ul>

        <span class="nav-icon">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </span>
        <span class="nav-icon">
          <font-awesome-icon icon="fa-regular fa-heart" />
        </span>
        <span class="nav-icon"
          ><font-awesome-icon icon="fa-solid fa-cart-shopping" />
          <span class="nav-icon-counter">2</span>
        </span>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

library.add(faMagnifyingGlass, faHeart, faCartShopping);
</script>
<style scoped>
@import "@/assets/style/Footer&Nav.css";
</style>
