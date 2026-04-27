<template>
  <div class="page-view">
    <div class="view-spacer" />
    <AboutSection />
    <TeamSection />
    <TestimonialsSection />
    <PartnerSection />
  </div>
</template>

<script setup>
import AboutSection from '../components/AboutSection.vue'
import TeamSection from '../components/TeamSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import PartnerSection from '../components/PartnerSection.vue'
</script>


<style scoped>
.page-view {
  min-height: 80vh;
}
.view-spacer {
  height: 80px;
  background: var(--forest);
}
</style>
