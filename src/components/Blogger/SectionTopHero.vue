<template>

  <section class="hero top-hero">
    <div class="_container">
      <div class="hero-wrapper">

        <div class="hero-content">
          <div class="hero-content-title-holder">
            <div id="squigly-yellow"></div>
            <h1>Зарабатывайте на<br class="hero-br-desktop"> контенте, <br class="hero-br1"> рекламируя <br class="hero-br-desktop"> крупные бренды</h1>
          </div>
          <p>
            Монетизируйте свою аудиторию через платформу Lobsters и получайте
            <span class="hero-link">оплату за каждого клиента</span>
          </p>
          <button class="hero-button" id="begin-work-button" @click="$store.commit('toggleModal', registrationComponent)">Начать работу</button>
        </div>

        <div class="hero-image">
          <div class="hero-image-content">
            <div id="wave1"></div>
            <div class="lobster1"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import popupRegistration from "@/components/Blogger/PopupRegistration.vue";

export default {
  data() {
    return {
      registrationComponent: popupRegistration,
    }
  }
}
</script>
