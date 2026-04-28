<template>
  <div class="page-view">
    <div class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1920" alt="About SUCOFAM" />
        <div class="page-hero-overlay" />
      </div>
      <div class="page-hero-content container">
        <div class="section-tag white reveal">About Us</div>
        <h1 class="page-hero-title reveal reveal-delay-1">Who We Are</h1>
        <p class="page-hero-desc reveal reveal-delay-2">
          Learn about our mission, vision, and the passionate team driving agricultural transformation.
        </p>
      </div>
    </div>

    <section class="about-section bg-white section-padding">
      <div class="container">
        <div class="about-grid">
          <div class="about-text-block reveal">
            <h2 class="heading-md">Our Story</h2>
            <div class="section-line" />
            <p>
              SUCOFAM was established in June 2024 in Kasese, Uganda, with a clear mandate: to transform 
              the lives of smallholder farmers through sustainable agriculture, market access, and inclusive 
              value chain participation.
            </p>
            <p>
              We recognized that while Uganda's agricultural potential is immense, many farmers — especially 
              women and youth — remain trapped in subsistence farming due to limited knowledge, poor market 
              access, and exploitative middlemen.
            </p>
            <p>
              Today, SUCOFAM operates across multiple districts, working with organized farmer groups in 
              coffee, cocoa, and honey value chains. Our approach combines capacity building, structured 
              market linkages, and climate-smart practices to ensure long-term, sustainable impact.
            </p>
          </div>

          <div class="about-cards reveal reveal-delay-1">
            <div class="about-info-card">
              <Calendar :size="24" />
              <span class="info-label">Founded</span>
              <span class="info-value">June 2024</span>
            </div>
            <div class="about-info-card">
              <MapPin :size="24" />
              <span class="info-label">Location</span>
              <span class="info-value">Kasese, Uganda</span>
            </div>
            <div class="about-info-card">
              <Users :size="24" />
              <span class="info-label">Team</span>
              <span class="info-value">15+ Staff</span>
            </div>
            <div class="about-info-card">
              <Globe :size="24" />
              <span class="info-label">Reach</span>
              <span class="info-value">3 Districts</span>
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
            <div class="vm-block-icon pink">
              <Target :size="32" />
            </div>
            <h3 class="heading-sm">Our Mission</h3>
            <p>{{ mission }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="values-section bg-white section-padding">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">What Drives Us</div>
          <h2 class="section-title">Our Core <em>Values</em></h2>
          <div class="section-line" />
        </div>

        <div class="values-grid">
          <div 
            v-for="(value, i) in coreValues" 
            :key="value.title"
            class="value-card reveal"
            :class="`reveal-delay-${i % 3}`"
          >
            <div class="value-num">0{{ i + 1 }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider -->
    <div class="section-wave-divider">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
    </div>

    <!-- Organizational Structure -->
    <section class="structure-section bg-soft section-padding">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Governance</div>
          <h2 class="section-title">Our <em>Structure</em></h2>
          <div class="section-line" />
          <p class="section-desc">
            SUCOFAM is built on a robust governance framework designed to ensure transparency, 
            efficiency, and maximum impact for our farming communities.
          </p>
        </div>

        <div class="structure-box reveal">
          <div class="organogram-wrapper">
            <img :src="organogramImg" alt="SUCOFAM Organogram" class="organogram-img" />
          </div>
          <div class="structure-legend">
            <p><Info :size="16" /> Tip: Click the image to view in full resolution.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Divider Inverted -->
    <div class="section-wave-divider inverted">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
    </div>

    <!-- Team -->
    <section class="team-section bg-white section-padding">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Our People</div>
          <h2 class="section-title">Meet the <em>Team</em></h2>
          <div class="section-line" />
        </div>

        <div class="team-grid">
          <div 
            v-for="(member, i) in teamMembers" 
            :key="member.name"
            class="team-card reveal"
            :class="`reveal-delay-${i % 4}`"
          >
            <div class="team-image">
              <img :src="member.image" :alt="member.name" />
            </div>
            <div class="team-info">
              <h3>{{ member.name }}</h3>
              <span class="team-role">{{ member.role }}</span>
              <p>{{ member.bio }}</p>
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
            Join us in creating lasting impact for farming communities across Uganda. 
            Whether you're an organization, donor, or private sector partner, there's a place for you.
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
import { Eye, Target, Calendar, MapPin, Users, Globe, ArrowRight, Info } from 'lucide-vue-next'
import { vision, mission, coreValues, teamMembers } from '../data/content.js'
import organogramImg from '@/assets/img/organogram.png'
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
  background: var(--primary-dark);
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
  opacity: 0.4;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(8, 28, 21, 0.85) 0%, rgba(27, 67, 50, 0.8) 100%);
  z-index: 2;
}

.page-hero-content {
  position: relative;
  z-index: 3;
  padding: 8rem 1.5rem 4rem;
  max-width: 700px;
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
  color: rgba(255, 255, 255, 0.7);
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
  transition: all 0.3s ease;
}

.about-info-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
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
  font-size: 1.1rem;
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

.vm-block-icon.pink {
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
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-3px);
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

/* Team */
.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.team-card {
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.team-image {
  height: 240px;
  overflow: hidden;
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-card:hover .team-image img {
  transform: scale(1.05);
}

.team-info {
  padding: 1.5rem;
}

.team-info h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.25rem;
}

.team-role {
  display: block;
  font-size: 0.8rem;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.team-info p {
  font-size: 0.85rem;
  line-height: 1.6;
  color: var(--text-muted);
}

/* Partner CTA */
.partner-cta .cta-box {
  background: linear-gradient(135deg, var(--bg-green) 0%, var(--bg-soft) 100%);
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
  max-width: 560px;
  margin: 0 auto 1.5rem;
  line-height: 1.7;
}

/* Divider */
.section-wave-divider {
  width: 100%;
  overflow: hidden;
  line-height: 0;
  background: var(--white);
}

.section-wave-divider svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 60px;
}

.section-wave-divider .shape-fill {
  fill: var(--bg-soft);
}

.section-wave-divider.inverted {
  transform: rotate(180deg);
  background: var(--bg-soft);
}

.section-wave-divider.inverted .shape-fill {
  fill: var(--white);
}

/* Structure */
.structure-box {
  max-width: 1000px;
  margin: 0 auto;
}

.organogram-wrapper {
  background: var(--white);
  border-radius: var(--radius-lg);
  padding: 1rem;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.organogram-wrapper:hover {
  transform: scale(1.01);
}

.organogram-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius);
}

.structure-legend {
  text-align: center;
  margin-top: 1.5rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.structure-legend p {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 2rem; }
  .vm-grid { grid-template-columns: 1fr; }
  .values-grid { grid-template-columns: repeat(2, 1fr); }
  .team-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .values-grid { grid-template-columns: 1fr; }
  .team-grid { grid-template-columns: 1fr; }
  .about-cards { grid-template-columns: repeat(2, 1fr); }
}
</style>
