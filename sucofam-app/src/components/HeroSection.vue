<template>
  <section id="hero" class="hero">
    <!-- Background layers -->
    <div class="hero-bg" />
    <div class="hero-grid-overlay" />

    <div class="hero-content container">
      <!-- Left column -->
      <div class="hero-left">
        <div class="hero-badge">
          <span class="badge-dot" />
          Established June 2024 · Kasese, Uganda
        </div>

        <h1 class="hero-title">
          Transforming <em>Farmers,</em><br />
          Building Resilient<br />
          Communities
        </h1>

        <p class="hero-desc">
          SUCOFAM empowers smallholder farmers — especially women and youth —
          across Uganda through the coffee, cocoa, and honey value chains.
          Sustainable livelihoods, not subsistence.
        </p>

        <div class="hero-actions">
          <button class="btn-primary" @click="scrollTo('programs')">
            Explore Programs <span class="arrow">→</span>
          </button>
          <button class="btn-outline" @click="scrollTo('contact')">
            Partner With Us
          </button>
        </div>

        <!-- Stats bar -->
        <div class="stats-bar">
          <div class="stat-item" v-for="stat in stats" :key="stat.label">
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Right column — visual -->
      <div class="hero-right">
        <div class="hero-ring">
          <div class="hero-ring-inner">
            <span class="hero-center-icon">☕</span>
          </div>
          <!-- orbit dots -->
          <div class="orbit-dot od-1">🍫</div>
          <div class="orbit-dot od-2">🍯</div>
          <div class="orbit-dot od-3">🌿</div>
        </div>

        <!-- Floating info cards -->
        <div class="float-card fc-top">
          <span class="fc-icon">🌱</span>
          <div>
            <div class="fc-value">50K+</div>
            <div class="fc-text">Trees Planted</div>
          </div>
        </div>
        <div class="float-card fc-bottom">
          <span class="fc-icon">🏆</span>
          <div>
            <div class="fc-value">Climate-Smart</div>
            <div class="fc-text">Certified Practices</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-hint" @click="scrollTo('about')">
      <div class="scroll-wheel" />
      <span>Scroll</span>
    </div>
  </section>
</template>

<script setup>
defineProps({
  scrollTo: { type: Function, required: true },
})

const stats = [
  { number: '200+',  label: 'Farmers Trained' },
  { number: '50K+',  label: 'Trees Planted'   },
  { number: '3',     label: 'Value Chains'     },
]
</script>

<style scoped>
.hero {
  min-height: 100vh;
  background: var(--forest);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.hero-bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 70% 60% at 65% 45%, rgba(197,160,74,0.12) 0%, transparent 55%),
    radial-gradient(ellipse 40% 70% at 5% 85%,  rgba(197,160,74,0.07) 0%, transparent 50%),
    linear-gradient(150deg, #0a2e18 0%, #0e3d23 50%, #071f14 100%);
}

.hero-grid-overlay {
  position: absolute; inset: 0;
  opacity: 0.04;
  background-image:
    linear-gradient(var(--gold) 1px, transparent 1px),
    linear-gradient(90deg, var(--gold) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hero-content {
  position: relative; z-index: 2;
  padding: 9rem 2rem 5rem;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 5rem;
  align-items: center;
}

/* Left */
.hero-badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: rgba(197,160,74,0.12);
  border: 1px solid rgba(197,160,74,0.3);
  color: var(--harvest);
  padding: 0.4rem 1.1rem;
  border-radius: 2px;
  font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 600;
  margin-bottom: 1.6rem;
}
.badge-dot {
  width: 6px; height: 6px;
  background: var(--gold); border-radius: 50%;
  animation: pulse 2s ease infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.5; transform: scale(0.85); }
}

.hero-title {
  font-family: var(--ff-serif);
  font-size: clamp(2.8rem, 5vw, 4.4rem);
  font-weight: 900; line-height: 1.06;
  color: var(--white);
  margin-bottom: 1.5rem;
}
.hero-title em { font-style: italic; color: var(--gold); }

