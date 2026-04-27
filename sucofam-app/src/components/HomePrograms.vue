<template>
  <section class="home-programs">
    <div class="container">
      <div class="hp-header reveal">
        <div class="section-tag">Empowerment</div>
        <h2 class="section-title">Our <em>Program</em> Areas</h2>
        <p class="section-desc">
          Holistic interventions designed to transform farming households from subsistence to sustainable livelihoods.
        </p>
      </div>

      <div class="hp-grid">
        <div 
          v-for="(prog, i) in programs.slice(0, 4)" 
          :key="prog.title" 
          class="hp-card reveal"
          :style="`transition-delay: ${i * 0.1}s`"
        >
          <div class="hp-icon">{{ prog.icon }}</div>
          <h3 class="hp-title">{{ prog.title }}</h3>
          <p class="hp-desc">{{ prog.desc }}</p>
        </div>
      </div>

      <div class="hp-footer reveal">
        <router-link to="/programs" class="btn-primary">Explore All 10 Programs →</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { programs } from '../data/content.js'
</script>

<style scoped>
.home-programs {
  padding: 7rem 0;
  background: var(--main-bg);
}

.hp-header {
  text-align: center;
  margin-bottom: 4rem;
}

.hp-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

.hp-card {
  padding: 2.5rem;
  background: var(--white);
  border-radius: 4px;
  border: 1px solid rgba(14,61,35,0.05);
  transition: transform 0.3s, border-color 0.3s;
}
.hp-card:hover {
  transform: translateY(-5px);
  border-color: var(--gold);
}

.hp-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.hp-title {
  font-family: var(--ff-serif);
  font-size: 1.2rem;
  color: var(--charcoal);
  margin-bottom: 1rem;
}

.hp-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.hp-footer {
  text-align: center;
}

@media (max-width: 1000px) {
  .hp-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .hp-grid { grid-template-columns: 1fr; }
}
</style>
