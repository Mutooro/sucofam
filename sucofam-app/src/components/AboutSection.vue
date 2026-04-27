<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-grid">
        <!-- Visual column -->
        <div class="about-visual reveal">
          <div class="visual-card">
            <div class="vc-accent">
              <Sprout :size="32" />
            </div>
            <blockquote class="mission-quote">
              "To empower farmers through capacity building in good agronomic practices
              while strengthening access to market information and structured markets —
              enabling fair, sustainable incomes."
            </blockquote>
            <p class="quote-attr">— SUCOFAM Mission Statement</p>

            <div class="vc-decoration" />
          </div>

          <!-- Stat pill -->
          <div class="stat-pill reveal reveal-delay-2">
            <span class="pill-num">Est. 2024</span>
            <span class="pill-sep">·</span>
            <span class="pill-label">Kasese, Uganda</span>
          </div>
        </div>

        <!-- Text column -->
        <div class="about-text">
          <div class="section-tag">Who We Are</div>
          <h2 class="section-title">
            A Movement for<br /><em>Agricultural</em> Transformation
          </h2>

          <div class="about-paragraphs reveal reveal-delay-1">
            <div class="vm-box">
              <h3>Our Vision</h3>
              <p>{{ vision }}</p>
            </div>
            <div class="vm-box">
              <h3>Our Mission</h3>
              <p>{{ mission }}</p>
            </div>
          </div>

          <!-- Core values -->
          <div class="value-grid reveal reveal-delay-2">
            <div v-for="val in coreValues" :key="val.title" class="value-item">
              <span class="value-title">{{ val.title }}</span>
              <p class="value-desc">{{ val.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Sprout } from 'lucide-vue-next'
import { coreValues, vision, mission } from '../data/content.js'
</script>

<style scoped>
.about-section {
  padding: 7rem 0;
  background: var(--mist);
  position: relative;
  overflow: hidden;
}

.about-section::before {
  content: '';
  position: absolute;
  bottom: -120px; right: -120px;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(200, 137, 26, 0.06) 0%, transparent 70%);
  pointer-events: none;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 5rem;
  align-items: start;
}

.about-visual { position: relative; }
.visual-card {
  background: var(--forest);
  border-radius: 6px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
}

.vc-accent {
  position: absolute; top: -16px; right: -16px;
  width: 72px; height: 72px;
  background: var(--gold);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--charcoal);
  z-index: 2;
}

.vc-decoration {
  position: absolute; bottom: -40px; left: -40px;
  width: 160px; height: 160px;
  border-radius: 50%;
  border: 2px solid rgba(200, 137, 26, 0.18);
  pointer-events: none;
}

.mission-quote {
  font-family: var(--ff-serif);
  font-size: 1.1rem; font-style: italic;
  color: rgba(255,255,255,0.9);
  line-height: 1.75;
  margin-bottom: 1.2rem;
}

.quote-attr {
  color: var(--gold);
  font-size: 0.82rem; font-weight: 600;
  letter-spacing: 0.05em;
}

.stat-pill {
  display: inline-flex; align-items: center; gap: 0.6rem;
  background: var(--white);
  border: 1px solid rgba(14,61,35,0.1);
  border-radius: 30px;
  padding: 0.55rem 1.2rem;
  margin-top: 1.5rem;
  box-shadow: var(--shadow-sm);
}

.pill-num  { font-weight: 700; font-size: 0.88rem; color: var(--forest); }
.pill-sep  { color: var(--text-muted); }
.pill-label{ font-size: 0.82rem; color: var(--text-muted); }

.vm-box {
  margin-bottom: 2rem;
}
.vm-box h3 {
  font-family: var(--ff-serif);
  font-size: 1.2rem;
  color: var(--forest);
  margin-bottom: 0.5rem;
  border-left: 3px solid var(--gold);
  padding-left: 0.8rem;
}
.vm-box p {
  color: var(--text-muted);
  line-height: 1.7;
  font-size: 0.95rem;
}

.value-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
  margin-top: 2.5rem;
}

.value-item {
  background: var(--white);
  padding: 1.2rem;
  border-radius: 4px;
  border-left: 4px solid var(--gold);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s;
}

.value-item:hover {
  transform: translateX(5px);
}

.value-title {
  display: block;
  font-weight: 800;
  font-size: 0.9rem;
  color: var(--charcoal);
  margin-bottom: 0.4rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.value-desc {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
}
</style>

