<template>
  <section class="home-impact">
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
          <div class="impact-number">{{ stat.number }}</div>
          <div class="impact-label">{{ stat.label }}</div>
          <div class="impact-detail">{{ stat.detail }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Users, TreePine, TrendingUp, MapPin } from 'lucide-vue-next'
import { impactStats } from '../data/content.js'

const icons = [Users, TreePine, TrendingUp, MapPin]
const getIcon = (i) => icons[i] || Users
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
