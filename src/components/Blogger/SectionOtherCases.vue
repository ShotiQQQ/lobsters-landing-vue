<template>
  <section class="other-cases">
    <div id="decor-blue"></div>
    <div class="_container">
      <div class="other-cases-top-wrapper">
        <h2>Другие кейсы</h2>
        <div class="other-cases-slider-buttons">
          <button class="slider-button" id="other-cases-prev-button"><span></span></button>
          <button class="slider-button" id="other-cases-next-button"><span></span></button>
        </div>
      </div>
    </div>

    <Swiper />
    
  </section>
</template>

<script>
import Swiper from "@/components/Blogger/Swiper.vue";

export default {
  components: {Swiper}
}
</script>
