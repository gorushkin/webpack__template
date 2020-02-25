<template>
  <div class="wrapper">
    <h1>Webpack</h1>
    <p>Message: {{message}}</p>
    <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ex nemo earum quisquam fuga iste, sint dignissimos commodi omnis ipsam porro, quos placeat, libero corrupti officia! Quaerat voluptatum aut architecto.</p> -->
    <!-- <img class="img" src="img/delaney-van-XNCFfPB82_Y-unsplash.jpg" alt=""> -->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: bull,
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
