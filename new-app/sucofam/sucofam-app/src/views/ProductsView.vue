<template>
  <div class="page-view">
    <div class="view-spacer" />
    <ProductsSection />
  </div>
</template>

<script setup>
import ProductsSection from '../components/ProductsSection.vue'
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
