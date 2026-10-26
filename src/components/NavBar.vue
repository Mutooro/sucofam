<template>
  <nav id="mainNav" :class="{ 'scrolled': scrolled, 'menu-open': isMenuOpen }">
    <div class="nav-inner container">
      <router-link to="/" class="nav-logo">
        <span class="nav-logo-badge">
          <img :src="logoImg" alt="SUCOFAM Logo" />
        </span>
      </router-link>

      <ul class="nav-links">
        <li 
          v-for="link in navLinks" 
          :key="link.section"
          class="nav-item"
          :class="{ 'has-dropdown': link.children }"
          @mouseenter="link.children ? openDropdown(link.section) : null"
          @mouseleave="link.children ? closeDropdown() : null"
        >
          <router-link
            v-if="!link.children"
            :to="{ name: link.section }"
            active-class="active"
          >
            {{ link.label }}
          </router-link>

          <template v-else>
            <button
              type="button"
              class="dropdown-trigger"
              :class="{ active: activeDropdown === link.section }"
              :aria-expanded="activeDropdown === link.section"
              :aria-controls="`dropdown-${link.section}`"
              @click="toggleDropdown(link.section)"
            >
              {{ link.label }}
              <ChevronDown :size="14" class="chevron-icon" :class="{ 'rotated': activeDropdown === link.section }" />
            </button>

            <Transition name="dropdown">
              <div 
                v-if="activeDropdown === link.section" 
                class="dropdown-panel"
                :id="`dropdown-${link.section}`"
                :class="{ 'mega-menu': link.children.length > 4 }"
              >
                <router-link
                  v-for="child in link.children"
                  :key="child.label"
                  :to="child.hash ? { name: child.section, hash: child.hash } : { name: child.section }"
                  class="dropdown-link"
                  @click="activeDropdown = null"
                >
                  {{ child.label }}
                </router-link>
              </div>
            </Transition>
          </template>
        </li>
        <li>
          <router-link to="/contact" class="nav-cta" active-class="active-cta">Partner With Us</router-link>
        </li>
      </ul>

      <button
        ref="navToggle"
        class="nav-toggle"
        type="button"
        @click="toggleMobileMenu"
        :class="{ 'open': isMenuOpen }"
        aria-label="Menu"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
      >
        <Menu v-if="!isMenuOpen" :size="24" />
        <X v-else :size="24" />
        <span class="nav-toggle-label">{{ isMenuOpen ? 'Close' : 'Menu' }}</span>
      </button>
    </div>
  </nav>

  <Transition name="fade">
    <div v-if="isMenuOpen" class="mobile-menu" @click="closeMobileMenu">
      <div ref="mobileMenu" id="mobile-navigation" class="mobile-menu-content" role="dialog" aria-modal="true" aria-label="Mobile navigation" @click.stop>
        <button ref="mobileClose" class="close-btn" type="button" @click="closeMobileMenu" aria-label="Close menu">
          <X :size="28" />
        </button>
        <div class="mobile-links">
          <template v-for="link in navLinks" :key="link.section">
            <!-- Simple link (no children) -->
            <router-link
              v-if="!link.children"
              :to="{ name: link.section }"
              @click="closeMobileMenu"
              active-class="active"
            >
              {{ link.label }}
            </router-link>

            <!-- Dropdown accordion -->
            <div v-else class="mobile-dropdown">
              <button 
                class="mobile-dropdown-trigger"
                :class="{ 'expanded': mobileExpanded === link.section }"
                @click="toggleMobileDropdown(link.section)"
              >
                {{ link.label }}
                <ChevronDown :size="16" class="chevron-icon" :class="{ 'rotated': mobileExpanded === link.section }" />
              </button>
              <Transition name="accordion">
                <div v-if="mobileExpanded === link.section" class="mobile-dropdown-items">
                  <router-link
                    v-for="child in link.children"
                    :key="child.label"
                    :to="child.hash ? { name: child.section, hash: child.hash } : { name: child.section }"
                    @click="closeMobileMenu"
                    class="mobile-sub-link"
                  >
                    {{ child.label }}
                  </router-link>
                </div>
              </Transition>
            </div>
          </template>
          <router-link to="/contact" class="mobile-cta" @click="closeMobileMenu">Partner With Us</router-link>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X, ChevronDown } from 'lucide-vue-next'
import { navLinks } from '../data/content.js'
import logoImg from '@/assets/img/logo-transparent.png'

const scrolled = ref(false)
const isMenuOpen = ref(false)
const activeDropdown = ref(null)
const mobileExpanded = ref(null)
const navToggle = ref(null)
const mobileMenu = ref(null)
const mobileClose = ref(null)
let lastFocusedElement = null

let dropdownTimeout = null

const toggleMobileMenu = () => {
  if (isMenuOpen.value) {
    closeMobileMenu()
    return
  }
  lastFocusedElement = document.activeElement
  isMenuOpen.value = true
}

const closeMobileMenu = () => {
  isMenuOpen.value = false
}

const toggleDropdown = (section) => {
  activeDropdown.value = activeDropdown.value === section ? null : section
}

const openDropdown = (section) => {
  clearTimeout(dropdownTimeout)
  activeDropdown.value = section
}

const closeDropdown = () => {
  dropdownTimeout = setTimeout(() => {
    activeDropdown.value = null
  }, 150)
}

