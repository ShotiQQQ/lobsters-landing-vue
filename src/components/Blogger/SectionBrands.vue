<template>
  <section class="brands">
    <div id="decor-red"></div>
    <div class="_container">
      <div class="brands-wrapper">
        <div class="brands-title-holder">
          <h2>Эти бренды <span id="brands-title-holder-underlined">уже готовы </span> разместить <br> рекламу у вас в блоге</h2>

        </div>

        <ul class="brands-cards">
            <Brand v-for="brand in brands" :brandName="brand.name" :key="brand.id"/>
        </ul>

        <div class="brands-link-holder">
          <div class="brands-link">
            <p>Вы классный бренд?</p><a href="advertiser.html">Давайте работать вместе</a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Brand from "@/components/Blogger/Brand.vue";

export default {
  components: {Brand},
  data() {
    return {
      brands: [
        {
          id: 1,
          name: 'tinkoff'
        },
        {
          id: 2,
          name: 'alpha'
        },
        {
          id: 3,
          name: 'urbir'
        },
        {
          id: 4,
          name: 'mts'
        },
        {
          id: 5,
          name: 'gazprom'
        },
        {
          id: 6,
          name: 'renes'
        },
        {
          id: 7,
          name: 'sovcom'
        },
        {
          id: 8,
          name: 'open'
        },
      ]
    }
  }
}
</script>
