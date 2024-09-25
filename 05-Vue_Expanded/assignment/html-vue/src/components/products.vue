<script setup>
import { ref } from 'vue'
import Post from './products_post.vue'

const data = ref([
  {
    id: 1,
    title: 'Design',
    url: '@/images/design.jpg',
    alt: 'Deliver the best user experience with our cerefully designed responsive websites and applications.We Begin With Your Strategy and Vision To deliver a UI/UX design that serves your purpose, we start with a discovery process that helps us understand your vision and strategy. This process includes analyzing your existing products, interviewing stakeholders, and gathering as much information as we can. From there we can develop written requirements outlining how the solution will serve as the foundation of the design.'
  },
  {
    id: 2,
    title: 'Development',
    url: './images/develop.jpg',
    alt: 'You need software that works on every device. Leverage the latest technologies and the most powerful tools!Custom Web App Development Built to Achieve Your Business Goals Web applications are a great way for organizations to streamline operations and eliminate costly mistakes. Ntiva’s approach to development is to begin with a thorough discovery process. We want to understand your challenges, goals, and how you measure success. We’ll then develop a long-lasting web app based on modern coding patterns and practices that provide maximum reuse and flexibility, custom built to meet the needs of your business. Our web apps offer a dependable solution that can help you overcome some of your biggest ongoing operational challenges.'
  },
  {
    id: 3,
    title: 'Analytics',
    url: './images/analyse.jpg',
    alt: 'Consult our experts to set up proper goals and find the best stack for your next application!The company analysis can help you figure out where your business is right now. Through multiple data mining and visualization techniques we can provide you with many metrics to help in determining your current business state, and where to move in terms of increased profitability and cost savings. Predictive and Prescriptive analytic modeling techniques will not only tell you your next best move, it will also provide data driven insights to forecast and predict the outcome of that next step.'
  }
])
</script>

<template>
  <!--Using class "post" for style-->
  <post
    v-bind:key="post.id"
    v-for="post in data"
    :id="post.id"
    :title="post.title"
    :url="post.url"
    :alt="post.alt"
  >
  </post>
</template>

<style scoped>
.post {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
}
</style>
