<template>
  <div class="page-view">
    <div class="view-spacer" />
    <ImpactSection @scroll-to="goToContact" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import ImpactSection from '../components/ImpactSection.vue'

const router = useRouter()
const goToContact = () => {
  router.push({ name: 'contact' })
}
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
