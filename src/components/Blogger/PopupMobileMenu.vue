<template>

  <div class="mobile-menu">
    <div class="mobile-menu-top">
      <div class="close-holder">
        <button class="close" id="mobile-menu-close" @click="$store.commit('toggleModal')"></button>
      </div>
      <nav class="mobile-menu-nav">
        <a href="index.html">Блогер</a>
        <a href="advertiser.html">Рекламодатель</a>
      </nav>
    </div>

    <div class="mobile-menu-buttons">
      <a href="https://stat.thelobsters.ru/login" class="mobile-menu-button" id="mobile-login-button">Войти</a>
      <button class="mobile-menu-button" id="mobile-registration-button" @click="$store.commit('toggleModal', registrationComponent)">Регистрация</button>
    </div>
  </div>

</template>

<script>
import popupRegistration from "@/components/Blogger/PopupRegistration.vue";
export default {
  components: {popupRegistration},
  data() {
    return {
      registrationComponent: popupRegistration
    }
  }
}
</script>
