<template>
  <div class="contacts-us-popup">
    <div class="contacts-us-popup-top">
      <h2>Связаться с нами</h2>
      <button class="close" id="registration-popup-close" @click="$store.commit('toggleModal')"></button>
    </div>

    <div class="contacts-us-popup-buttons">
      <button class="contacts-us-button"><a href="https://t.me/lobsters_support">Telegram</a></button>
      <button class="contacts-us-button"><a href="mailto:account@lobsters.pro">Почта</a></button>
    </div>
  </div>
</template>

<script>
export default {}
</script>
