<template>
  <section class="home-impact" ref="sectionEl">
    <div class="container">
      <div class="impact-grid">
        <div 
          v-for="(stat, i) in impactStats" 
          :key="stat.label"
          class="impact-item reveal"
          :class="`reveal-delay-${i}`"
        >
          <div class="impact-icon">
            <component :is="getIcon(i)" :size="32" />
          </div>
          <div class="impact-number">{{ displayNumbers[i] }}</div>
          <div class="impact-label">{{ stat.label }}</div>
          <div class="impact-detail">{{ stat.detail }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { Users, TreePine, TrendingUp, MapPin } from 'lucide-vue-next'
import { impactStats } from '../data/content.js'

const icons = [Users, TreePine, TrendingUp, MapPin]
const getIcon = (i) => icons[i] || Users

const sectionEl = ref(null)
let observer = null
let hasAnimated = false

// Parsed target numbers + prefix/suffix (e.g. "4,532+" -> value 4532, suffix "+")
const parsedStats = impactStats.map((stat) => {
  const match = stat.number.match(/^([\d,]+)(.*)$/)
  const value = match ? parseInt(match[1].replace(/,/g, ''), 10) : 0
  const suffix = match ? match[2] : ''
  return { value, suffix }
})

// What's currently shown on screen, starts at 0
const displayNumbers = reactive(parsedStats.map(() => '0'))

const easeOutQuad = (t) => t * (2 - t)

const animateCount = (index) => {
  const { value, suffix } = parsedStats[index]
  const duration = 1600
  const start = performance.now()

  const step = (now) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = easeOutQuad(progress)
    const current = Math.round(value * eased)
    displayNumbers[index] = current.toLocaleString() + suffix
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  }
  requestAnimationFrame(step)
}

const animateAll = () => {
  if (hasAnimated) return
  hasAnimated = true
  parsedStats.forEach((_, i) => animateCount(i))
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateAll()
          observer.disconnect()
        }
      })
    },
    { threshold: 0.3 }
  )
  if (sectionEl.value) observer.observe(sectionEl.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.home-impact {
  padding: 4rem 0;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.impact-item {
  text-align: center;
  padding: 1.5rem;
}

.impact-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
}

.impact-number {
  font-family: var(--ff-serif);
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.impact-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.25rem;
}

.impact-detail {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .impact-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media (max-width: 400px) {
  .impact-grid {
    grid-template-columns: 1fr;
  }
}
</style>
