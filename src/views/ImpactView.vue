<template>
  <div class="page-view">
    <div class="page-hero">
      <div class="page-hero-bg">
        <img :src="heroBg" alt="SUCOFAM Impact in Uganda" />
        <div class="page-hero-overlay" />
      </div>
      <div class="page-hero-content container">
        <div class="section-tag white reveal">Verified Results</div>
        <h1 class="page-hero-title reveal reveal-delay-1">Our Impact &amp; Reach</h1>
        <p class="page-hero-desc reveal reveal-delay-2">
          Measurable livelihood transformations, ecological regeneration, and cooperative strengthening across Western Uganda.
        </p>
      </div>
    </div>

    <!-- Impact Numbers Section -->
    <section class="impact-section bg-white section-padding">
      <div class="container">
        <div class="section-header reveal">
          <div class="benchmark-badge">
            <Calendar :size="14" /> Measurement Benchmark: {{ impactMethodology.asOfDate }}
          </div>
          <h2 class="section-title">Impact <em>by the Numbers</em></h2>
          <div class="section-line" />
          <p class="section-desc">
            Our data reflects verified milestones across our 5 contiguous operational districts in Western Uganda.
          </p>
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

    <!-- Methodology & Data Integrity Section -->
    <section class="methodology-section bg-soft section-padding">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Rigorous Standards</div>
          <h2 class="section-title">Data Integrity &amp; <em>Methodology</em></h2>
          <div class="section-line" />
          <p class="section-desc">
            How we measure, verify, and track farmer numbers, agroforestry survival, and enterprise outcomes.
          </p>
        </div>

        <div class="methodology-grid">
          <div 
            v-for="(item, i) in impactMethodology.principles" 
            :key="item.title"
            class="method-card reveal"
            :class="`reveal-delay-${i}`"
          >
            <div class="method-num">0{{ i + 1 }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reports & Due Diligence Briefs -->
    <section class="reports-section bg-white section-padding">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Publications &amp; Learning</div>
          <h2 class="section-title">Reports &amp; <em>Briefs</em></h2>
          <div class="section-line" />
          <p class="section-desc">
            Access our programmatic summaries and baseline reports designed for institutional partners and researchers.
          </p>
        </div>

        <div class="reports-grid">
          <div class="report-card reveal">
            <div class="report-icon"><FileText :size="32" /></div>
            <div class="report-info">
              <span class="report-tag">Annual Overview</span>
              <h4>SUCOFAM Annual Progress Brief (2025/2026)</h4>
              <p>Comprehensive breakdown of farmer outreach, value chain volumes, and cooperative dividend metrics.</p>
              <router-link to="/contact" class="report-link">
                Request Report <ArrowRight :size="14" />
              </router-link>
            </div>
          </div>

          <div class="report-card reveal reveal-delay-1">
            <div class="report-icon"><TreePine :size="32" /></div>
            <div class="report-info">
              <span class="report-tag">Climate Action</span>
              <h4>Rwenzori Agroforestry &amp; Watershed Survey</h4>
              <p>Survival rates, species diversity, and carbon sequestration modeling across 50,000+ planted shade trees.</p>
              <router-link to="/contact" class="report-link">
                Request Report <ArrowRight :size="14" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Partner -->
    <section class="why-section bg-soft section-padding">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Value Proposition</div>
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
            <div class="why-num">0{{ i + 1 }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partner CTA -->
    <section class="partner-cta bg-white section-padding-sm">
      <div class="container">
        <div class="cta-box reveal">
          <h2 class="cta-title">Collaborate for Scaled Impact</h2>
          <p class="cta-desc">
            Partner with SUCOFAM Uganda to co-design and scale high-impact interventions across Coffee, Cocoa, Honey, and community climate resilience.
          </p>
          <router-link to="/contact" class="btn btn-accent">
            Get In Touch <ArrowRight :size="16" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { usePageSeo } from '../composables/usePageSeo.js'
import { Users, TreePine, TrendingUp, MapPin, Calendar, FileText, ArrowRight } from 'lucide-vue-next'
import { impactStats, impactMethodology, whyPartner } from '../data/content.js'
import heroBg from '@/assets/img/nyamwamba.jpeg'

usePageSeo({
  title: 'Our Impact & Measurement Methodology | SUCOFAM Uganda',
  description:
    "Review SUCOFAM Uganda's verified impact metrics: 4,532+ smallholder farmers (62% women), 50,000+ trees planted, and 100+ beehives across 5 Western Uganda districts.",
  path: '/impact',
  breadcrumbs: [{ name: 'Impact', path: '/impact' }]
})

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

.benchmark-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  background: var(--bg-pink);
  padding: 0.4rem 0.9rem;
  border-radius: var(--radius-full);
  margin-bottom: 0.75rem;
}

/* Stats Grid */
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
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text-dark);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.35rem;
}

.stat-detail {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.5;
}

/* Methodology Grid */
.methodology-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.method-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
}

.method-num {
  font-family: var(--ff-serif);
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--primary);
  opacity: 0.25;
  margin-bottom: 0.5rem;
}

.method-card h3 {
  font-family: var(--ff-serif);
  font-size: 1.25rem;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.method-card p {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-muted);
}

/* Reports Grid */
.reports-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.report-card {
  background: var(--white);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  transition: all 0.3s ease;
}

.report-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.report-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-sm);
  background: var(--bg-green);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.report-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  margin-bottom: 0.4rem;
}

.report-info h4 {
  font-family: var(--ff-serif);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.report-info p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.report-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--accent);
  transition: gap 0.2s ease;
}

.report-link:hover {
  gap: 0.6rem;
  color: var(--accent-hover);
}

/* Why Grid */
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
  border-color: var(--accent);
}

.why-num {
  font-family: var(--ff-serif);
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--accent);
  opacity: 0.25;
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

/* Partner CTA */
.partner-cta .cta-box {
  background: linear-gradient(135deg, var(--bg-green) 0%, var(--white) 100%);
  border-radius: var(--radius-lg);
  padding: 3rem;
  text-align: center;
  border: 1px solid var(--border);
}

.partner-cta .cta-title {
  font-family: var(--ff-serif);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.partner-cta .cta-desc {
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 1.5rem;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .methodology-grid { grid-template-columns: 1fr; }
  .reports-grid { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .stats-grid { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: 1fr; }
  .report-card { flex-direction: column; }
}
</style>
