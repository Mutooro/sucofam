import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy(sections = ['hero', 'about', 'programs', 'products', 'impact', 'contact']) {
  const scrolled      = ref(false)
  const activeSection = ref('hero')

  function handleScroll() {
    scrolled.value = window.scrollY > 60

    for (const id of sections) {
      const el = document.getElementById(id)
      if (el) {
        const rect = el.getBoundingClientRect()
        if (rect.top <= 100 && rect.bottom > 100) {
          activeSection.value = id
          break
        }
      }
    }
  }

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    const observe = () => document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    observe()
    // re-observe after Vue finishes rendering (called from App.vue nextTick)
    return observe
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { scrolled, activeSection, scrollTo, initReveal }
}
