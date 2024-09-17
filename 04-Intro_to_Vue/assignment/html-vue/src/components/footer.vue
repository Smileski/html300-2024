<template>
  <footer>
    <h3>{{ copyright }}</h3>
  </footer>
</template>

<script>
  export default {
    data(){
      return {
        copyright:'Copyright & IT Consulting 2024'
      }
    }
  }
</script>

//we use scoped, so this styles will apply only to this component
<style scoped>
  footer {
    background: #eceeef;
    padding: 6px;
  }
  p{
    color: #222;;
    text-align: center;
  }
</style>
