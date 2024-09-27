<script setup>
import { defineProps } from 'vue'

/* prop validation*/
const props = defineProps({
  id: Number,
  title: String,
  url: String,
  alt: String
})
</script>

<template>
  <!--Using class "post" for style-->
  <div class="post">
    <h2>{{ props.title }}</h2>
    <img :src="props.url" alt="develop" />
    <p>{{ props.alt }}</p>
  </div>
  <!-- <img src="./images2/develop.jpg" alt="develop" /> -->
</template>
<style scoped>
.post {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
}
</style>
