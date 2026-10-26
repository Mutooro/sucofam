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
import { usePageSeo, SITE_URL } from '../composables/usePageSeo.js'

usePageSeo({
  title: 'SUCOFAM Uganda | Sustainable Agriculture & Farmer Markets',
  description:
    'SUCOFAM Uganda Limited empowers smallholder farmers, especially women and youth, in Western Uganda through coffee, cocoa, and honey value chains and climate-smart agriculture.',
  path: '/',
  graph: [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'SUCOFAM Uganda Limited',
      alternateName: 'Sustainably Connected Farmers Agripreneur Market',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/assets/logo-transparent-DykyThBo.png`,
      description:
        'SUCOFAM Uganda Limited supports smallholder farmers in Western Uganda through coffee, cocoa, and honey value chains, agroforestry, and climate resilience.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kibbenge Tourist Model Village, Katonzi Cell, Bulembia Division',
        addressLocality: 'Kasese',
        addressRegion: 'Western Uganda',
        addressCountry: 'UG'
      },
      areaServed: 'Western Uganda',
      email: 'info@sucofam.org',
      telephone: '+256782285490'
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'SUCOFAM Uganda',
      url: `${SITE_URL}/`,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en'
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
