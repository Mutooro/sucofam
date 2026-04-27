<template>
  <nav id="mainNav" :class="{ 'scrolled': scrolled }">
    <div class="nav-inner container">
      <router-link to="/" class="nav-logo">
        <img src="/logo.jpeg" alt="SUCOFAM Logo" />
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
        <Menu v-if="!isMenuOpen" :size="28" />
        <X v-else :size="28" />
      </button>
    </div>
  </nav>

  <Transition name="fade">
    <div v-if="isMenuOpen" class="mobile-menu" @click="isMenuOpen = false">
      <div class="mobile-menu-content" @click.stop>
        <button class="close-btn" @click="isMenuOpen = false">
          <X :size="32" />
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


const scrolled = ref(false)
const isMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 60
}

// Disable body scrolling when mobile menu is open
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
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 1.25rem 0;
  background: var(--forest);
  transition: background 0.4s, padding 0.4s, box-shadow 0.4s;
}

#mainNav.scrolled {
  background: rgba(26, 61, 43, 0.96);
  backdrop-filter: blur(12px);
  padding: 0.8rem 0;
  box-shadow: var(--shadow-md);
}





.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.nav-logo img {
  height: 42px;
  width: auto;
  border-radius: 4px;
}

.nav-logo-text {
  font-family: var(--ff-serif);
  font-size: 1.4rem;
  font-weight: 900;
  color: var(--white);
  letter-spacing: 0.05em;
  transition: color 0.3s;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.2rem;
  list-style: none;
}

.nav-links a {
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s;
  cursor: pointer;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--gold);
}

.nav-cta {
  background: var(--gold);
  color: var(--charcoal) !important;
  padding: 0.6rem 1.4rem;
  border-radius: 2px;
  font-weight: 700 !important;
  transition: background 0.3s, transform 0.3s !important;
}

.nav-cta:hover {
  background: var(--harvest) !important;
  transform: translateY(-2px);
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
  color: var(--white);
}

.nav-toggle:hover {
  color: var(--gold);
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  inset: 0;
  background: var(--earth);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
}


.mobile-menu-content {
  width: 100%;
  text-align: center;
}

.close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: var(--white);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: var(--gold);
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mobile-links a {
  font-family: var(--ff-serif);
  font-size: 2rem;
  color: var(--white);
  font-weight: 700;
}

.mobile-links a:hover {
  color: var(--gold);
}

.mobile-cta {
  background: var(--gold);
  color: var(--charcoal) !important;
  padding: 1rem 2rem;
  display: inline-block;
  margin: 0 auto;
  border-radius: 4px;
  font-family: var(--ff-sans) !important;
  font-size: 1rem !important;
}

@media (max-width: 900px) {
  .nav-links { display: none; }
  .nav-toggle { display: flex; }
  .nav-logo-text { font-size: 1.2rem; }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>



