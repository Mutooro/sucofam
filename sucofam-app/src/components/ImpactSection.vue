<template>
  <section id="impact" class="impact-section">
    <div class="container">
      <div class="impact-header">
        <div class="section-tag" style="color:rgba(245,237,214,0.6)">Our Reach</div>
        <h2 class="section-title" style="color:var(--white)">
          Measurable <em>Impact</em> on the Ground
        </h2>
        <p class="section-desc" style="color:rgba(255,255,255,0.6)">
          Every program we run translates into real change at the farmer household level.
        </p>
      </div>

      <div class="impact-grid">
        <div
          v-for="(stat, i) in impactStats"
          :key="stat.number"
          class="impact-card reveal"
          :style="`transition-delay: ${i * 0.1}s`"
        >
          <div class="impact-number">{{ stat.number }}</div>
          <div class="impact-label">{{ stat.label }}</div>
          <div class="impact-detail">{{ stat.detail }}</div>
          <div class="impact-line" />
        </div>
      </div>

      <!-- CTA strip -->
      <div class="impact-cta reveal">
        <p>Join us in building a more equitable agricultural future for Uganda.</p>
        <button class="btn-primary" @click="$emit('scroll-to', 'contact')">
          Get Involved <ArrowRight :size="18" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { impactStats } from '../data/content.js'
defineEmits(['scroll-to'])
</script>


<style scoped>
.impact-section {
  padding: 7rem 0;
  background: var(--leaf);
  position: relative;
  overflow: hidden;
}
.impact-section::before {
  content: '';
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 80% 20%, rgba(197,160,74,0.09) 0%, transparent 55%),
    radial-gradient(ellipse 40% 60% at 10% 80%, rgba(197,160,74,0.06) 0%, transparent 50%);
  pointer-events: none;
}

.impact-header {
  margin-bottom: 3.5rem;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.impact-card {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius);
  padding: 2.5rem 2rem;
  position: relative;
  overflow: hidden;
  transition: background var(--transition), transform var(--transition);
}
.impact-card:hover {
  background: rgba(255,255,255,0.12);
  transform: translateY(-4px);
}

.impact-line {
  position: absolute; top: 0; left: 0;
  width: 100%; height: 2px;
  background: linear-gradient(90deg, var(--gold), transparent);
}

.impact-number {
  font-family: var(--ff-serif);
  font-size: 3.2rem; font-weight: 900;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 0.5rem;
}
.impact-label {
  font-size: 0.95rem; font-weight: 600;
  color: rgba(255,255,255,0.85);
  line-height: 1.4;
  margin-bottom: 0.4rem;
}
.impact-detail {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.02em;
}

/* CTA strip */
.impact-cta {
  display: flex; align-items: center; justify-content: space-between;
  gap: 2rem;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius);
  padding: 2rem 2.5rem;
  flex-wrap: wrap;
}
.impact-cta p {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.8);
  max-width: 480px;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .impact-grid { grid-template-columns: repeat(2, 1fr); }
  .impact-cta  { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 500px) {
  .impact-grid { grid-template-columns: 1fr; }
}
</style>
