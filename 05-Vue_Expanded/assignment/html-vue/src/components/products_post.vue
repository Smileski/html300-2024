<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  id: Number,
  title: String,
  url: String,
  alt: String
})
</script>
<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ url }}</p>
    <p>{{ alt }}</p>
  </div>
</template>
<style scoped>
.post {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
}
</style>
