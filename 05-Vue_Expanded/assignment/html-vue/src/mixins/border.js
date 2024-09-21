const border = {
  data() {
    return { isActive: false }
  },
  computed: {
    classObj() {
      return {
        [this.state]: this.isActive
      }
    }
  },
  methods: {
    addBorder() {
      this.isActive = this.isActive ? false : true
      document.getElementById('tImage').style.border = '5px solid black'
    }
  }
}

export default border
