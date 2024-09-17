<script setup>
import { ref } from "vue";
const name = ref ("contact");
const ingredients = ref(['Email: alex@analyticsltd.com', 'Phone: 720-240-8431', 'Address: 17483 E Temple Dr, Aurora, CO 80015']);
</script>

<template>
  <div class="contact">
    <h1>Contact Page</h1>
    <main>
        <ul>
            <li v-for='ingredient in ingredients' :key='ingredient'>
                {{ ingredient }}
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
</style>
