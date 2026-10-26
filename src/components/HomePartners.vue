<template>
  <section class="home-partners bg-soft">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-tag">Strategic Alliances</div>
        <h2 class="section-title">Trusted <em>Partnerships</em></h2>
        <div class="section-line" />
        <p class="section-desc">
          SUCOFAM collaborates with development agencies, agro-enterprises, and regional coalitions to build transparent value chains and sustainable livelihoods across Western Uganda.
        </p>
      </div>

      <!-- Partner Logo Marquee -->
      <div class="partners-marquee reveal">
        <div class="partners-track">
          <div
            v-for="(partner, i) in loopedPartners"
            :key="`${partner.name}-${i}`"
            class="partner-logo-box"
          >
            <img
              class="partner-logo"
              :src="partner.logo"
              :alt="partner.alt"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <!-- Partnership Scopes Grid -->
      <!-- <div class="partner-scopes-grid reveal reveal-delay-1">
        <div 
          v-for="partner in partnersData.slice(0, 4)" 
          :key="partner.name"
          class="partner-scope-card"
        >
          <div class="psc-top">
            <img :src="partner.logo" :alt="partner.name" class="psc-logo" />
            <div>
              <h4 class="psc-name">{{ partner.name }}</h4>
              <span class="psc-role">{{ partner.role }}</span>
            </div>
          </div>
          <p class="psc-desc">{{ partner.description }}</p>
          <div class="psc-project">
            <span class="psc-tag">Collaboration Scope:</span> {{ partner.project }}
          </div>
          <div class="psc-arrow">
            <ArrowRight :size="16" />
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { partnersData } from '../data/content.js'

// Duplicate the list so the marquee track can loop seamlessly (CSS scrolls -50%)
const loopedPartners = [...partnersData, ...partnersData]
</script>

<style scoped>
.home-partners {
  padding: var(--section-pad) 0;
}

.partners-marquee {
  overflow: hidden;
  margin-bottom: 3.5rem;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
}

.partners-track {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  width: max-content;
  animation: partners-scroll 28s linear infinite;
}

.partners-marquee:hover .partners-track,
.partners-marquee:focus-within .partners-track {
  animation-play-state: paused;
}

@keyframes partners-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.partner-logo-box {
  background: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 170px;
  transition: transform 0.3s ease;
}

.partner-logo-box:hover {
  transform: scale(1.05);
  border-color: var(--accent);
}

.partner-logo {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
}

/* Scopes Grid */
.partner-scopes-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.partner-scope-card {
  background: var(--white);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 1.75rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  transition: all var(--transition);
  position: relative;
}

.partner-scope-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.psc-top {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.psc-logo {
  width: 52px;
  height: 52px;
  object-fit: contain;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  padding: 0.25rem;
  background: #fbfbfb;
  flex-shrink: 0;
}

.psc-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.2rem;
}

.psc-role {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent);
}

.psc-desc {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1rem;
  flex: 1;
}

.psc-project {
  background: var(--bg-soft);
  padding: 0.6rem 0.85rem;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  color: var(--text-dark);
  line-height: 1.4;
  border-left: 2px solid var(--primary);
}

.psc-tag {
  font-weight: 700;
  color: var(--primary);
}

.psc-arrow {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  color: var(--accent);
  opacity: 0;
  transition: all 0.3s ease;
}

.partner-scope-card:hover .psc-arrow {
  opacity: 1;
  transform: translateX(4px);
}

@media (max-width: 1024px) {
  .partner-scopes-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .partner-scopes-grid {
    grid-template-columns: 1fr;
  }
  .partner-logo-box {
    width: 140px;
    height: 75px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .partners-track {
    animation: none;
  }
  .partners-marquee {
    overflow-x: auto;
  }
}
</style>
