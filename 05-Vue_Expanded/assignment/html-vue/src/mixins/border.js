const border = {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    addBorder() {
      this.isActive = this.isActive ? false : true
      //this.$emit('toggle-state',this.isActive);
    }
  }
}

export default border