.hero-desc {
  font-size: 1.05rem; line-height: 1.78;
  color: rgba(255,255,255,0.65);
  margin-bottom: 2.5rem;
  max-width: 480px;
}

.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3.5rem; }
.arrow { transition: transform 0.3s; }
.btn-primary:hover .arrow { transform: translateX(4px); }

/* Stats bar */
.stats-bar {
  display: flex; gap: 2.5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.08);
}
.stat-number {
  font-family: var(--ff-serif);
  font-size: 1.9rem; font-weight: 700;
  color: var(--gold);
}
.stat-label {
  font-size: 0.75rem; color: rgba(255,255,255,0.5);
  letter-spacing: 0.1em; text-transform: uppercase;
  margin-top: 0.2rem;
}

/* Right — ring visual */
.hero-right {
  position: relative;
  display: flex; align-items: center; justify-content: center;
}
.hero-ring {
  width: 380px; height: 380px;
  border-radius: 50%;
  border: 1px solid rgba(197,160,74,0.15);
  position: relative;
  display: flex; align-items: center; justify-content: center;
  animation: slowSpin 40s linear infinite;
}
@keyframes slowSpin { to { transform: rotate(360deg); } }
.hero-ring-inner {
  width: 220px; height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%, rgba(197,160,74,0.18), rgba(14,61,35,0.6));
  border: 1px solid rgba(197,160,74,0.2);
  display: flex; align-items: center; justify-content: center;
  animation: slowSpin 40s linear infinite reverse;
}
.hero-center-icon { font-size: 4.5rem; }

.orbit-dot {
  position: absolute;
  width: 48px; height: 48px;
  border-radius: 50%;
  background: rgba(197,160,74,0.15);
  border: 1px solid rgba(197,160,74,0.25);
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem;
  animation: slowSpin 40s linear infinite reverse;
}
.od-1 { top: -18px; left: 50%; transform: translateX(-50%); }
.od-2 { bottom: -18px; left: 50%; transform: translateX(-50%); }
.od-3 { left: -18px; top: 50%; transform: translateY(-50%); }

/* Floating cards */
.float-card {
  position: absolute;
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius);
  padding: 1rem 1.4rem;
  display: flex; align-items: center; gap: 0.8rem;
  min-width: 160px;
}
.fc-top  { top: 4%; right: -6%; }
.fc-bottom { bottom: 8%; left: -8%; }
.fc-icon { font-size: 1.6rem; }
.fc-value { font-family: var(--ff-serif); font-size: 1.1rem; font-weight: 700; color: var(--white); }
.fc-text  { font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-top: 0.1rem; }

/* Scroll hint */
.scroll-hint {
  position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
  cursor: pointer; z-index: 3;
  color: rgba(255,255,255,0.4);
  font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase;
  transition: color 0.3s;
}
.scroll-hint:hover { color: var(--gold); }
.scroll-wheel {
  width: 22px; height: 34px;
  border: 1.5px solid currentColor;
  border-radius: 12px;
  position: relative;
}
.scroll-wheel::before {
  content: '';
  position: absolute; top: 5px; left: 50%; transform: translateX(-50%);
  width: 3px; height: 7px;
  background: currentColor; border-radius: 2px;
  animation: scrollAnim 2s ease infinite;
}
@keyframes scrollAnim {
  0%   { opacity: 1; transform: translateX(-50%) translateY(0); }
  80%  { opacity: 0; transform: translateX(-50%) translateY(10px); }
  100% { opacity: 0; transform: translateX(-50%) translateY(0); }
}

@media (max-width: 900px) {
  .hero-content { grid-template-columns: 1fr; gap: 3rem; padding: 8rem 1.5rem 4rem; }
  .hero-right { display: none; }
  .stats-bar { gap: 1.5rem; }
}
@media (max-width: 500px) {
  .stats-bar { flex-direction: column; gap: 1rem; }
}
</style>
