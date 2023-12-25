<template>
  <div class="intro-container">
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <CarouselComponent />
    </div>
  </div>
</template>
<script setup>
import intro1 from "@/assets/imgs/intro1.jpg";
import intro2 from "@/assets/imgs/intro2.png";
import intro3 from "@/assets/imgs/intro3.jpg";
import CarouselComponent from "@/components/CarouselComponent.vue";
import { provide } from "vue";
provide("intro1", intro1);
provide("intro2", intro2);
provide("intro3", intro3);
</script>
<style scoped>
@import "@/assets/style/Home.css";
</style>
