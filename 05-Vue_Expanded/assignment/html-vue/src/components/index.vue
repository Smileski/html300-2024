//Using v-for to iterate through an object to fill out the content in an accordion
<template>
  <div id="service_option">
    <ul>
      <li v-for="services in service_option" v-on:click="services.show = !services.show">
        <h2>{{ services.title }}</h2>
        <h6 v-show="services.show">{{ services.text }}</h6>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      service_option: [
        {
          title: 'Digital Transformation',
          text: 'Are you ready to turn your IT challenges into a competitive advantage? Let’s talk. IT Consulting is a Managed Service Provider (MSP) that helps organizations solve their most perplexing technology challenges. Our Advanced IT Consulting Services help your business stay secure, productive, and profitable. As one of the top 30 MSPs nationwide, we deliver expert guidance on the strategic technology direction you must take to stay ahead of the technology curve — and your competitors.',
          show: false
        },
        {
          title: 'Technology Strategy',
          text: 'Looking for a strategic partner to help you cast a vision of innovation for your company? We Build Trust First to partner with you on a strategy tailored to your company.',
          show: false
        },
        {
          title: 'Artificial Intelligence Strategy',
          text: 'Looking for expert guidance to navigate the fast-changing world of AI? Our experts have launched and overseen AI programs, and driven real business impact with AI capabilities.',
          show: false
        },
        {
          title: 'Virtual Services',
          text: 'Want expert IT leadership and guidance, but can’t afford a full-time top-level CIO? Our Virtual CIO Service provides affordable expert leadership where it matters most.',
          show: false
        }
      ]
    }
  }
}
</script>

//we use scoped, so this styles will apply only to this component
<style scoped>
#service_option {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: rgb(240, 248, 248);
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
