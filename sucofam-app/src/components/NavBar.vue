<template>
  <nav :class="['navbar', { scrolled }]">
    <router-link to="/" class="nav-logo">
      <div class="logo-mark">🌿</div>
      <span class="logo-text">SUCOFAM</span>
    </router-link>

    <ul class="nav-links">
      <li v-for="link in navLinks" :key="link.section">
        <router-link
          :to="{ name: link.section }"
          class="nav-link"
          active-class="active"
        >{{ link.label }}</router-link>
      </li>
      <li>
        <router-link to="/contact" class="nav-cta">Partner With Us</router-link>
      </li>
    </ul>

    <button class="hamburger" @click="mobileOpen = true" aria-label="Open menu">
      <span /><span /><span />
    </button>
  </nav>

  <!-- MOBILE MENU -->
  <Transition name="mobile-fade">
    <div v-if="mobileOpen" class="mobile-overlay">
      <button class="close-btn" @click="mobileOpen = false" aria-label="Close menu">✕</button>
      <nav class="mobile-nav">
        <router-link
          to="/"
          class="mobile-link"
          @click="mobileOpen = false"
        >Home</router-link>
        <router-link
          v-for="link in navLinks"
          :key="link.section"
          :to="{ name: link.section }"
          class="mobile-link"
          @click="mobileOpen = false"
        >{{ link.label }}</router-link>
        <router-link
          to="/contact"
          class="mobile-link mobile-cta"
          @click="mobileOpen = false"
        >Partner With Us →</router-link>
      </nav>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navLinks } from '../data/content.js'

const scrolled = ref(false)
const mobileOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 60
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem 4rem;
  transition: background 0.4s, box-shadow 0.4s, padding 0.3s;
}
.navbar.scrolled {
  background: rgba(14, 61, 35, 0.97);
  backdrop-filter: blur(14px);
  box-shadow: 0 2px 30px rgba(0,0,0,0.2);
  padding: 0.85rem 4rem;
}

/* Logo */
.nav-logo {
  display: flex; align-items: center; gap: 0.75rem;
  cursor: pointer;
}
.logo-mark {
  width: 40px; height: 40px;
  background: var(--gold);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem;
  transition: transform 0.3s;
}
.nav-logo:hover .logo-mark { transform: rotate(-8deg) scale(1.08); }
.logo-text {
  font-family: var(--ff-serif);
  font-size: 1.35rem; font-weight: 900;
  color: var(--white);
  letter-spacing: 0.06em;
}

/* Desktop links */
.nav-links {
  display: flex; align-items: center;
  gap: 2.2rem; list-style: none;
}
.nav-link {
  color: rgba(255,255,255,0.75);
  font-size: 0.82rem; font-weight: 500;
  letter-spacing: 0.1em; text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s;
  position: relative;
  padding-bottom: 2px;
}
.nav-link::after {
  content: '';
  position: absolute; bottom: -2px; left: 0;
  width: 0; height: 1.5px;
  background: var(--gold);
  transition: width 0.3s;
}
.nav-link:hover, .nav-link.active { color: var(--white); }
.nav-link:hover::after, .nav-link.active::after { width: 100%; }

.nav-cta {
  background: var(--gold);
  color: var(--charcoal) !important;
  padding: 0.6rem 1.4rem;
  border-radius: var(--radius);
  font-size: 0.82rem; font-weight: 700;
  letter-spacing: 0.06em; text-transform: uppercase;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}
.nav-cta:hover { background: var(--harvest); transform: translateY(-1px); }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column; gap: 5px;
  padding: 4px;
  background: none; border: none; cursor: pointer;
}
.hamburger span {
  display: block; width: 22px; height: 2px;
  background: var(--white); border-radius: 2px;
  transition: 0.3s;
}

/* Mobile overlay */
.mobile-overlay {
  position: fixed; inset: 0;
  background: var(--forest);
  z-index: 600;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 1.8rem;
}
.close-btn {
  position: absolute; top: 1.8rem; right: 2rem;
  font-size: 1.8rem; color: var(--white);
  background: none; border: none; cursor: pointer;
  transition: color 0.2s;
}
.close-btn:hover { color: var(--gold); }
.mobile-nav { display: flex; flex-direction: column; align-items: center; gap: 1.6rem; }
.mobile-link {
  font-family: var(--ff-serif);
  font-size: 2rem; font-weight: 700;
  color: rgba(255,255,255,0.85);
  cursor: pointer; transition: color 0.3s;
}
.mobile-link:hover { color: var(--gold); }
.mobile-cta {
  font-family: var(--ff-sans);
  font-size: 1rem; font-weight: 700;
  background: var(--gold);
  color: var(--charcoal);
  padding: 0.85rem 2.2rem;
  border-radius: var(--radius);
  margin-top: 0.5rem;
}

/* Transition */
.mobile-fade-enter-active, .mobile-fade-leave-active { transition: opacity 0.3s, transform 0.3s; }
.mobile-fade-enter-from { opacity: 0; transform: scale(1.04); }
.mobile-fade-leave-to { opacity: 0; }

@media (max-width: 900px) {
  .navbar {
    padding: 1rem 1.5rem;
    background: rgba(14, 61, 35, 0.97);
    backdrop-filter: blur(14px);
  }
  .navbar.scrolled { padding: 0.8rem 1.5rem; }
  .nav-links { display: none; }
  .hamburger { display: flex; }
}
</style>
