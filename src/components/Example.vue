<template>
  <div class="wrapper">
    <h1>Webpack</h1>
    <p>Message: {{message}}</p>
    <!-- <img class="img" src="img/delaney-van-XNCFfPB82_Y-unsplash.jpg" alt=""> -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: null,
      }
    },
    created () {
      this.message = this.$store.getters.getMessage;
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    color: blue;
  }
</style>
