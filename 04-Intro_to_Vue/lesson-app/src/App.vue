<script setup>
import { ref } from "vue";

const text = ref("Hello Coders!!");

function changeText(event) {
  text.value = event.target.value;

  const hyperlink = ref('https://vuejs.org/');
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    <h1>{{ text }}</h1>
    <a v-bind:href='hyperlink'>{{ hyperlink }} </a>
    <input v-on:input="changeText" />
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
