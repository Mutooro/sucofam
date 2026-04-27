<template>
  <div class="page-view">
    <div class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1920" alt="Impact" />
        <div class="page-hero-overlay" />
      </div>
      <div class="page-hero-content container">
        <div class="section-tag white reveal">Our Results</div>
        <h1 class="page-hero-title reveal reveal-delay-1">Our Impact</h1>
        <p class="page-hero-desc reveal reveal-delay-2">
          Measurable improvements in livelihoods, climate action, and community resilience.
        </p>
      </div>
    </div>

    <section class="impact-section bg-white section-padding">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">By The Numbers</div>
          <h2 class="section-title">Impact <em>Statistics</em></h2>
          <div class="section-line" />
        </div>

        <div class="stats-grid">
          <div 
            v-for="(stat, i) in impactStats" 
            :key="stat.label"
            class="stat-card reveal"
            :class="`reveal-delay-${i}`"
          >
            <div class="stat-icon">
              <component :is="getIcon(i)" :size="36" />
            </div>
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
            <div class="stat-detail">{{ stat.detail }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Partner -->
    <section class="why-section bg-soft section-padding">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Collaboration</div>
          <h2 class="section-title">Why <em>Partner</em> With Us</h2>
          <div class="section-line" />
        </div>

        <div class="why-grid">
          <div 
            v-for="(item, i) in whyPartner" 
            :key="item.title"
            class="why-card reveal"
            :class="`reveal-delay-${i % 3}`"
          >
            <div class="why-num">{{ i + 1 }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Users, TreePine, TrendingUp, MapPin, ArrowRight } from 'lucide-vue-next'
import { impactStats, whyPartner } from '../data/content.js'

const icons = [Users, TreePine, TrendingUp, MapPin]
const getIcon = (i) => icons[i] || Users
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.stat-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 2.5rem 1.5rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.stat-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--bg-pink);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
}

.stat-number {
  font-family: var(--ff-serif);
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-dark);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

.stat-detail {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.why-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.why-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.why-num {
  font-family: var(--ff-serif);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent);
  opacity: 0.2;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.why-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.why-card p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-muted);
}

@media (max-width: 900px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .why-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .stats-grid { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: 1fr; }
}
</style>
