<template>
  <div class="home-view">
    <HeroSection :scroll-to="goToPrograms" />
    <HomePrograms />
    <HomeNews />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import HeroSection from '../components/HeroSection.vue'
import HomePrograms from '../components/HomePrograms.vue'
import HomeNews from '../components/HomeNews.vue'

const router = useRouter()

const goToPrograms = () => {
  router.push({ name: 'programs' })
}
</script>


