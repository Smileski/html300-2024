<script setup>
import { ref } from 'vue'

const contactInfo = ref ([
{
  Email: 'alex_john@analyticsltd.com',
  Phone: '720-240-8431',
  Address: '17483 E Temple Dr, Aurora, CO 80015'
},
{
  Email: 'maria_green@analyticsltd.com',
  Phone: '555-555-8431',
  Address: '1555 E Road Dr, Aurora, CO 80015'
},
{
  Email: 'sofia_bella@analyticsltd.com',
  Phone: '555-555-8431',
  Address: '22333 E Mitten Dr, Aspen, CO 80015'
}
])
</script>

<template>
  <div class="contact">
    <h1>Contact Page</h1>
    <main>
        <ul>
            <li v-for='contact in contactInfo' :key='contact'>
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
</style>
