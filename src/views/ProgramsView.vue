<template>
  <div class="page-view">
    <div class="page-hero">
      <div class="page-hero-bg">
        <img :src="heroBg" alt="SUCOFAM Agricultural Programs" />
        <div class="page-hero-overlay" />
      </div>
      <div class="page-hero-content container">
        <div class="section-tag white reveal">Holistic Impact Pathways</div>
        <h1 class="page-hero-title reveal reveal-delay-1">Our Programs</h1>
        <p class="page-hero-desc reveal reveal-delay-2">
          Structured interventions designed to build climate resilience, commercial enterprise competitiveness, and household well-being.
        </p>
      </div>
    </div>

    <!-- Interactive Programs Section -->
    <section class="programs-section bg-soft section-padding" id="program-detail-container">
      <div class="container">
        
        <!-- Horizontal Tabs -->
        <div class="programs-tabs-wrapper reveal">
          <div class="programs-tabs" role="tablist">
            <button 
              v-for="prog in programs" 
              :key="prog.id"
              role="tab"
              :aria-selected="activeTab === prog.id"
              class="tab-btn"
              :class="{ 'active': activeTab === prog.id }"
              @click="selectTab(prog.id)"
            >
              <span class="tab-icon">
                <component :is="getIcon(prog.icon)" :size="20" />
              </span>
              <span class="tab-title">{{ prog.title }}</span>
            </button>
          </div>
        </div>

        <!-- Tab Content Area -->
        <div class="program-content-wrapper">
          <Transition name="fade-slide" mode="out-in">
            <div 
              v-if="currentProgram" 
              :key="currentProgram.id" 
              class="program-details"
            >
              <!-- Program Summary / Goal & Partner Card -->
              <div class="program-summary-card reveal">
                <div class="summary-top">
                  <div class="summary-icon-box">
                    <component :is="getIcon(currentProgram.icon)" :size="32" />
                  </div>
                  <div>
                    <span v-if="currentProgram.tagline" class="summary-tagline">{{ currentProgram.tagline }}</span>
                    <h2 class="summary-title">{{ currentProgram.title }}</h2>
                  </div>
                </div>
                <div class="summary-divider" />
                
                <div class="summary-goal-box">
                  <div class="goal-icon-wrapper">
                    <Target :size="22" />
                  </div>
                  <p class="summary-goal">
                    <strong>Program Goal:</strong> {{ currentProgram.goal }}
                  </p>
                </div>

                <!-- Structured Metadata Row -->
                <div class="summary-meta-grid">
                  <div v-if="currentProgram.targetBeneficiaries" class="meta-item">
                    <Users :size="18" class="meta-icon" />
                    <div>
                      <span class="meta-label">Target Beneficiaries</span>
                      <span class="meta-val">{{ currentProgram.targetBeneficiaries }}</span>
                    </div>
                  </div>

                  <div v-if="currentProgram.operatingDistricts" class="meta-item">
                    <MapPin :size="18" class="meta-icon" />
                    <div>
                      <span class="meta-label">Operational Districts</span>
                      <span class="meta-val">{{ currentProgram.operatingDistricts }}</span>
                    </div>
                  </div>

                  <div v-if="currentProgram.keyPartners" class="meta-item">
                    <Handshake :size="18" class="meta-icon" />
                    <div>
                      <span class="meta-label">Key Partners &amp; Stakeholders</span>
                      <span class="meta-val">{{ currentProgram.keyPartners }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Sections / Focus Areas Grid -->
              <div class="sections-list">
                <div 
                  v-for="(sect, idx) in currentProgram.sections" 
                  :key="sect.title"
                  class="section-card"
                  :style="{ animationDelay: (idx * 0.08) + 's' }"
                >
                  <div class="section-card-header">
                    <span class="section-number">0{{ idx + 1 }}</span>
                    <h3 class="section-card-title">{{ sect.title }}</h3>
                  </div>
                  
                  <p v-if="sect.desc" class="section-card-desc">{{ sect.desc }}</p>

                  <!-- Photo Strip -->
                  <div v-if="sect.images && sect.images.length > 0" class="section-photos">
                    <div class="section-photo-strip">
                      <div 
                        v-for="(img, imgIdx) in sect.images" 
                        :key="imgIdx" 
                        class="section-photo"
                      >
                        <img :src="img" :alt="sect.title + ' photo ' + (imgIdx + 1)" loading="lazy" />
                      </div>
                    </div>
                  </div>

                  <div class="card-content-layout" :class="{ 'card-split-grid': sect.benefits && sect.benefits.length > 0 }">
                    <div class="activities-col">
                      <h4 class="col-title text-primary">Key Interventions &amp; Activities</h4>
                      <ul class="col-list">
                        <li v-for="act in sect.activities" :key="act">
                          <Check :size="16" class="check-icon" />
                          <span>{{ act }}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div v-if="sect.benefits && sect.benefits.length > 0" class="benefits-col">
                      <h4 class="col-title text-accent flex-align">
                        <Sparkles :size="16" class="sparkle-icon" /> Expected Outcomes &amp; Impact
                      </h4>
                      <ul class="col-list benefits-list">
                        <li v-for="ben in sect.benefits" :key="ben">
                          <ArrowRight :size="14" class="benefit-arrow" />
                          <span>{{ ben }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Transition>
        </div>

      </div>
    </section>

    <!-- Call to Action -->
    <section class="partner-cta bg-white section-padding-sm">
      <div class="container">
        <div class="cta-box reveal">
          <h2 class="cta-title">Support or Scale a Program</h2>
          <p class="cta-desc">
            Partner with SUCOFAM to expand climate-smart agriculture, strengthen cooperative supply chains, or co-fund community welfare initiatives across Western Uganda.
          </p>
          <router-link to="/contact" class="btn btn-accent">
            Partner With Us <ArrowRight :size="16" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { usePageSeo } from '../composables/usePageSeo.js'
import { useRoute } from 'vue-router'
import { 
  CloudRain, ShoppingBag, Heart, Target, 
  ArrowRight, Check, Sparkles, Users, MapPin, Handshake
} from 'lucide-vue-next'
import { programs } from '../data/content.js'
import heroBg from '@/assets/img/prog_csa_agroforestry3.jpeg'

usePageSeo({
  title: 'Agricultural Programs | SUCOFAM Uganda',
  description:
    "Explore SUCOFAM Uganda's three core development programs: Climate-Smart Agriculture (CSA), Farm-to-Market Enterprise (F2MP), and Community Welfare & Social Development.",
  path: '/programs',
  breadcrumbs: [{ name: 'Programs', path: '/programs' }]
})

const iconMap = {
  CloudRain,
  ShoppingBag,
  Heart
}

const getIcon = (name) => iconMap[name] || CloudRain

const route = useRoute()
const activeTab = ref(programs[0].id)

const currentProgram = computed(() => {
  return programs.find(p => p.id === activeTab.value) || programs[0]
})

const selectTab = (id) => {
  activeTab.value = id
  window.history.pushState(null, null, `#${id}`)
}

// Watch for hash changes to activate corresponding tab
watch(() => route.hash, (newHash) => {
  if (newHash) {
    const cleanHash = newHash.replace('#', '')
    const matched = programs.find(p => p.id === cleanHash)
    if (matched) {
      activeTab.value = matched.id
      setTimeout(() => {
        const el = document.getElementById('program-detail-container')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 50)
    }
  }
}, { immediate: true })

onMounted(() => {
  if (route.hash) {
    const cleanHash = route.hash.replace('#', '')
    const matched = programs.find(p => p.id === cleanHash)
    if (matched) {
      activeTab.value = matched.id
    }
  }
})
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
  max-width: 800px;
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

/* Tab Selector Section */
.programs-tabs-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
}

.programs-tabs {
  display: flex;
  background: var(--white);
  padding: 0.4rem;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  gap: 0.25rem;
  overflow-x: auto;
  max-width: 100%;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--text-muted);
  white-space: nowrap;
  transition: all var(--transition);
  background: none;
  border: none;
  cursor: pointer;
}

.tab-btn:hover {
  color: var(--primary);
  background: rgba(116, 161, 46, 0.06);
}

.tab-btn.active {
  color: var(--white);
  background: var(--primary);
  box-shadow: 0 4px 12px rgba(116, 161, 46, 0.25);
}

.tab-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Detail Views */
.program-content-wrapper {
  position: relative;
  min-height: 400px;
}

.program-summary-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 2.5rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  border-left: 5px solid var(--accent);
  margin-bottom: 2.5rem;
}

