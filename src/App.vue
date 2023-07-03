<template>
  <div>
    <Modal v-if="$store.state.isModalOpened" :component="this.$store.state.modalContent" />

    <Header />

    <SectionTopHero />
    <SectionSteps />
    <SectionDescription />
    <SectionBrands />
    <SectionPlatforms />
    <SectionCase />
    <SectionBottomHero />

    <Footer />
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import SectionSteps from "@/components/SectionSteps.vue";
  import SectionTopHero from "@/components/SectionTopHero.vue";
  import SectionDescription from "@/components/SectionDescription.vue";
  import SectionBrands from "@/components/SectionBrands.vue";
  import SectionPlatforms from "@/components/SectionPlatforms.vue";
  import SectionCase from "@/components/SectionCase.vue";
  import SectionBottomHero from "@/components/SectionBottomHero.vue";
  import Footer from "@/components/Footer.vue";
  import Modal from "@/components/Modal.vue";
  import PopupMobileMenu from "@/components/PopupMobileMenu.vue";

  export default {
    components: {
      PopupMobileMenu,
      Modal,
      Footer,
      SectionBottomHero,
      SectionCase, SectionPlatforms, SectionBrands, SectionDescription, SectionSteps, SectionTopHero, Header
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>
