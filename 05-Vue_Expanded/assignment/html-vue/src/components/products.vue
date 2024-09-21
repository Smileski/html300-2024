<script>
import border from '@/mixins/border'

export default {
  mixins: [border]
}
</script>

<template>
  <img src="./images/cont_1.jpg" id="tImage" alt="" @click="addBorder()" :class="classObj" />
</template>

<style scoped>
.products {
  text-align: center;
  margin-top: 20px;
}
</style>
