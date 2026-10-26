<template>
  <div class="page-view">
    <div class="page-hero">
      <div class="page-hero-bg">
        <img :src="heroBg" alt="SUCOFAM Value Chains" />
        <div class="page-hero-overlay" />
      </div>
      <div class="page-hero-content container">
        <div class="section-tag white reveal">Market-Driven Agribusiness</div>
        <h1 class="page-hero-title reveal reveal-delay-1">Our Value Chains</h1>
        <p class="page-hero-desc reveal reveal-delay-2">
          High-quality, fully traceable Coffee, Cocoa, and Honey produced by organized smallholders in the Rwenzori region.
        </p>
      </div>
    </div>

    <!-- Quick Navigation Anchor Tabs -->
    <section class="vc-nav-section bg-soft">
      <div class="container">
        <div class="vc-anchors reveal">
          <a href="#coffee" class="vc-anchor-btn">
            <Coffee :size="18" /> Rwenzori Coffee
          </a>
          <a href="#cocoa" class="vc-anchor-btn">
            <Bean :size="18" /> Organic Cocoa
          </a>
          <a href="#honey" class="vc-anchor-btn">
            <Droplets :size="18" /> Pure Honey
          </a>
          <a href="#nexuscafe" class="vc-anchor-btn accent">
            <Sparkles :size="18" /> NexusCafe Enterprise
          </a>
        </div>
      </div>
    </section>

    <!-- Comprehensive Value Chain Profiles -->
    <section class="value-chains-detail-section bg-white section-padding">
      <div class="container">
        <div class="vc-blocks-wrapper">
          
          <article 
            v-for="(vc, index) in valueChains" 
            :key="vc.id" 
            :id="vc.id"
            class="vc-detail-card reveal"
            :class="{ 'layout-reverse': index % 2 === 1 }"
          >
            <div class="vc-image-col">
              <div class="vc-image-wrapper">
                <img :src="vc.image" :alt="vc.name" loading="lazy" />
                <div class="vc-badge" :style="{ background: vc.gradient }">
                  <component :is="getIcon(vc.icon)" :size="20" />
                  <span>{{ vc.tag }}</span>
                </div>
              </div>

              <!-- Quick Features Box -->
              <div class="vc-features-box">
                <h4>Core Advantages</h4>
                <ul>
                  <li v-for="feat in vc.features" :key="feat">
                    <CheckCircle2 :size="16" class="check-icon" />
                    <span>{{ feat }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="vc-info-col">
              <h2 class="vc-name">{{ vc.name }}</h2>
              <p class="vc-overview">{{ vc.overview }}</p>

              <!-- Technical Specifications Table -->
              <div class="vc-specs-container">
                <h3 class="specs-title">Buyer &amp; Origin Specifications</h3>
                <div class="specs-table">
                  <div 
                    v-for="spec in vc.specifications" 
                    :key="spec.label" 
                    class="spec-row"
                  >
                    <span class="spec-label">{{ spec.label }}</span>
                    <span class="spec-val">{{ spec.value }}</span>
                  </div>
                </div>
              </div>

              <!-- Commercial Inquiry CTA -->
              <div class="vc-action-box">
                <router-link to="/contact" class="btn btn-accent">
                  Request Samples &amp; Pricing <ArrowRight :size="16" />
                </router-link>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>

    <!-- NexusCafe Social Enterprise Spotlight -->
    <section id="nexuscafe" class="nexus-section bg-soft section-padding">
      <div class="container">
        <div class="nexus-card reveal">
          <div class="nexus-grid">
            <div class="nexus-content">
              <span class="nexus-tag">{{ nexusCafe.tagline }}</span>
              <h2 class="nexus-title">{{ nexusCafe.title }}</h2>
              <div class="section-line" />
              <p class="nexus-desc">{{ nexusCafe.desc }}</p>

              <div class="nexus-pillars">
                <div 
                  v-for="pillar in nexusCafe.pillars" 
                  :key="pillar.title" 
                  class="pillar-item"
                >
                  <div class="pillar-bullet"></div>
                  <div>
                    <h4>{{ pillar.title }}</h4>
                    <p>{{ pillar.desc }}</p>
                  </div>
                </div>
              </div>

              <div class="nexus-actions">
                <router-link to="/contact" class="btn btn-accent">
                  Partner with NexusCafe <ArrowRight :size="16" />
                </router-link>
                <a href="mailto:info@sucofam.org" class="btn btn-outline">
                  Commercial Orders
                </a>
              </div>
            </div>

            <div class="nexus-visual">
              <div class="nexus-image-box">
                <img :src="smellCoffeeImg" alt="NexusCafe Coffee Quality Cupping and Roasting" />
                <div class="nexus-badge-float">
                  <span class="badge-accent">Rwenzori Single Origin</span>
                  <span class="badge-sub">Roasted &amp; Packaged in Uganda</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Downloadable Product Sheets / Inquiry CTA -->
    <section class="inquiry-section bg-white section-padding-sm">
      <div class="container">
        <div class="inquiry-banner reveal">
          <div class="inquiry-text">
            <h3>Looking for Institutional Sourcing or Forward Contracts?</h3>
            <p>
              SUCOFAM works directly with international green coffee importers, cocoa off-takers, and domestic retail networks offering transparent pricing and EUDR-compliant farm traceability.
            </p>
          </div>
          <router-link to="/contact" class="btn btn-accent">
            Connect with Commercial Desk <ArrowRight :size="16" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { usePageSeo } from '../composables/usePageSeo.js'
import { Coffee, Bean, Droplets, Sparkles, CheckCircle2, ArrowRight } from 'lucide-vue-next'
import { valueChains, nexusCafe } from '../data/content.js'
import heroBg from '@/assets/img/coffee_bg.jpeg'
import smellCoffeeImg from '@/assets/img/smell_coffee.jpg'

usePageSeo({
  title: 'Coffee, Cocoa & Honey Value Chains | SUCOFAM Uganda',
  description:
    "Explore SUCOFAM's traceable Rwenzori Mountain Coffee, Organic Cocoa, Pure Multi-floral Honey, and the NexusCafe domestic value-addition initiative in Uganda.",
  path: '/value-chains',
  breadcrumbs: [{ name: 'Value Chains', path: '/value-chains' }]
})

const iconMap = { Coffee, Bean, Droplets }
const getIcon = (name) => iconMap[name] || Coffee
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
  background: var(--primary-deep);
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
  max-width: 750px;
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
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
}

