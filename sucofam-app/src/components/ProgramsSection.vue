<template>
  <section id="programs" class="programs-section">
    <div class="container">
      <div class="programs-header">
        <div class="section-tag">What We Do</div>
        <h2 class="section-title" style="color:var(--white)">
          Core Programs & <em>Interventions</em>
        </h2>
        <p class="section-desc" style="color:rgba(255,255,255,0.6)">
          Ten integrated programs spanning agriculture, inclusion, health, and education.
        </p>
      </div>

      <div class="programs-grid">
        <div
          v-for="(prog, i) in programs"
          :key="prog.title"
          class="program-card reveal"
          :style="`transition-delay: ${i * 0.05}s`"
        >
          <div class="card-bar" />
          <div class="card-num">{{ String(i + 1).padStart(2, '0') }}</div>
          <div class="card-icon">
            <component :is="iconMap[prog.icon]" :size="32" stroke-width="1.5" />
          </div>
          <h3 class="card-title">{{ prog.title }}</h3>
          <p class="card-desc">{{ prog.desc }}</p>
          <ul class="card-items">
            <li v-for="item in prog.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="programs-bg-decor" />
  </section>
</template>

<script setup>
import { programs } from '../data/content.js'
import {
  CloudRain,
  Users,
  Settings,
  ShoppingBag,
  Utensils,
  Trees,
  Scale,
  Coins,
  Heart,
  BookOpen
} from 'lucide-vue-next'

const iconMap = {
  CloudRain,
  Users,
  Settings,
  ShoppingBag,
  Utensils,
  Trees,
  Scale,
  Coins,
  Heart,
  BookOpen
}
</script>

<style scoped>
.programs-section {
  padding: 7rem 0;
  background: var(--earth);
  position: relative;
  overflow: hidden;
}

.programs-bg-decor {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 50% 40% at 90% 10%, rgba(197,160,74,0.07) 0%, transparent 55%),
    radial-gradient(ellipse 40% 50% at 5% 90%, rgba(197,160,74,0.05) 0%, transparent 50%);
  pointer-events: none;
}

.programs-header {
  margin-bottom: 3.5rem;
}

.programs-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.4rem;
}

.program-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: var(--radius);
  padding: 2.2rem;
  position: relative;
  overflow: hidden;
  cursor: default;
  transition: background var(--transition), transform var(--transition), border-color var(--transition);
}
.program-card:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(197,160,74,0.25);
  transform: translateY(-5px);
}
.program-card:hover .card-bar {
  width: 100%;
}

.card-bar {
  position: absolute; top: 0; left: 0;
  height: 2px;
  width: 0;
  background: linear-gradient(90deg, var(--gold), var(--harvest));
  transition: width 0.4s ease;
}

.card-num {
  font-family: var(--ff-serif);
  font-size: 2.6rem; font-weight: 900;
  color: rgba(255,255,255,0.04);
  position: absolute; top: 1rem; right: 1.5rem;
  line-height: 1;
  pointer-events: none;
}

.card-icon {
  color: var(--gold);
  margin-bottom: 1.25rem;
  display: flex;
}

.card-title {
  font-family: var(--ff-serif);
  font-size: 1.05rem; font-weight: 700;
  color: var(--white);
  margin-bottom: 0.7rem;
}

.card-desc {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.card-items {
  list-style: none;
  display: flex; flex-direction: column; gap: 0.35rem;
}
.card-items li {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.4);
  padding-left: 1.1rem;
  position: relative;
}
.card-items li::before {
  content: '—';
  position: absolute; left: 0;
  color: var(--gold);
}

@media (max-width: 1000px) {
  .programs-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .programs-grid { grid-template-columns: 1fr; }
}
</style>

