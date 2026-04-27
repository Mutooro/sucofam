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
import { onMounted, nextTick } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'


const route = useRoute()

// Initialize reveal animations after each route change
onMounted(() => {
  // Simple intersection observer setup for the whole app
  const initReveal = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  }

  // Watch for route changes to re-init observer on new components
  // (In a real app, this might be better handled inside components or via a global directive)
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