/* Anchor Tabs */
.vc-nav-section {
  padding: 1.25rem 0;
  border-bottom: 1px solid var(--border);
}

.vc-anchors {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.vc-anchor-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  background: var(--white);
  color: var(--text-dark);
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  font-size: 0.88rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.vc-anchor-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
  transform: translateY(-2px);
}

.vc-anchor-btn.accent {
  background: var(--bg-pink);
  color: var(--accent);
  border-color: var(--accent);
}

/* Detail Cards */
.vc-blocks-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.vc-detail-card {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 3.5rem;
  background: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  padding: 3rem;
  box-shadow: var(--shadow-sm);
  align-items: start;
}

.vc-detail-card.layout-reverse {
  grid-template-columns: 1.3fr 1fr;
}

.vc-detail-card.layout-reverse .vc-image-col {
  order: 2;
}

.vc-detail-card.layout-reverse .vc-info-col {
  order: 1;
}

.vc-image-wrapper {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  aspect-ratio: 4 / 3;
  box-shadow: var(--shadow-md);
  margin-bottom: 1.5rem;
}

.vc-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.vc-image-wrapper:hover img {
  transform: scale(1.05);
}

.vc-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: var(--white);
  padding: 0.4rem 0.9rem;
  border-radius: var(--radius-full);
  font-size: 0.78rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  box-shadow: var(--shadow-md);
}

.vc-features-box {
  background: var(--bg-soft);
  border-radius: var(--radius-sm);
  padding: 1.5rem;
  border-left: 3px solid var(--primary);
}

.vc-features-box h4 {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.vc-features-box ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.vc-features-box li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-muted);
}

.check-icon {
  color: var(--primary);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.vc-name {
  font-family: var(--ff-serif);
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.vc-overview {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-body);
  margin-bottom: 1.75rem;
}

.vc-specs-container {
  background: #fbfbfb;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.specs-title {
  font-size: 0.95rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--primary);
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
}

.specs-table {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.spec-row {
  display: grid;
  grid-template-columns: 1.2fr 1.8fr;
  font-size: 0.88rem;
  padding: 0.35rem 0;
  border-bottom: 1px dashed rgba(0,0,0,0.06);
}

.spec-row:last-child {
  border-bottom: none;
}

.spec-label {
  font-weight: 600;
  color: var(--text-dark);
}

.spec-val {
  color: var(--text-muted);
}

.vc-action-box {
  display: flex;
  gap: 1rem;
}

/* NexusCafe Section */
.nexus-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.nexus-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  padding: 3.5rem;
  align-items: center;
}

.nexus-tag {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  background: var(--bg-pink);
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
  margin-bottom: 1rem;
}

.nexus-title {
  font-family: var(--ff-serif);
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.nexus-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.nexus-pillars {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.pillar-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.pillar-bullet {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  margin-top: 0.5rem;
  flex-shrink: 0;
}

.pillar-item h4 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

.pillar-item p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.nexus-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.nexus-image-box {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.nexus-image-box img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
}

.nexus-badge-float {
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 1rem 1.25rem;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-md);
  border-left: 4px solid var(--accent);
}

.badge-accent {
  display: block;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-dark);
}

.badge-sub {
  display: block;
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 600;
}

/* Inquiry Banner */
.inquiry-banner {
  background: linear-gradient(135deg, var(--bg-green) 0%, var(--white) 100%);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.inquiry-text h3 {
  font-family: var(--ff-serif);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.inquiry-text p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
  max-width: 650px;
}

@media (max-width: 960px) {
  .vc-detail-card,
  .vc-detail-card.layout-reverse {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 2rem;
  }
  .vc-detail-card.layout-reverse .vc-image-col {
    order: 1;
  }
  .vc-detail-card.layout-reverse .vc-info-col {
    order: 2;
  }
  .nexus-grid {
    grid-template-columns: 1fr;
    padding: 2rem;
  }
  .inquiry-banner {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 600px) {
  .spec-row {
    grid-template-columns: 1fr;
    gap: 0.2rem;
  }
  .vc-action-box {
    flex-direction: column;
  }
}
</style>
