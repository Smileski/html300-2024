<template>
  <div id="app">
    <header>
      <slot-comp>
        <h2>The best solution for your business</h2>
        <h4>We help you maximize performance and build a healthy organization.</h4>
      </slot-comp>
    </header>
    <a href="#/about">About</a> <a href="#/products">Products</a> <a href="#/index">Services</a>
    <a href="#/contact">Contact</a>
    <footer>
      <slot-comp>
        <h2>Get in touch with us today!</h2>
        <h4>Send us a message and we will get back to you as soon as possible.</h4>
      </slot-comp>
    </footer>

    <component :is="currentView" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import About from './components/about.vue'
import Products from './components/products.vue'
import Services from './components/index.vue'
import Contact from './components/contact.vue'

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

<style scoped>
header {
  position: top;
  top: 100px;
  margin: auto;
  background-color: lightgrey;
}
footer {
  position: fixed;
  bottom: 0;
  bottom: 100px;
  margin: auto;
  background-color: lightgrey;
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
