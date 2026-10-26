<template>
  <section class="home-value-chains">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-tag">Agribusiness Pathways</div>
        <h2 class="section-title">Three Value Chains, <em>One Mission</em></h2>
        <div class="section-line" />
        <p class="section-desc">
          SUCOFAM organizes and equips smallholder farmers across three core value chains in Western Uganda, turning raw harvests into fair, sustainable incomes.
        </p>
      </div>

      <div class="vc-grid">
        <router-link
          v-for="(item, i) in valueChainsList"
          :key="item.id"
          :to="{ name: 'value-chains', hash: `#${item.id}` }"
          class="vc-card reveal"
          :class="`reveal-delay-${i + 1}`"
          :style="{ '--vc-gradient': item.gradient }"
        >
          <div class="vc-card-face">
            <div class="vc-icon">
              <component :is="getIcon(item.icon)" :size="30" />
            </div>
            <h3 class="vc-title">{{ item.name.replace('SUCOFAM ', '').replace('Rwenzori ', '').replace('Pure ', '') }}</h3>
            <p class="vc-desc">{{ item.desc }}</p>
            <div class="vc-arrow">
              <ArrowRight :size="20" />
            </div>
          </div>

          <div class="vc-reveal">
            <div class="vc-reveal-inner">
              <span class="vc-reveal-tag">Origin Specs</span>
              <p class="vc-reveal-fact">{{ item.fact }}</p>
              <span class="vc-reveal-link">
                Explore {{ item.name }} <ArrowRight :size="14" />
              </span>
            </div>
          </div>
        </router-link>
      </div>

      <!-- NexusCafe Enterprise Teaser Strip -->
      <div class="nexus-teaser-strip reveal reveal-delay-3">
        <div class="nts-content">
          <div class="nts-badge">
            <Sparkles :size="16" /> Domestic Value Addition
          </div>
          <h3>NexusCafe Initiative: From Field to Cup</h3>
          <p>
            Experience our specialty single-origin Rwenzori coffee roasted, packaged, and distributed locally in partnership with Wakanda Coffee.
          </p>
        </div>
        <router-link :to="{ name: 'value-chains', hash: '#nexuscafe' }" class="btn btn-accent">
          Discover NexusCafe <ArrowRight :size="16" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Coffee, Bean, Droplets, Sparkles, ArrowRight } from 'lucide-vue-next'
import { valueChains } from '../data/content.js'

const iconMap = { Coffee, Bean, Droplets }
const getIcon = (name) => iconMap[name] || Coffee

const facts = {
  coffee: 'Grown at 1,200m–2,200m MASL on Mt. Rwenzori. Fully washed & honey processed with EUDR plot-level traceability.',
  cocoa: 'Ethically harvested in agroforestry systems with 6-day tiered box fermentation for premium brown bean grade.',
  honey: '100+ modern hives sited across women & youth apiaries. 100% cold-extracted pure raw honey.'
}

const valueChainsList = valueChains.map((p) => ({ ...p, fact: facts[p.id] || p.desc }))
</script>

<style scoped>
.home-value-chains {
  padding: var(--section-pad) 0;
  background: var(--bg);
}

.vc-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.vc-card {
  position: relative;
  display: block;
  text-decoration: none;
  color: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  min-height: 320px;
  background: var(--vc-gradient);
  isolation: isolate;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
}

.vc-card-face {
  position: relative;
  z-index: 1;
  height: 100%;
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  transition: opacity var(--transition), transform var(--transition);
}

.vc-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-full);
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(6px);
}

.vc-title {
  font-family: var(--ff-serif);
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.vc-desc {
  font-size: 0.95rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.88);
}

.vc-arrow {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  color: var(--white);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.vc-card:hover .vc-arrow {
  opacity: 1;
  transform: translateX(4px);
}

/* Hover-reveal panel */
.vc-reveal {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.45) 55%,
    rgba(0, 0, 0, 0) 100%
  );
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.35s ease, transform 0.35s ease;
  pointer-events: none;
}

.vc-reveal-inner {
  padding: 2rem;
}

.vc-reveal-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold-light);
  margin-bottom: 0.6rem;
}

.vc-reveal-fact {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--white);
  margin-bottom: 1.1rem;
}

.vc-reveal-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--white);
}

.vc-card:hover .vc-reveal,
.vc-card:focus-visible .vc-reveal {
  opacity: 1;
  transform: translateY(0);
}

.vc-card:hover {
  transform: translateY(-6px);
}

.vc-card:hover .vc-card-face,
.vc-card:focus-visible .vc-card-face {
  opacity: 0.15;
  transform: scale(0.98);
}

/* Nexus Teaser */
.nexus-teaser-strip {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  box-shadow: var(--shadow-sm);
}

.nts-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  background: var(--bg-pink);
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  margin-bottom: 0.5rem;
}

.nts-content h3 {
  font-family: var(--ff-serif);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.35rem;
}

.nts-content p {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.6;
  max-width: 650px;
}

@media (max-width: 900px) {
  .vc-grid {
    grid-template-columns: 1fr;
  }
  .vc-card {
    min-height: auto;
  }
  .vc-card-face {
    height: auto;
    padding-bottom: 1rem;
  }
  .vc-reveal {
    position: static;
    opacity: 1;
    transform: none;
    background: rgba(0, 0, 0, 0.25);
    pointer-events: auto;
  }
  .nexus-teaser-strip {
    flex-direction: column;
    text-align: center;
  }
}
</style>
