<template>
  <div id="sucofam-app">
    <NavBar />

    <main>
      <RouterView />
    </main>


    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted, nextTick, watch } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'


const route = useRoute()

// Initialize reveal animations
const initReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target) // Stop observing once visible
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
}

onMounted(() => {
  initReveal()
})

// Re-run reveal logic whenever route changes to handle new components
watch(() => route.path, async () => {
  await nextTick()
  initReveal()
})
</script>

<style>
#sucofam-app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Page transitions */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease;
}
.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>
