<template>
  <section class="home-programs bg-soft">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-tag">Our Work</div>
        <h2 class="section-title">Focus <em>Areas</em></h2>
        <div class="section-line" />
        <p class="section-desc">
          Holistic interventions designed to transform farming households from subsistence to sustainable livelihoods.
        </p>
      </div>

      <div class="hp-grid">
        <div 
          v-for="(prog, i) in programs.slice(0, 6)" 
          :key="prog.title" 
          class="hp-card reveal"
          :class="`reveal-delay-${i % 3 + 1}`"
        >
          <div class="hp-icon-wrapper">
            <component :is="getIcon(prog.icon)" :size="28" />
          </div>
          <h3 class="hp-title">{{ prog.title }}</h3>
          <p class="hp-desc">{{ prog.desc }}</p>
        </div>
      </div>

      <div class="hp-footer reveal">
        <router-link to="/programs" class="btn btn-outline">
          View All Focus Areas <ArrowRight :size="16" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { 
  CloudRain, Users, Settings, ShoppingBag, Utensils, Trees,
  Scale, Coins, Heart, BookOpen, ArrowRight 
} from 'lucide-vue-next'
import { programs } from '../data/content.js'

const iconMap = {
  CloudRain, Users, Settings, ShoppingBag, Utensils, Trees,
  Scale, Coins, Heart, BookOpen
}

const getIcon = (name) => iconMap[name] || Settings
</script>

<style scoped>
.home-programs {
  padding: var(--section-pad) 0;
}

.hp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.hp-card {
  background: var(--bg-pink);
  border-radius: var(--radius);
  padding: 2rem;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.hp-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  background: var(--white);
  border-color: var(--border);
}

.hp-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-sm);
  background: rgba(166, 124, 82, 0.1);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.hp-title {
  font-family: var(--ff-sans);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.hp-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.hp-footer {
  text-align: center;
}

@media (max-width: 900px) {
  .hp-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .hp-grid { grid-template-columns: 1fr; }
}
</style>