.summary-top {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.summary-icon-box {
  width: 56px;
  height: 56px;
  background: var(--accent-soft);
  color: var(--accent);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.summary-tagline {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: var(--accent);
}

.summary-title {
  font-family: var(--ff-serif);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-dark);
}

.summary-divider {
  height: 1px;
  background: var(--border);
  margin: 1.5rem 0;
}

.summary-goal-box {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.goal-icon-wrapper {
  color: var(--primary);
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
}

.summary-goal {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-body);
}

/* Metadata Grid */
.summary-meta-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: var(--bg-soft);
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
}

.meta-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.meta-icon {
  color: var(--primary);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.meta-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

.meta-val {
  display: block;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-dark);
  line-height: 1.4;
  margin-top: 0.2rem;
}

/* Sections and Cards List */
.sections-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.section-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 2.5rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all var(--transition);
}

.section-card:hover {
  box-shadow: var(--shadow-md);
  border-color: rgba(116, 161, 46, 0.2);
}

.section-card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
}

.section-number {
  font-family: var(--ff-serif);
  font-size: 2.2rem;
  font-weight: 900;
  color: rgba(116, 161, 46, 0.2);
  line-height: 1;
  margin-right: 0.75rem;
}

.section-card-title {
  font-family: var(--ff-serif);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-dark);
}

.section-card-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

/* Photo strip */
.section-photos {
  margin-bottom: 2rem;
}

.section-photo-strip {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 0.75rem;
}

.section-photo {
  border-radius: var(--radius-sm);
  overflow: hidden;
  aspect-ratio: 4 / 3;
  box-shadow: var(--shadow-sm);
}

.section-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  display: block;
}

.section-photo:hover img {
  transform: scale(1.05);
}

.card-content-layout {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card-split-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 2.5rem;
}

.col-title {
  font-family: var(--ff-sans);
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.flex-align {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.sparkle-icon {
  color: var(--accent);
}

.col-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
}

.col-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--text-body);
}

.check-icon {
  color: var(--primary);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.benefits-col {
  background: var(--bg-soft);
  padding: 1.75rem;
  border-radius: var(--radius-sm);
  border-left: 3px solid var(--accent);
}

.benefit-arrow {
  color: var(--accent);
  flex-shrink: 0;
  margin-top: 0.3rem;
}

/* Animations */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
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
  .programs-tabs {
    flex-wrap: wrap;
    justify-content: center;
  }
  .summary-meta-grid {
    grid-template-columns: 1fr;
  }
  .card-split-grid {
    grid-template-columns: 1fr;
  }
}
</style>
