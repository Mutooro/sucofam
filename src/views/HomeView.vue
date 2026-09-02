<template>
  <div class="home-view">
    <HeroSection />
    <HomeAbout />
    <HomeValueChains />
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
  link: [
    { rel: 'canonical', href: 'https://www.sucofam.org/' }
  ],
  meta: [
    {
      name: 'description',
      content: 'SUCOFAM empowers smallholder farmers especially women and youth across Uganda through the coffee, cocoa, and honey value chains. Sustainable livelihoods, not subsistence.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://www.sucofam.org/' },
    { property: 'og:title', content: 'SUCOFAM | Empowering Farmers Across Uganda' },
    { property: 'og:description', content: "SUCOFAM strengthens Uganda's coffee, cocoa, and honey value chains while building sustainable livelihoods for smallholder farmers." },
    { property: 'og:image', content: 'https://www.sucofam.org/hero-bg.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': 'https://www.sucofam.org/#organization',
            name: 'SUCOFAM',
            url: 'https://www.sucofam.org/',
            logo: 'https://www.sucofam.org/assets/logo-transparent-DykyThBo.png',
            description: 'SUCOFAM supports smallholder farmers across Uganda through the coffee, cocoa, and honey value chains.',
            areaServed: 'Uganda',
            email: 'info@sucofam.org'
          },
          {
            '@type': 'WebSite',
            '@id': 'https://www.sucofam.org/#website',
            name: 'SUCOFAM',
            url: 'https://www.sucofam.org/',
            publisher: { '@id': 'https://www.sucofam.org/#organization' },
            inLanguage: 'en'
          }
        ]
      })
    }
  ]
})

import HeroSection from '../components/HeroSection.vue'
import HomeAbout from '../components/HomeAbout.vue'
import HomeValueChains from '../components/HomeValueChains.vue'
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
