<template>
  <section class="hero top-hero">
    <div class="_container" id="advertiser-tablet-hero-container">
      <div class="hero-wrapper">

        <div class="hero-content">
          <div class="hero-content-title-holder">
            <div id="squigly-yellow"></div>
            <h1>Получайте тысячи  <br class="hero-br-desktop"> новых клиентов <br class="hero-br-1"> <br class="hero-br-desktop">
              с помощью Lobsters</h1>
          </div>
          <p>Реклама у блогеров и веб-мастеров с оплатой за результат</p>
          <button class="hero-button contact" @click="$store.commit('toggleModal', PopupContactsUp)">Связаться с нами</button>
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
import PopupContactsUp from "@/components/Advertiser/PopupContactsUp.vue";

export default {
  data() {
    return {
      PopupContactsUp
    }
  }
}
</script>
