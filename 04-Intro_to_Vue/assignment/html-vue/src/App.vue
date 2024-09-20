<template>
  <div id="app">
    <app-header></app-header>
    <app-service></app-service>
    <app-footer></app-footer>
    <a href="#/about">About</a>  <a href="#/products">Products</a>  <a href="#/index">Services</a> <a href="#/contact">Contact</a>
    <component :is="currentView" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
//import Header from './components/header.vue';
//import Footer from './components/footer.vue';

import About from "./components/about.vue";
import Products from "./components/products.vue";
import Services from "./components/index.vue";
import Contact from "./components/contact.vue";

const routes = {
  "/about": About,
  "/products": Products,
  "/index": Services,
  "/contact": Contact,
}
const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", ()=> {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"];
});

//export default {
//  components: {
//    'app-header': Header,
//    'app-footer': Footer,
    //'app-service': Services,
//  },
//  data() {
//    return{
//    }
//  }
//}
</script>

<style scoped>
  header{
  position: fixed;
  top: 100px;
  margin: auto;
}
footer{
  position: fixed;
  bottom: 100px;
  margin: auto;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
