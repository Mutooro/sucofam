<template>
  <div class="page-view">
    <div class="view-spacer" />
    <ContactSection />
  </div>
</template>

<script setup>
import ContactSection from '../components/ContactSection.vue'
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
