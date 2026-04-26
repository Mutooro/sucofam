<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-grid">
        <!-- Visual column -->
        <div class="about-visual reveal">
          <div class="visual-card">
            <div class="vc-accent">🌱</div>
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
            <p>
              SUCOFAM is a national agricultural development organization committed to
              transforming farming households across Uganda. Headquartered in Kasese and
              operating nationwide, we address systemic challenges that keep smallholder
              farmers — especially women and youth — trapped in low-income systems.
            </p>
            <p>
              We take a holistic approach: combining agronomic training, market linkages,
              financial inclusion, gender equity, and household well-being into one
              integrated farmer empowerment model.
            </p>
            <p>
              Our vision is a Uganda where farmers adopt improved practices, produce
              high-quality market-compliant products, and participate equitably in
              transparent value chains — free from exploitation.
            </p>
          </div>

          <!-- Core value chips -->
          <div class="value-chips reveal reveal-delay-2">
            <span v-for="val in coreValues" :key="val" class="chip">{{ val }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { coreValues } from '../data/content.js'
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
  background: radial-gradient(circle, rgba(197,160,74,0.06) 0%, transparent 70%);
  pointer-events: none;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 5rem;
  align-items: start;
}

/* Visual column */
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
  font-size: 1.6rem;
  z-index: 2;
}
.vc-decoration {
  position: absolute; bottom: -40px; left: -40px;
  width: 160px; height: 160px;
  border-radius: 50%;
  border: 2px solid rgba(197,160,74,0.18);
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

/* Text column */
.about-paragraphs p {
  color: var(--text-muted);
  line-height: 1.82;
  margin-bottom: 1.1rem;
  font-size: 0.97rem;
}

.value-chips {
  display: flex; flex-wrap: wrap; gap: 0.7rem;
  margin-top: 2rem;
}
.chip {
  background: var(--white);
  color: var(--forest);
  padding: 0.45rem 1.1rem;
  border-radius: 2px;
  font-size: 0.8rem; font-weight: 600;
  border-left: 3px solid var(--gold);
  letter-spacing: 0.02em;
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s, box-shadow 0.25s;
}
.chip:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
}
</style>
