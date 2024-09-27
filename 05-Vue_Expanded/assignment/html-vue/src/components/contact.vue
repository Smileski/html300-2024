<script setup>
//importing mixin for the image component that toggle on a border around the image
import { addBorder } from '@/composable/addBorder'
//import { defineProps, ref } from 'vue'
import { ref } from 'vue'

const contactInfo = ref([
  {
    Email: 'alex_john@analyticsltd.com',
    Phone: '720-240-8431',
    Address: '17483 E Temple Dr, Aurora, CO 80015'
  },
  {
    Email: 'maria_green@analyticsltd.com',
    Phone: '555-555-8431',
    Address: '1555 E Road Dr, Aurora, CO 80015'
  }
])
</script>
<script>
const { show } = addBorder()
</script>

<template>
  <!--composable for toggle on/off border of a image-->
  <div>
    <img
      src="./images2/develop.jpg"
      alt="develop"
      @click="show = !show"
      :class="{ active: show }"
      class="nav-item dropdown"
    />
  </div>

  <div class="contact">
    <h2>Contact Page</h2>
    <main>
      <ul>
        <li v-for="contact in contactInfo" :key="contact">
          <p>Email: {{ contact.Email }}</p>
          <p>Phone: {{ contact.Phone }}</p>
          <p>Address: {{ contact.Address }}</p>
        </li>
      </ul>
    </main>
  </div>
</template>

<style scoped>
.contact {
  text-align: center;
  margin-top: 20px;
}
/* .img-mixin {
  text-align: center;
  margin-top: 20px;
  border: green solid 2px;
} */
/* .is-active {
  border: green solid 2px;
} */
h1,
h2,
h3,
h4 {
  text-align: center;
}
.active {
  border: 5px solid #555;
}
</style>
