<script setup>
//import { ref } from 'vue'

const image_option = [
  {
    url: './images_folder/develop.jpg',
    alt: 'developing services'
  },
  {
    url: './images_folder/analyse.jpg',
    alt: 'analysing'
  },
  {
    url: './images_folder/consult.jpg',
    alt: 'consulting services'
  }
]
</script>

<template>
  <div id="img_">
    <h1>Image Page</h1>
    <main>
      <ul>
        <li v-for="image in image_option" :src="image">
          <img :src="image.url" :alt="image.alt" />
        </li>
      </ul>
    </main>
  </div>
</template>

<style scoped>
.img_ {
  text-align: center;
  margin-top: 20px;
}
li {
  width: 80px;
  padding: 10px;
  margin: 10px;
  background-color: lightskyblue;
  border-radius: 5px;
}
</style>
