<template>
  <div class="page-view">
    <div class="view-spacer" />
    <ProgramsSection />
  </div>
</template>

<script setup>
import ProgramsSection from '../components/ProgramsSection.vue'
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
