<script setup>
import { ref } from "vue";
import img1 from "./images/develop.jpg";
import img2 from "./images/analyse.jpg";
import img3 from "./images/develop.jpg";
const name = ref ("products");
const images = ref(['img1', 'img2', 'img3']);
</script>

<template>
  <div class="contact">
    <h1>Product Page</h1>
    <img :src="img1">
    <main>
        <ul>
            <li v-for='image in images' :key='image'>
              <img :src='image'>
              {{ image }}
            </li>
        </ul>
    </main>
  </div>
</template>

<style scoped>
.products {
  text-align: center;
  margin-top: 20px;
}
</style>
