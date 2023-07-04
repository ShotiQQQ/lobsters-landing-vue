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
import Header from "@/components/Blogger/Header.vue";
import SectionSteps from "@/components/Blogger/SectionSteps.vue";
import SectionTopHero from "@/components/Blogger/SectionTopHero.vue";
import SectionDescription from "@/components/Blogger/SectionDescription.vue";
import SectionBrands from "@/components/Blogger/SectionBrands.vue";
import SectionPlatforms from "@/components/Blogger/SectionPlatforms.vue";
import SectionCase from "@/components/Blogger/SectionCase.vue";
import SectionBottomHero from "@/components/Blogger/SectionBottomHero.vue";
import Footer from "@/components/Blogger/Footer.vue";
import Modal from "@/components/Global/Modal.vue";
import PopupMobileMenu from "@/components/Blogger/PopupMobileMenu.vue";

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
