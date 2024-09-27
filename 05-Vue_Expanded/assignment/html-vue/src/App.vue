<script setup>
import { ref, computed } from 'vue'
import ClickCounter from './components/ClickCounter.vue'

import About from './components/about.vue'
import Products from './components/products.vue'
import Services from './components/index.vue'
import Contact from './components/contact.vue'
import Slotcomp from './components/Slotcomp.vue'

const routes = {
  '/about': About,
  '/products': Products,
  '/index': Services,
  '/contact': Contact
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})
</script>
<!-- <script>
export default {
  name: 'App',
  components: {
    ClickCounter
  }
}
</script> -->

<template>
  <Slotcomp>
    <!--using slot for header component-->
    <template v-slot:header>
      <h2>The best solution for your business</h2>
      <h4>We help you maximize performance and build a healthy organization.</h4>
    </template>
    <!--using slot for footer component-->
    <template v-slot:footer>
      <h2>Get in touch with us today!</h2>
      <h4>Send us a message and we will get back to you as soon as possible.</h4>
    </template>
  </Slotcomp>
  <div id="app">
    <a href="#/about">About</a> <a href="#/products">Products</a> <a href="#/index">Services</a>
    <a href="#/contact">Contact</a>
    <component :is="currentView" />
  </div>
  <!-- <ClickCounter></ClickCounter> -->
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
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
h3,
h2,
h4 {
  text-align: center;
}
</style>
