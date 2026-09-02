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

    <section id="who-we-are" class="about-section bg-white section-padding">
      <div class="container">
        <div class="about-grid">
          <div class="about-text-block reveal">
            <h2 class="heading-md">Our Story</h2>
            <div class="section-line" />
            <p>
               Sustainably Connected Farmers Agriprenuer Market (SUCOFAM) was established in June 2024 in Kasese, Uganda, with a clear mandate: to transform 
              the lives of smallholder farmers through sustainable agriculture, market access, and inclusive 
              value chain participation.
            </p>
            <p>
              We recognized that while Uganda's agricultural potential is immense, many farmers especially 
              women and youth remain trapped in subsistence farming due to limited knowledge, poor market 
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
              <span class="info-value">5 Districts</span>
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

    <!-- Our Goals -->
    <section id="what-we-do" class="goals-section bg-soft section-padding">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Our Objectives</div>
          <h2 class="section-title">Our <em>Goals</em></h2>
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
          <div class="section-tag">Our Identity</div>
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
    <section class="group-photo-section bg-white">
      <div class="container">
        <div class="group-photo-box reveal">
          <img :src="groupPhoto" alt="SUCOFAM Team and Partners" class="group-photo-img" />
          <div class="group-photo-caption">
            <p>Our dedicated team and partners working together for agricultural transformation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="team-section bg-white section-padding">
      <div class="container">
        <div class="section-header reveal centered-mobile">
          <div class="section-tag">Our People</div>
          <h2 class="section-title">Meet the <em>Team</em></h2>
          <div class="section-line" />
        </div>

        <div class="team-grid">
          <div 
            v-for="(member, i) in teamMembers" 
            :key="member.name"
            class="team-card reveal"
            :class="`reveal-delay-${i % 3}`"
          >
            <div class="team-image">
              <img v-if="member.image" :src="member.image" :alt="member.name" />
              <div v-else class="team-placeholder">
                <User :size="64" />
              </div>
              <div class="team-socials" v-if="member.social">
                <a v-if="member.social.linkedin" :href="member.social.linkedin" target="_blank" class="social-link" title="LinkedIn">
                  <Linkedin :size="18" />
                </a>
                <a v-if="member.social.twitter" :href="member.social.twitter" target="_blank" class="social-link" title="Twitter">
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
import { useHead } from '@unhead/vue'

useHead({
  title: 'About Us | SUCOFAM',
  meta: [
    {
      name: 'description',
      content: 'Learn about SUCOFAM\'s mission to transform agricultural livelihoods in Uganda. Discover our history, vision, and how we empower women and youth in farming.'
    }
  ]
})

import { Eye, Target, Calendar, MapPin, Users, Globe, ArrowRight, Info, Linkedin, Twitter, Mail } from 'lucide-vue-next'
import { vision, mission, culture, ourGoals, teamMembers } from '../data/content.js'
import organogramImg from '@/assets/img/organogram.png'
import groupPhoto from '@/assets/img/partnership.jpeg'
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

@media (max-width: 600px) {
  .goal-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}

/* Team Section Redesign - Osela Style */
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.team-card {
  background: #f8f9fa;
  border-radius: 15px;
  padding: 2.5rem 1.5rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  border: 1px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-card:hover {
  transform: translateY(-10px);
  background: var(--white);
  border-color: #0a4a6e;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.team-image {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  border: 4px solid transparent;
  transition: all 0.4s ease;
  flex-shrink: 0;
}

.team-card:hover .team-image {
  border-color: #0a4a6e;
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-placeholder {
  width: 100%;
  height: 100%;
  background: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a4a6e;
}

.team-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0a4a6e;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.team-card:hover .team-name {
  color: #ff5722;
}

.team-role {
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #ff5722;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.team-card:hover .team-role {
  color: #0a4a6e;
}

.team-divider {
  width: 0;
  height: 2px;
  background: #0a4a6e;
  margin-bottom: 1rem;
  transition: width 0.4s ease;
}

.team-card:hover .team-divider {
  width: 40px;
}

.team-bio {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #666;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
}

.team-socials {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  margin-top: auto;
}

.social-link {
  width: 36px;
  height: 36px;
  background: #eee;
  color: #0a4a6e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #0a4a6e;
  color: #fff;
  transform: translateY(-3px);
}

/* Group Photo */
.group-photo-section {
  padding: 2rem 0;
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
  height: 500px;
  object-fit: cover;
  object-position: center;
  display: block;
}

.group-photo-caption {
  padding: 1.5rem;
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

@media (max-width: 768px) {
  .group-photo-img {
    height: 300px;
  }
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
  .centered-mobile { text-align: center; }
  .centered-mobile .section-line { margin: 1rem auto; }
}

@media (max-width: 600px) {
  .values-grid { grid-template-columns: 1fr; }
  .about-cards { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .team-grid { grid-template-columns: 1fr; }
  .team-image { height: 280px; }
}
</style>
