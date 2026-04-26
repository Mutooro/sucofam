<template>
  <div class="page-view">
    <div class="view-spacer" />
    <AboutSection />
  </div>
</template>

<script setup>
import AboutSection from '../components/AboutSection.vue'
</script>

<style scoped>
.page-view {
  min-height: 80vh;
}
.view-spacer {
  height: 80px; /* Offset for fixed navbar */
  background: var(--forest);
}
</style>
