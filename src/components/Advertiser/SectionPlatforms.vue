<template>

  <section class="platforms">
    <div id="decor_yellow-white"></div>
    <div class="_container">
      <div class="platforms-wrapper">
        <div class="platforms-title-holder">
          <div id="arrow_red"></div>
          <h2>Работаем с любой платформой, <br class="platforms-br-desktop"> главное — качество аудитории</h2>
        </div>
        <ul class="platforms-icons">

          <PlatformIcon v-for="platformIcon in this.$store.state.platformsIcons" :id="platformIcon.id" :content="platformIcon.name" :key="platformIcon.id" />

        </ul>
      </div>
    </div>
  </section>

</template>

<script>
import PlatformIcon from "@/components/Blogger/PlatformIcon.vue";

export default {
  components: {PlatformIcon},
  data() {
    return {

    }
  }
}
</script>
