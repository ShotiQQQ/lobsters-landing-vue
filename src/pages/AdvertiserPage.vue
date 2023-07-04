<template>
  <div>
    <Modal v-if="$store.state.isModalOpened" :component="this.$store.state.modalContent" />

    <Header />

    <SectionTopHero />
    <SectionSteps />
    <SectionDescription />
    <SectionPlatforms />
    <SectionReview />
    <SectionBottomHero />

    <Footer />

  </div>
</template>

<script>
import Header from "@/components/Advertiser/Header.vue";
import SectionTopHero from "@/components/Advertiser/SectionTopHero.vue";
import SectionSteps from "@/components/Advertiser/SectionSteps.vue";
import SectionDescription from "@/components/Advertiser/SectionDescription.vue";
import SectionPlatforms from "@/components/Advertiser/SectionPlatforms.vue";
import SectionReview from "@/components/Advertiser/SectionReview.vue";
import SectionBottomHero from "@/components/Advertiser/SectionBottomHero.vue";
import Footer from "@/components/Advertiser/Footer.vue";
import Modal from "@/components/Global/Modal.vue";

export default {
  components: {
    Footer,
    SectionBottomHero,
    SectionReview,
    SectionPlatforms,
    SectionDescription,
    SectionSteps,
    SectionTopHero,
    Header,
    Modal
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
