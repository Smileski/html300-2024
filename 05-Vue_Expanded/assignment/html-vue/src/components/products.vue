<script setup>
//import { ref } from 'vue'

const image_option = [
  {
    title: 'Design',
    url: './images/design.jpg',
    alt: 'Deliver the best user experience with our cerefully designed responsive websites and applications.'
  },
  {
    title: 'Development',
    url: './images/develop.jpg',
    alt: 'Custom Web App Development Built to Achieve Your Business Goals Web applications.'
  },
  {
    title: 'Analytics',
    url: './images/analyse.jpg',
    alt: 'The company analysis can help you figure out where your business is right now.'
  }
]
</script>

<template>
  <div id="img_">
    <h1>Image Page</h1>
    <main>
      <ul>
        <li v-for="image in image_option" :src="image">
          {{ image.title }}
          <img :src="image.url" />
          {{ image.alt }}
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
  width: 250px;
  padding: 10px;
  margin: 10px;
  background-color: lightskyblue;
  border-radius: 5px;
}
</style>
