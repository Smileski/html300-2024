<template>
  <div>
    <img
      src="./images2/develop.jpg"
      alt="develop"
      @click="show = !show"
      :class="{ active: show }"
      class="nav-item dropdown"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const show = ref(false)
    return { show }
  }
}
</script>

<style scoped>
.active {
  border: 5px solid #555;
}
</style>
