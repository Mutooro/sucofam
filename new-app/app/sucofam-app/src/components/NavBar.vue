<template>
  <nav id="mainNav" :class="{ 'scrolled': scrolled, 'menu-open': isMenuOpen }">
    <div class="nav-inner container">
      <router-link to="/" class="nav-logo">
        <img :src="logoImg" alt="SUCOFAM Logo" />
        <span class="nav-logo-text">SUCOFAM</span>
      </router-link>

      <ul class="nav-links">
        <li v-for="link in navLinks" :key="link.section">
          <router-link
            :to="{ name: link.section }"
            active-class="active"
          >
            {{ link.label }}
          </router-link>
        </li>
        <li>
          <router-link to="/contact" class="nav-cta" active-class="active-cta">Partner With Us</router-link>
        </li>
      </ul>

      <button
        class="nav-toggle"
        @click="toggleMobileMenu"
        :class="{ 'open': isMenuOpen }"
        aria-label="Menu"
      >
        <Menu v-if="!isMenuOpen" :size="24" />
        <X v-else :size="24" />
      </button>
    </div>
  </nav>

  <Transition name="fade">
    <div v-if="isMenuOpen" class="mobile-menu" @click="isMenuOpen = false">
      <div class="mobile-menu-content" @click.stop>
        <button class="close-btn" @click="isMenuOpen = false">
          <X :size="28" />
        </button>
        <div class="mobile-links">
          <router-link
            v-for="link in navLinks"
            :key="link.section"
            :to="{ name: link.section }"
            @click="isMenuOpen = false"
            active-class="active"
          >
            {{ link.label }}
          </router-link>
          <router-link to="/contact" class="mobile-cta" @click="isMenuOpen = false">Partner With Us</router-link>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import { navLinks } from '../data/content.js'
import logoImg from '@/assets/img/logo.jpeg'

const scrolled = ref(false)
const isMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 40
}

watch(isMenuOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
#mainNav {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: calc(100% - 2rem);
  max-width: 1160px;
  padding: 0.6rem 1.2rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: var(--radius-full);
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: var(--shadow-sm);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

#mainNav.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-md);
  top: 0.75rem;
  padding: 0.5rem 1.2rem;
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  max-width: none;
  margin: 0;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.nav-logo img {
  height: 40px;
  width: auto;
  border-radius: var(--radius-sm);
}

.nav-logo-text {
  font-family: var(--ff-serif);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--text-dark);
  letter-spacing: -0.02em;
  transition: color 0.3s;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  list-style: none;
}

.nav-links a {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-muted);
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius-full);
  transition: all 0.3s ease;
}

.nav-links a:hover {
  color: var(--accent);
  background: rgba(214, 51, 132, 0.06);
}

.nav-links a.active {
  color: var(--accent);
  background: rgba(214, 51, 132, 0.1);
  font-weight: 600;
}

.nav-cta {
  background: var(--accent) !important;
  color: var(--white) !important;
  padding: 0.55rem 1.2rem !important;
  font-weight: 600 !important;
  box-shadow: 0 2px 12px rgba(214, 51, 132, 0.25);
  transition: all 0.3s ease !important;
}

.nav-cta:hover {
  background: var(--accent-hover) !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(214, 51, 132, 0.35);
}

.nav-cta.active-cta {
  background: var(--accent-hover) !important;
}

/* Mobile Toggle */
.nav-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-dark);
  border-radius: var(--radius-sm);
}

.nav-toggle:hover {
  color: var(--accent);
  background: rgba(214, 51, 132, 0.06);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 2000;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 1rem;
}

.mobile-menu-content {
  background: var(--white);
  border-radius: var(--radius);
  padding: 1.5rem;
  width: 100%;
  max-width: 320px;
  margin-top: 4rem;
  box-shadow: var(--shadow-xl);
}

.close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: var(--text-dark);
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 1.5rem;
  border-radius: var(--radius-sm);
}

.close-btn:hover {
  color: var(--accent);
  background: rgba(214, 51, 132, 0.06);
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-links a {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-dark);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
}

.mobile-links a:hover,
.mobile-links a.active {
  color: var(--accent);
  background: rgba(214, 51, 132, 0.06);
}

.mobile-cta {
  background: var(--accent) !important;
  color: var(--white) !important;
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 600 !important;
}

.mobile-cta:hover {
  background: var(--accent-hover) !important;
}

@media (max-width: 900px) {
  .nav-links { display: none; }
  .nav-toggle { display: flex; }
  #mainNav {
    width: calc(100% - 1.5rem);
    padding: 0.5rem 1rem;
  }
  .nav-logo img { height: 36px; }
  .nav-logo-text { font-size: 1.1rem; }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
