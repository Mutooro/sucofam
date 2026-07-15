<template>
  <section class="home-programs">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-tag">Our Work</div>
        <h2 class="section-title">Our <em>Programs</em></h2>
        <div class="section-line" />
        <p class="section-desc">
          Three comprehensive programs transforming farming households from subsistence to sustainable livelihoods across the Rwenzori region.
        </p>
      </div>

      <div class="hp-grid">
        <router-link
          v-for="(prog, i) in programs"
          :key="prog.id"
          :to="{ name: 'programs', hash: `#${prog.id}` }"
          class="hp-card reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="hp-card-inner">
            <div class="hp-number">0{{ i + 1 }}</div>
            <div class="hp-icon-wrapper">
              <component :is="getIcon(prog.icon)" :size="28" />
            </div>
            <h3 class="hp-title">{{ prog.title }}</h3>
            <p class="hp-desc">{{ prog.desc }}</p>
            <div class="hp-meta">
              <span class="hp-count">
                <Layers :size="14" />
                {{ prog.sections.length }} Focus Areas
              </span>
              <span class="hp-link">
                Learn more <ArrowRight :size="14" />
              </span>
            </div>
          </div>
        </router-link>
      </div>

      <div class="hp-footer reveal">
        <router-link to="/programs" class="btn btn-outline">
          Explore All Programs <ArrowRight :size="16" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { CloudRain, ShoppingBag, Heart, ArrowRight, Layers, Settings } from 'lucide-vue-next'
import { programs } from '../data/content.js'

const iconMap = { CloudRain, ShoppingBag, Heart }
const getIcon = (name) => iconMap[name] || Settings
</script>

<style scoped>
.home-programs {
  padding: var(--section-pad) 0;
  background: var(--bg-soft);
}

.hp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.hp-card {
  display: block;
  text-decoration: none;
  color: inherit;
  background: var(--white);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.hp-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}

.hp-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.hp-card:hover::before {
  transform: scaleX(1);
}

.hp-card-inner {
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.hp-number {
  font-family: var(--ff-serif);
  font-size: 3.5rem;
  font-weight: 900;
  color: rgba(116, 161, 46, 0.1);
  line-height: 1;
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
}

.hp-icon-wrapper {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-sm);
  background: var(--bg-green);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  transition: all 0.3s ease;
}

.hp-card:hover .hp-icon-wrapper {
  background: var(--primary);
  color: var(--white);
}

.hp-title {
  font-family: var(--ff-serif);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.hp-desc {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.65;
  flex: 1;
  margin-bottom: 1.5rem;
}

.hp-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.hp-count {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hp-link {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--primary);
  transition: gap 0.2s ease;
}

.hp-card:hover .hp-link {
  gap: 0.6rem;
}

.hp-footer {
  text-align: center;
}

@media (max-width: 960px) {
  .hp-grid { grid-template-columns: repeat(2, 1fr); }
  .hp-card:last-child { grid-column: 1 / -1; max-width: 480px; margin: 0 auto; width: 100%; }
}

@media (max-width: 600px) {
  .hp-grid { grid-template-columns: 1fr; }
  .hp-card:last-child { grid-column: auto; max-width: none; }
}
</style>
