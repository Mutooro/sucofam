<template>
  <div class="home-view">
    <HeroSection :scroll-to="goToContact" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'

const router = useRouter()

const goToContact = () => {
  router.push({ name: 'contact' })
}
</script>
