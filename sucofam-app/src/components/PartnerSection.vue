<template>
  <section id="partner" class="partner-section">
    <div class="container">
      <div class="partner-header reveal">
        <div class="section-tag">Collaboration</div>
        <h2 class="section-title">Why Partner With <em>SUCOFAM?</em></h2>
        <p class="section-desc">
          Building scalable, inclusive, and market-oriented solutions that unlock sustainable livelihoods across Uganda.
        </p>
      </div>

      <div class="partner-grid">
        <div 
          v-for="(item, i) in whyPartner" 
          :key="item.title" 
          class="partner-card reveal"
          :style="`transition-delay: ${i * 0.1}s`"
        >
          <div class="pc-icon">✓</div>
          <div class="pc-content">
            <h3 class="pc-title">{{ item.title }}</h3>
            <p class="pc-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { whyPartner } from '../data/content.js'
</script>

<style scoped>
.partner-section {
  padding: 7rem 0;
  background: var(--white);
}

.partner-header {
  margin-bottom: 4rem;
}

.partner-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.partner-card {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--mist);
  border-radius: 6px;
  border: 1px solid rgba(14,61,35,0.05);
  transition: transform 0.3s, border-color 0.3s;
}
.partner-card:hover {
  transform: translateY(-5px);
  border-color: var(--gold);
}

.pc-icon {
  width: 42px; height: 42px;
  background: var(--forest);
  color: var(--gold);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 900;
  flex-shrink: 0;
}

.pc-title {
  font-family: var(--ff-serif);
  font-size: 1.25rem;
  color: var(--charcoal);
  margin-bottom: 0.5rem;
}

.pc-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 900px) {
  .partner-grid { grid-template-columns: 1fr; }
}
</style>
