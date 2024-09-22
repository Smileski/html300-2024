<script setup>
//importing mixin for the image component that toggle on a border around the image
import border from '@/mixins/border'
import { defineProps, ref } from 'vue'
</script>
<script>
export default {
  mixins: [border]
}
</script>
<template>
  <!--mixins for toggle on/off border of a image-->
  <div id="img-mixin">
    <img src="./images/cont_1.jpg" id="tImage" alt="" @click="addBorder()" :class="classObj" />
  </div>
</template>

<style scoped>
.img-mixin {
  text-align: center;
  margin-top: 20px;
}
</style>
