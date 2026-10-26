<template>
  <div class="page-view">
    <div class="page-hero">
      <div class="page-hero-bg">
        <img :src="heroBg" alt="About SUCOFAM Uganda" />
        <div class="page-hero-overlay" />
      </div>
      <div class="page-hero-content container">
        <div class="section-tag white reveal">About SUCOFAM</div>
        <h1 class="page-hero-title reveal reveal-delay-1">Who We Are</h1>
        <p class="page-hero-desc reveal reveal-delay-2">
          Building sustainable rural prosperity through climate-smart agriculture, farmer aggregation, and equitable market linkages.
        </p>
      </div>
    </div>

    <!-- Our Story & Institutional Identity -->
    <section id="who-we-are" class="about-section bg-white section-padding">
      <div class="container">
        <div class="about-grid">
          <div class="about-text-block reveal">
            <h2 class="heading-md">Our Story &amp; Mandate</h2>
            <div class="section-line" />
            <p>
              <strong>SUCOFAM Uganda Limited</strong> (operating as <em>Sustainably Connected Farmers Agripreneur Market</em>) was established in June 2024 in Kasese, Western Uganda, with a clear mandate: to transform the livelihoods of smallholder farming households through regenerative agriculture, farmer-owned aggregation, and structured market access.
            </p>
            <p>
              While the Rwenzori region possesses exceptional volcanic soils and ideal agroecological conditions for coffee, cocoa, and honey, thousands of farmers, particularly women and youth, have historically remained trapped in subsistence poverty due to limited agronomic training, severe post-harvest losses, and exploitation by speculative intermediaries.
            </p>
            <p>
              Today, SUCOFAM operates across five focal districts in Western Uganda (Kasese, Kabarole, Kyegegwa, Bunyangabu, and Rubirizi), organizing over 4,500 smallholder farmers into democratic producer groups and cooperatives. Our holistic model pairs Good Agronomic Practices (GAP) and climate resilience with direct market linkages and household social development.
            </p>
          </div>

          <div class="about-cards reveal reveal-delay-1">
            <div class="about-info-card">
              <Calendar :size="24" />
              <span class="info-label">Established</span>
              <span class="info-value">June 2024</span>
              <div class="card-arrow">
                <ArrowRight :size="16" />
              </div>
            </div>
            <div class="about-info-card">
              <MapPin :size="24" />
              <span class="info-label">Headquarters</span>
              <span class="info-value">Kasese, Uganda</span>
              <div class="card-arrow">
                <ArrowRight :size="16" />
              </div>
            </div>
            <div class="about-info-card">
              <ShieldCheck :size="24" />
              <span class="info-label">Legal Form</span>
              <span class="info-value">Company Ltd by Guarantee</span>
              <div class="card-arrow">
                <ArrowRight :size="16" />
              </div>
            </div>
            <div class="about-info-card">
              <Globe :size="24" />
              <span class="info-label">Focus Region</span>
              <span class="info-value">5 Rwenzori Districts</span>
              <div class="card-arrow">
                <ArrowRight :size="16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="vm-section bg-soft section-padding">
      <div class="container">
        <div class="vm-grid">
          <div class="vm-block reveal">
            <div class="vm-block-icon">
              <Eye :size="32" />
            </div>
            <h3 class="heading-sm">Our Vision</h3>
            <p>{{ vision }}</p>
          </div>
          <div class="vm-block reveal reveal-delay-1">
            <div class="vm-block-icon accent">
              <Target :size="32" />
            </div>
            <h3 class="heading-sm">Our Mission</h3>
            <p>{{ mission }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Governance Structure -->
    <section id="governance" class="governance-section bg-white section-padding">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Institutional Integrity</div>
          <h2 class="section-title">Governance &amp; <em>Oversight</em></h2>
          <div class="section-line" />
          <p class="section-desc">
            To guarantee transparency, donor confidence, and strategic alignment, SUCOFAM maintains a clear division between fiduciary board oversight and operational management.
          </p>
        </div>

        <div class="governance-grid">
          <div 
            v-for="(pillar, i) in governanceStructure.pillars" 
            :key="pillar.role"
            class="gov-card reveal"
            :class="`reveal-delay-${i}`"
          >
            <div class="gov-num">0{{ i + 1 }}</div>
            <h3>{{ pillar.role }}</h3>
            <p>{{ pillar.scope }}</p>
          </div>
        </div>

        <!-- Organogram Visual -->
        <div class="structure-box reveal reveal-delay-2">
          <div class="organogram-wrapper">
            <img :src="organogramImg" alt="SUCOFAM Organizational Structure" class="organogram-img" />
          </div>
          <div class="structure-legend">
            <p>
              <Info :size="16" />
              Organizational hierarchy depicting Board Oversight, Directorate, Technical Programs, and Community Cooperative Committees.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Goals -->
    <section id="what-we-do" class="goals-section bg-soft section-padding">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Strategic Objectives</div>
          <h2 class="section-title">Our Strategic <em>Goals</em></h2>
          <div class="section-line" />
        </div>

        <div class="goals-list">
          <div 
            v-for="goal in ourGoals" 
            :key="goal.id"
            class="goal-item reveal"
            :class="`reveal-delay-${goal.id}`"
          >
            <div class="goal-num">{{ goal.id }}</div>
            <div class="goal-content">
              <h3>{{ goal.title }}</h3>
              <p>{{ goal.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Culture -->
    <section id="how-we-do-it" class="values-section bg-white section-padding">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Core Values</div>
          <h2 class="section-title">SUCOFAM <em>Culture</em></h2>
          <div class="section-line" />
        </div>

        <div class="values-grid">
          <div 
            v-for="(item, i) in culture" 
            :key="item.title"
            class="value-card reveal"
            :class="`reveal-delay-${i % 3}`"
          >
            <div class="value-num">0{{ i + 1 }}</div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Group Photo -->
    <section class="group-photo-section bg-soft">
      <div class="container">
        <div class="group-photo-box reveal">
          <img :src="groupPhoto" alt="SUCOFAM Team and Regional Partners" class="group-photo-img" />
          <div class="group-photo-caption">
            <p>SUCOFAM leadership, field agronomists, and regional partners collaborating during our multi-stakeholder strategic forum.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section id="our-team" class="team-section bg-white section-padding">
      <div class="container">
        <div class="section-header reveal centered-mobile">
          <div class="section-tag">Operational Leadership</div>
          <h2 class="section-title">Meet the <em>Team</em></h2>
          <div class="section-line" />
          <p class="section-desc">
            Our dedicated technical, agronomic, and operational professionals driving sustainable impact across the Rwenzori region.
          </p>
        </div>

        <div class="team-grid">
          <div 
            v-for="(member, i) in teamMembers" 
            :key="member.name"
            class="team-card reveal"
            :class="`reveal-delay-${i % 3}`"
          >
            <div class="team-image">
              <img v-if="member.image" :src="member.image" :alt="member.name" loading="lazy" />
              <div v-else class="team-placeholder">
                <User :size="64" />
              </div>
              <div class="team-socials" v-if="member.social">
                <a v-if="member.social.linkedin" :href="member.social.linkedin" target="_blank" rel="noopener noreferrer" class="social-link" title="LinkedIn">
                  <Linkedin :size="18" />
                </a>
                <a v-if="member.social.twitter" :href="member.social.twitter" target="_blank" rel="noopener noreferrer" class="social-link" title="Twitter">
                  <Twitter :size="18" />
                </a>
                <a v-if="member.social.email" :href="`mailto:${member.social.email}`" class="social-link" title="Email">
                  <Mail :size="18" />
                </a>
              </div>
            </div>
            <div class="team-info">
              <h3 class="team-name">{{ member.name }}</h3>
              <span class="team-role">{{ member.role }}</span>
              <div class="team-divider"></div>
              <p class="team-bio">{{ member.bio }}</p>
              <div class="team-arrow">
                <ArrowRight :size="20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners CTA -->
    <section class="partner-cta bg-white section-padding-sm">
      <div class="container">
        <div class="cta-box reveal">
          <h2 class="cta-title">Partner With Us</h2>
          <p class="cta-desc">
            Join us in creating lasting, measurable impact for smallholder farming households across Western Uganda. Whether you are an institutional donor, commercial off-taker, or technical development agency, we welcome collaborative partnerships.
          </p>
          <div class="cta-btn-group">
            <router-link to="/contact" class="btn btn-accent">
              Get In Touch <ArrowRight :size="16" />
            </router-link>
            <router-link to="/accountability" class="btn btn-outline">
              View Institutional Policies
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { usePageSeo } from '../composables/usePageSeo.js'
import { Eye, Target, Calendar, MapPin, Globe, ArrowRight, Info, ShieldCheck, User, Linkedin, Twitter, Mail } from 'lucide-vue-next'
import { legalProfile, vision, mission, culture, ourGoals, governanceStructure, teamMembers } from '../data/content.js'
import organogramImg from '@/assets/img/organogram.png'
import groupPhoto from '@/assets/img/partnership.jpeg'
import heroBg from '@/assets/img/coffee1.jpg'

usePageSeo({
  title: 'About SUCOFAM Uganda | Legal Identity, Team & Governance',
  description:
    'Learn about SUCOFAM Uganda Limited (Sustainably Connected Farmers Agripreneur Market). Discover our legal identity, board governance, mission, team, and work across 5 districts in Western Uganda.',
  path: '/about',
  breadcrumbs: [{ name: 'About', path: '/about' }]
})
</script>

<style scoped>
.page-hero {
  position: relative;
  min-height: 50vh;
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

/* About Grid */
.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: start;
}

.about-text-block p {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.about-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.about-info-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 1.5rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all var(--transition);
  position: relative;
}

.about-info-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.card-arrow {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: var(--accent);
  opacity: 0;
  transition: all 0.3s ease;
}

.about-info-card:hover .card-arrow {
  opacity: 1;
  transform: translateX(4px);
}

.about-info-card svg {
  color: var(--accent);
  margin-bottom: 0.75rem;
}

.info-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.25rem;
}

.info-value {
  display: block;
  font-weight: 700;
  color: var(--text-dark);
  font-size: 1rem;
}

/* VM Section */
.vm-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.vm-block {
  background: var(--white);
  border-radius: var(--radius);
  padding: 2.5rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
}

.vm-block-icon {
  width: 60px;
  height: 60px;
  border-radius: var(--radius);
  background: var(--bg-green);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.vm-block-icon.accent {
  background: var(--bg-pink);
  color: var(--accent);
}

.vm-block h3 {
  font-family: var(--ff-serif);
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: var(--text-dark);
}

.vm-block p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-muted);
}

/* Governance */
.governance-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.gov-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 2rem 1.5rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all var(--transition);
}

