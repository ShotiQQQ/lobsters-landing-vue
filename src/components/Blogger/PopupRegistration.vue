<template>
  <div class="registration-popup">
    <div class="registration-popup-top">
      <h1>Регистрация</h1>
      <button class="close" id="registration-popup-close" @click.prevent="$store.commit('toggleModal')"></button>
    </div>

    <div class="registration-popup-content">

      <div class="registration-popup-success" v-if="isSuccessRegistration">

        <div class="registration-popup-success__img"></div>

        <span class="registration-popup-success__title">Регистрация прошла успешно!</span>

        <button class="registration-popup-success__button" @click="$store.commit('toggleModal')">Продолжить</button>

      </div>


      <p class="login-popup-warning" v-if="!isSuccessRegistration">
        Внимание! Указывайте только корректные контактные данные. Если мы не сможем связаться с вами, вы не получите доступ к личному кабинету
      </p>

      <form class="registration-popup-form" v-if="!isSuccessRegistration" @submit.prevent>

        <div class="reg-form">
          <label for="name">ФИО</label>
          <input type="text" name="name" id="name" autocomplete="name" placeholder="ФИО" v-model:value="name"/>
        </div>

        <div class="reg-form">
          <label for="email">E-mail</label>
          <input type="text" name="email" id="email" autocomplete="email" placeholder="Укажите e-mail" v-model:value="email"/>
        </div>

        <div class="reg-form">
          <label for="media-link">Телеграм / whats app</label>
          <input type="text" name="media-link" id="media-link" placeholder="Ссылка на телеграм или whats app" v-model:value="contacts" />
        </div>

        <div class="reg-form">
          <label for="phone">Телефон</label>
          <input id="phone" placeholder="Укажите телефон" v-model:value="telephone" type="tel">
        </div>

        <div class="reg-form">
          <label for="platform">Площадка</label>
          <input type="text" name="platform" id="platform" placeholder="Ссылка на сайт / телеграм / дзен / другое" v-model:value="platform" />
        </div>

        <div class="registration-drop-down-holder">
          <button class="registration-popup-dropdown-button" @click.prevent="isStatusOpened = true">Ваш статус<span></span></button>
          <ul class="status-list" v-show="isStatusOpened">
            <li class="status-list-item">
              <input type="radio" name="status" id="fiz" value="Физ. лицо" v-model:value="status">
              <label for="fiz">Физ. лицо, самозанятость</label>
            </li>

            <li class="status-list-item">
              <input type="radio" name="status" id="ip" value="ИП" v-model:value="status">
              <label for="ip">ИП</label>
            </li>
            <li class="status-list-item">
              <input type="radio" name="status" id="urlico" value="Юр. лицо" v-model:value="status">
              <label for="urlico">Юридическое лицо</label>
            </li>

            <button class="close" id="status-list-close-button" @click.prevent="isStatusOpened = false"></button>
          </ul>
        </div>

        <div class="agreement-checkbox" data-validate="regFormBlock">
          <input type="checkbox" id="agreement" name="agreement" required data-validate="regInput" v-model:value="isPolicyChecked">
          <label for="agreement">Я принимаю <a href="https://lobsters.pro/oferta">Оферту</a> и <a href="https://lobsters.pro/privacy">Политику обработки персональных данных</a></label>
        </div>

        <button class="registration-popup-submit-button" id="registration" @click="sendData" :disabled="isLoading">
                   <span class="loader" v-if="isLoading">
                       <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                            <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
                            </path>
                        </svg>
                   </span>
          <span class="registration-popup-submit-button__text" v-else>Оставить заявку</span>
        </button>
      </form>

    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: '',
      email: '',
      contacts: '',
      telephone: '',
      platform: '',
      status: '',
      isStatusValidate: null,
      isPolicyChecked: false,
      isSuccessRegistration: false,
      isStatusOpened: false,
      isLoading: false,
    }
  },
  methods: {
    sendData() {
      this.isLoading = true;
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        name: this.name,
        email: this.email,
        contact_details: this.contacts,
        phone_number: this.telephone,
        about: this.platform,
        type: this.status,
        meta: this.$store.state.queryParams
      })
          .then(res => {
            console.log(res)

          })
          .finally(() => {
            this.isLoading = false;
            this.isSuccessRegistration = true;
          })
    }
  },
}
</script>
