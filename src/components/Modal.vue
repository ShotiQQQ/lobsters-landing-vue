<template>
  <div class="modal" @click.self="$store.commit('toggleModal')">
    <component :is="component" />
  </div>
</template>

<script>
  export default {
    props: ['component']
  }
</script>