const toggleMobileDropdown = (section) => {
  mobileExpanded.value = mobileExpanded.value === section ? null : section
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 40
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    activeDropdown.value = null
    if (isMenuOpen.value) closeMobileMenu()
  }

  if (event.key === 'Tab' && isMenuOpen.value && mobileMenu.value) {
    const focusable = [...mobileMenu.value.querySelectorAll('button, a[href]')]
      .filter((element) => !element.hasAttribute('disabled'))
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    if (!first || !last) return
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }
}

watch(isMenuOpen, (open) => {
  if (open) {
    document.body.style.overflow = 'hidden'
    nextTick(() => mobileClose.value?.focus())
  } else {
    document.body.style.overflow = ''
    mobileExpanded.value = null
    nextTick(() => (lastFocusedElement || navToggle.value)?.focus())
    lastFocusedElement = null
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  clearTimeout(dropdownTimeout)
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
}

.nav-logo-badge {
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--bg-green) 0%, var(--white) 100%);
  border-radius: var(--radius-full);
  padding: 0.3rem 0.9rem;
  box-shadow: var(--shadow-sm);
}

.nav-logo img {
  height: 46px;
  width: auto;
  display: block;
}

/* Nav links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.15rem;
  list-style: none;
}

.nav-item {
  position: relative;
}

.nav-links a,
.nav-links .dropdown-trigger {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-muted);
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-full);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.dropdown-trigger {
  font: inherit;
  border: 0;
  cursor: pointer;
}

.nav-links a:hover,
.nav-links .dropdown-trigger:hover {
  color: var(--accent);
  background: rgba(166, 124, 82, 0.06);
}

.nav-links a.active,
.nav-links .dropdown-trigger.active {
  color: var(--accent);
  background: rgba(166, 124, 82, 0.1);
  font-weight: 600;
}

.chevron-icon {
  transition: transform 0.3s ease;
  opacity: 0.6;
}

.chevron-icon.rotated {
  transform: rotate(180deg);
}

/* Dropdown */
.dropdown-panel {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  padding: 0.5rem;
  min-width: 220px;
  width: max-content;
  z-index: 100;
  display: flex;
  flex-direction: column;
}

.dropdown-panel.mega-menu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.25rem;
  padding: 0.75rem;
  min-width: 460px;
}

.dropdown-link {
  display: block;
  padding: 0.6rem 1rem !important;
  font-size: 0.85rem !important;
  color: var(--text-body) !important;
  border-radius: var(--radius-sm) !important;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.dropdown-link:hover {
  background: rgba(166, 124, 82, 0.08) !important;
  color: var(--accent) !important;
}

/* Dropdown transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px);
}

.dropdown-enter-to,
.dropdown-leave-from {
  transform: translateX(-50%) translateY(0);
}

/* CTA */
.nav-cta {
  background: var(--accent) !important;
  color: var(--white) !important;
  padding: 0.55rem 1.2rem !important;
  font-weight: 600 !important;
  box-shadow: 0 2px 12px rgba(166, 124, 82, 0.25);
  transition: all 0.3s ease !important;
}

.nav-cta:hover {
  background: var(--accent-hover) !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(166, 124, 82, 0.35);
}

.nav-cta.active-cta {
  background: var(--accent-hover) !important;
}

/* Mobile Toggle */
.nav-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  padding: 0.65rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--text-dark);
  border-radius: var(--radius-sm);
  gap: 0.35rem;
}

.nav-toggle-label {
  font-size: 0.8rem;
  font-weight: 600;
}

.nav-toggle:hover {
  color: var(--accent);
  background: rgba(166, 124, 82, 0.06);
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
  max-height: calc(100vh - 6rem);
  overflow-y: auto;
}

.close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem;
  color: var(--text-dark);
  background: none;
  border: none;
  cursor: pointer;
  margin-bottom: 1.5rem;
  border-radius: var(--radius-sm);
}

.close-btn:hover {
  color: var(--accent);
  background: rgba(166, 124, 82, 0.06);
}

.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.mobile-links > a {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-dark);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
}

.mobile-links > a:hover,
.mobile-links > a.active {
  color: var(--accent);
  background: rgba(166, 124, 82, 0.06);
}

/* Mobile dropdown */
.mobile-dropdown {
  border-radius: var(--radius-sm);
}

.mobile-dropdown-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-dark);
  background: none;
  border: none;
  cursor: pointer;
  border-radius: var(--radius-sm);
  transition: all 0.2s ease;
}

.mobile-dropdown-trigger:hover,
.mobile-dropdown-trigger.expanded {
  color: var(--accent);
  background: rgba(166, 124, 82, 0.06);
}

.mobile-dropdown-items {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  overflow: hidden;
}

.mobile-sub-link {
  font-size: 0.95rem;
  color: var(--text-muted);
  padding: 0.7rem 1rem;
  border-radius: var(--radius-sm);
  border-left: 2px solid var(--border);
  transition: all 0.2s ease;
}

.mobile-sub-link:hover {
  color: var(--accent);
  border-left-color: var(--accent);
  background: rgba(166, 124, 82, 0.04);
}

/* Accordion transition */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}

.mobile-cta {
  background: var(--accent) !important;
  color: var(--white) !important;
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 600 !important;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
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
  .nav-logo img { height: 44px; }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
