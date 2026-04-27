<template>
  <div class="page-view">
    <div class="view-spacer" />
    <AboutSection />
    <PartnerSection />
  </div>
</template>

<script setup>
import AboutSection from '../components/AboutSection.vue'
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
