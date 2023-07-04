<template>
  <section class="hero">
    <div class="_container">
      <div class="hero-wrapper" id="bottom-hero">

        <div class="hero-content" id="bottom-hero-content">
          <h2>Получите первую выплату <br class="btm-hero-title-br-desktop"> уже <br class="btm-hero-title-br1"> через неделю</h2>
          <p>Начислим <span id="hero-highlighted">бонус 2500₽</span>, если за первую неделю у вас подтвердится минимум 1 заявка</p>
          <button class="hero-button hero-button--2" id="begin-work-button" @click="$store.commit('toggleModal', PopupContactsUp)">Начать работу</button>
        </div>

        <div class="hero-image">
          <div class="hero-image-content">
            <div class="lobster2"></div>
            <div id="wave2"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="decor-yellow-black"></div>
  </section>
</template>

<script>
import PopupContactsUp from "@/components/Advertiser/PopupContactsUp.vue";

export default {
  data() {
    return {
      PopupContactsUp
    }
  }
}
</script>
