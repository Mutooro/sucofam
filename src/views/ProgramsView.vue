<template>
  <div class="page-view">
    <div class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1920" alt="Programs" />
        <div class="page-hero-overlay" />
      </div>
      <div class="page-hero-content container">
        <div class="section-tag white reveal">What We Do</div>
        <h1 class="page-hero-title reveal reveal-delay-1">Our Programs</h1>
        <p class="page-hero-desc reveal reveal-delay-2">
          Holistic interventions designed to transform farming households from subsistence to sustainable livelihoods.
        </p>
      </div>
    </div>

    <section class="programs-section bg-white section-padding">
      <div class="container">
        <div class="programs-grid">
          <div 
            v-for="(prog, i) in programs" 
            :key="prog.title"
            :id="prog.title.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')"
            class="program-card reveal"
            :class="`reveal-delay-${i % 3}`"
          >
            <div class="program-header">
              <div class="program-icon">
                <component :is="getIcon(prog.icon)" :size="28" />
              </div>
              <h3>{{ prog.title }}</h3>
            </div>
            <p class="program-desc">{{ prog.desc }}</p>
            <ul class="program-items">
              <li v-for="item in prog.items" :key="item">
                <Check :size="16" class="check-icon" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { 
  CloudRain, Users, Settings, ShoppingBag, Utensils, Trees,
  Scale, Coins, Heart, BookOpen, Check
} from 'lucide-vue-next'
import { programs } from '../data/content.js'

const iconMap = {
  CloudRain, Users, Settings, ShoppingBag, Utensils, Trees,
  Scale, Coins, Heart, BookOpen
}

const getIcon = (name) => iconMap[name] || Settings
</script>

<style scoped>
.page-hero {
  position: relative;
  min-height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: var(--primary-dark);
}

.page-hero-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.page-hero-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.35;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(8, 28, 21, 0.9) 0%, rgba(27, 67, 50, 0.85) 100%);
  z-index: 2;
}

.page-hero-content {
  position: relative;
  z-index: 3;
  padding: 8rem 1.5rem 4rem;
  max-width: 700px;
}

.page-hero-title {
  font-family: var(--ff-serif);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 900;
  color: var(--white);
  margin-bottom: 1rem;
}

.page-hero-desc {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.program-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.program-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.program-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.program-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-sm);
  background: var(--bg-pink);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.program-header h3 {
  font-family: var(--ff-serif);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-dark);
}

.program-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.program-items {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.program-items li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.9rem;
  color: var(--text-body);
}

.check-icon {
  color: var(--accent);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .programs-grid { grid-template-columns: 1fr; }
}
</style>
