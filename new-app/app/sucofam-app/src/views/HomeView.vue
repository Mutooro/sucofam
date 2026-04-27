<template>
  <div class="home-view">
    <HeroSection />
    <HomeAbout />
    <HomePrograms />
    <HomeImpact />
    <HomeCTA />
    <HomeTestimonials />
    <HomeNews />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import HomeAbout from '../components/HomeAbout.vue'
import HomePrograms from '../components/HomePrograms.vue'
import HomeImpact from '../components/HomeImpact.vue'
import HomeCTA from '../components/HomeCTA.vue'
import HomeTestimonials from '../components/HomeTestimonials.vue'
import HomeNews from '../components/HomeNews.vue'
</script>

<style scoped>
.home-view {
  min-height: 80vh;
}
</style>
