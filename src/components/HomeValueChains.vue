<template>
  <section class="home-value-chains">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-tag">What We Do</div>
        <h2 class="section-title">Three Value Chains, <em>One Mission</em></h2>
        <div class="section-line" />
        <p class="section-desc">
          SUCOFAM organizes and equips smallholder farmers across three core value chains
          turning raw harvests into fair, sustainable incomes.
        </p>
      </div>

      <div class="vc-grid">
        <router-link
          v-for="(item, i) in valueChains"
          :key="item.id"
          :to="{ name: 'products', hash: `#${item.id}` }"
          class="vc-card reveal"
          :class="`reveal-delay-${i + 1}`"
          :style="{ '--vc-gradient': item.gradient }"
        >
          <div class="vc-card-face">
            <div class="vc-icon">
              <component :is="getIcon(item.icon)" :size="30" />
            </div>
            <h3 class="vc-title">{{ item.name.replace('SUCOFAM ', '') }}</h3>
            <p class="vc-desc">{{ item.desc }}</p>
          </div>

          <div class="vc-reveal">
            <div class="vc-reveal-inner">
              <span class="vc-reveal-tag">Quick Fact</span>
              <p class="vc-reveal-fact">{{ item.fact }}</p>
              <span class="vc-reveal-link">
                Explore {{ item.name.replace('SUCOFAM ', '') }} <ArrowRight :size="14" />
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Coffee, Bean, Droplets, ArrowRight } from 'lucide-vue-next'
import { products } from '../data/content.js'

const iconMap = { Coffee, Bean, Droplets }
const getIcon = (name) => iconMap[name] || Coffee

// Reuse the existing value-chain data, adding a short, honest quick-fact for the hover reveal
const facts = {
  coffee: 'Organized farmer groups process and trace every bag, connecting growers directly to premium, structured markets.',
  cocoa: 'A fast-growing chain built around emerging farmers and youth-led enterprises with strong export potential.',
  honey: '100+ bee hives sited so far, powered by women- and youth-led beekeeping groups across the Rwenzori region.'
}

const valueChains = products.map((p) => ({ ...p, fact: facts[p.id] || p.desc }))
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
}

.vc-card-face {
  position: relative;
  z-index: 1;
  height: 100%;
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  transition: opacity 0.35s ease, transform 0.35s ease;
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
  color: rgba(255, 255, 255, 0.85);
  max-width: 30ch;
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
    rgba(0, 0, 0, 0.78) 0%,
    rgba(0, 0, 0, 0.35) 55%,
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
  font-size: 0.95rem;
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

.vc-card:hover .vc-card-face,
.vc-card:focus-visible .vc-card-face {
  opacity: 0.15;
  transform: scale(0.98);
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
  /* On touch devices, keep the fact visible without relying on hover */
  .vc-reveal {
    position: static;
    opacity: 1;
    transform: none;
    background: rgba(0, 0, 0, 0.25);
    pointer-events: auto;
  }
}
</style>
