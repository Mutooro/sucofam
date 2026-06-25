<template>
  <div class="home-view">
    <HeroSection />
    <HomeAbout />
    <HomePrograms />
    <HomePartners />
    <HomeImpact />
    <HomeCTA />
    <HomeTestimonials />
    <HomeNews />
  </div>
</template>

<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'SUCOFAM | Empowering Farmers Across Uganda',
  meta: [
    {
      name: 'description',
      content: 'SUCOFAM empowers smallholder farmers — especially women and youth — across Uganda through the coffee, cocoa, and honey value chains. Sustainable livelihoods, not subsistence.'
    }
  ]
})

import HeroSection from '../components/HeroSection.vue'
import HomeAbout from '../components/HomeAbout.vue'
import HomePrograms from '../components/HomePrograms.vue'
import HomePartners from '../components/HomePartners.vue'
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