.gov-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.gov-num {
  font-family: var(--ff-serif);
  font-size: 2rem;
  font-weight: 900;
  color: var(--accent);
  opacity: 0.35;
  margin-bottom: 0.5rem;
}

.gov-card h3 {
  font-family: var(--ff-serif);
  font-size: 1.15rem;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.gov-card p {
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--text-muted);
}

/* Values */
.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.value-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all var(--transition);
}

.value-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.value-num {
  font-family: var(--ff-serif);
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
  opacity: 0.3;
  line-height: 1;
  margin-bottom: 0.75rem;
}

.value-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.value-card p {
  font-size: 0.9rem;
  line-height: 1.65;
  color: var(--text-muted);
}

/* Goals */
.goals-list {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.goal-item {
  display: flex;
  gap: 2rem;
  background: var(--white);
  padding: 2.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  align-items: center;
}

.goal-num {
  font-family: var(--ff-serif);
  font-size: 3rem;
  font-weight: 900;
  color: var(--accent);
  opacity: 0.2;
  line-height: 1;
}

.goal-content h3 {
  font-family: var(--ff-serif);
  font-size: 1.4rem;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.goal-content p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-muted);
}

/* Team Section */
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.team-card {
  background: var(--bg-soft);
  border-radius: var(--radius);
  padding: 2.5rem 1.5rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-card:hover {
  transform: translateY(-6px);
  background: var(--white);
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
}

.team-image {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  border: 4px solid transparent;
  transition: all var(--transition);
  flex-shrink: 0;
  background: var(--bg-green);
}

.team-card:hover .team-image {
  border-color: var(--accent);
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
}

.team-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.4rem;
  transition: color 0.3s ease;
}

