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
import { onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()
let observer = null
let mutationObserver = null

// Create the IntersectionObserver (reused across calls)
const createObserver = () => {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    },
    { 
      threshold: 0.01,
      rootMargin: '0px 0px -40px 0px'
    }
  )
  return observer
}

// Observe all .reveal elements that haven't been made visible yet
const observeRevealElements = () => {
  const obs = createObserver()
  document.querySelectorAll('.reveal:not(.visible)').forEach((el) => obs.observe(el))
}

// Watch for new .reveal elements added to the DOM by child components
const startMutationObserver = () => {
  mutationObserver = new MutationObserver((mutations) => {
    let hasNewReveals = false
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === 1) {
          if (node.classList?.contains('reveal') || node.querySelector?.('.reveal')) {
            hasNewReveals = true
            break
          }
        }
      }
      if (hasNewReveals) break
    }
    if (hasNewReveals) {
      observeRevealElements()
    }
  })
  mutationObserver.observe(document.getElementById('sucofam-app'), {
    childList: true,
    subtree: true
  })
}

onMounted(async () => {
  // Wait for child components to render
  await nextTick()
  observeRevealElements()
  startMutationObserver()

  // Safety fallback — catch any elements missed by the first pass
  setTimeout(observeRevealElements, 300)
})

watch(() => route.path, async () => {
  await nextTick()
  // Allow new route's components to mount
  setTimeout(observeRevealElements, 100)
})

onUnmounted(() => {
  observer?.disconnect()
  mutationObserver?.disconnect()
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
</style>
