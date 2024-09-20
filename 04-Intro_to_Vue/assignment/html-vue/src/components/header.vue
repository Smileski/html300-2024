<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
  export default {
    data(){
      return {
        title:'The best solution for your business'
      }
    }
  }
</script>

//we use scoped, so this styles will apply only to this component
<style scoped>
  header {
    background: #eceeef;
    padding: 10px;
  }
  h1{
    color: #222;
    text-align: center;
  }
</style>