.team-card:hover .team-name {
  color: var(--accent);
}

.team-role {
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--accent);
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.team-card:hover .team-role {
  color: var(--primary);
}

.team-divider {
  width: 0;
  height: 2px;
  background: var(--accent);
  margin-bottom: 0.75rem;
  transition: width 0.4s ease;
}

.team-card:hover .team-divider {
  width: 40px;
}

.team-bio {
  font-size: 0.88rem;
  line-height: 1.6;
  color: #666;
  margin-top: 0.4rem;
  margin-bottom: 1.25rem;
}

.team-arrow {
  margin-top: 1rem;
  color: var(--accent);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.team-card:hover .team-arrow {
  opacity: 1;
  transform: translateX(4px);
}

.team-socials {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: auto;
}

.social-link {
  width: 34px;
  height: 34px;
  background: var(--bg-soft);
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary);
  color: var(--white);
  transform: translateY(-3px);
}

/* Group Photo */
.group-photo-section {
  padding: 3rem 0;
}

.group-photo-box {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border);
  position: relative;
  background: var(--white);
}

.group-photo-img {
  width: 100%;
  height: 480px;
  object-fit: cover;
  object-position: center;
  display: block;
}

.group-photo-caption {
  padding: 1.25rem;
  background: var(--white);
  text-align: center;
  border-top: 1px solid var(--border);
}

.group-photo-caption p {
  color: var(--text-muted);
  font-style: italic;
  font-size: 0.95rem;
  margin: 0;
}

/* Structure Organogram */
.structure-box {
  max-width: 950px;
  margin: 3rem auto 0;
}

.organogram-wrapper {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border);
}

.organogram-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
}

.structure-legend {
  text-align: center;
  margin-top: 1rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.structure-legend p {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
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

.cta-btn-group {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 2rem; }
  .vm-grid { grid-template-columns: 1fr; }
  .governance-grid { grid-template-columns: repeat(2, 1fr); }
  .values-grid { grid-template-columns: repeat(2, 1fr); }
  .team-grid { grid-template-columns: repeat(2, 1fr); }
  .group-photo-img { height: 320px; }
}

@media (max-width: 600px) {
  .governance-grid { grid-template-columns: 1fr; }
  .values-grid { grid-template-columns: 1fr; }
  .about-cards { grid-template-columns: repeat(2, 1fr); }
  .team-grid { grid-template-columns: 1fr; }
}
</style>
