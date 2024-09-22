<script setup>
import { ref } from 'vue'
const show = ref(true)
</script>

//using if-else statement to change content
<template>
  <div class="btn">
    <main>
      <button @click="show = !show">Click to find more About IT Consulting</button>
      <p v-if="show">
        Like many IT consulting firms, we help companies Stabilize and Optimize their technology
        platforms. Unlike most other firms, we can also help clients positioned and interested in
        top-line innovation to go “beyond efficiency” to Monetize their IT and data to create new
        revenue streams and/or to accelerate their existing business models. This award-winning
        framework was developed over 25 years by our founder in the course of transforming multiple
        IT departments into Profit Centers.
      </p>
      <p v-else>
        Operating globally across all major industries, via white-label partnerships, via referrals
        and direct to clients, Innovation Vista combines capabilities of Innovation Consulting and
        Technology Consulting. Leveraging IT and Digital capabilities, we empower our clients’ IT
        departments to generate revenue and become profit centers. These capabilities enable some
        clients to transform their business models and disrupt their industries. Unlike most of our
        competitors, we don’t have a “bench” of consultants that we place like square pegs in round
        holes; instead we have a network of over 300 proven, experienced C-level leaders from whom
        we can choose the best fit for each client’s industry, strategy, and culture in an
        affordable consulting relationship that leverages their expertise for the most strategic IT
        architecture & process decisions, their technology provider negotiations, and their
        boardroom business model innovation.
      </p>
    </main>
  </div>
</template>

<style scoped>
.btn {
  background-color: #04aa6d; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
