<template>
  <section class="not-found container">
    <p class="section-tag">Page not found</p>
    <h1 class="section-title">We couldn't find that page.</h1>
    <p class="not-found-copy">The link may be outdated or the address may have been typed incorrectly.</p>
    <RouterLink to="/" class="btn btn-accent">Return home</RouterLink>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { usePageSeo } from '../composables/usePageSeo.js'

usePageSeo({
  title: 'Page Not Found | SUCOFAM Uganda',
  path: '/404',
  robots: 'noindex'
})
</script>

<style scoped>
.not-found {
  min-height: 60vh;
  display: grid;
  align-content: center;
  justify-items: start;
  gap: 1rem;
  padding-top: 8rem;
  padding-bottom: 4rem;
}

.not-found-copy {
  max-width: 38rem;
  color: var(--text-muted);
}
</style>
