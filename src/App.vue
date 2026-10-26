<template>
  <div id="sucofam-app">
    <NavBar />
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <main id="main-content" tabindex="-1">
      <RouterView v-slot="{ Component, route: currentRoute }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="currentRoute.path" />
        </Transition>
      </RouterView>
    </main>
    <AppFooter />

    <!-- Cookie Consent Banner -->
    <CookieConsent />

    <!-- WhatsApp Floating Chat Panel -->
    <a
      href="https://wa.me/256782285490"
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <div class="whatsapp-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="28"
          height="28"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </div>
      <div class="whatsapp-tooltip">Chat with us</div>
    </a>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRoute, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
import CookieConsent from './components/CookieConsent.vue'

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

  // Safety fallback - catch any elements missed by the first pass
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

.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

/* WhatsApp Floating Button */
.whatsapp-float {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  z-index: 9998;
  text-decoration: none;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(37, 211, 102, 0.5);
}

.whatsapp-icon {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.whatsapp-tooltip {
  position: absolute;
  right: 70px;
  background: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
}

.whatsapp-float:hover .whatsapp-tooltip {
  opacity: 1;
  visibility: visible;
  right: 75px;
}

@media (max-width: 768px) {
  .whatsapp-float {
    bottom: 20px;
    right: 20px;
    width: 55px;
    height: 55px;
  }

  .whatsapp-tooltip {
    display: none;
  }
}
</style>
