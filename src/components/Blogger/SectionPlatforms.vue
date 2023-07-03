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

          <PlatformIcon v-for="platformIcon in platformsIcons" :id="platformIcon.id" :content="platformIcon.name" />

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
      platformsIcons: [
        {
          id: 1,
          name: 'YouTube'
        },
        {
          id: 2,
          name: 'Telegram'
        },
        {
          id: 3,
          name: 'Сайты / Блоги'
        },
        {
          id: 4,
          name: 'Tik Tok'
        },
        {
          id: 5,
          name: 'Яндекс Дзен'
        },
        {
          id: 6,
          name: 'Мобильные приложения'
        },
        {
          id: 7,
          name: 'Instagram'
        },
        {
          id: 8,
          name: 'Вконтакте'
        },
        {
          id: 9,
          name: 'Рассмотрим другие площадки'
        }
      ]
    }
  }
}
</script>
