<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    created() {
      this.$store.commit('getQueryParams', this.$route.query);
    }
  }
</script>
