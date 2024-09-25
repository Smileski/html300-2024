<script setup>
import { defineProps, ref } from 'vue'

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
    <p>{{ props.url }}</p>
    <p>{{ props.alt }}</p>
  </div>
</template>
<style scoped>
.post {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
}
</style>
