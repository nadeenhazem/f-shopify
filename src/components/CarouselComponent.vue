<template>
  <div class="carousel-inner">
    <div data-bs-interval="10000" class="carousel-item active">
      <img :src="intro1" class="d-block intro-img" alt="..." />
      <div class="intro-caption d-none d-md-block">
        <h1 class="intro-header">Beauty Inspired By Real Life</h1>
        <p class="intro-p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        </p>

        <router-link to="/" class="intro-btn">Shop Now</router-link>
      </div>
    </div>
    <div data-bs-interval="10000" class="carousel-item">
      <img :src="intro2" class="d-block intro-img" alt="..." />
      <div class="intro-caption d-none d-md-block">
        <h1 class="intro-header">Beauty Inspired By Real Life</h1>
        <p class="intro-p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        </p>
      </div>
    </div>
    <div data-bs-interval="10000" class="carousel-item">
      <img :src="intro3" class="d-block intro-img" alt="..." />
      <div class="intro-caption d-none d-md-block">
        <h1 class="intro-header">Beauty Inspired By Real Life</h1>
        <p class="intro-p">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const intro1 = inject("intro1");
const intro2 = inject("intro2");
const intro3 = inject("intro3");
</script>

<style>
@import "@/assets/style/Home.css";
</style>
