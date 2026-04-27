<template>
  <section class="team-section">
    <div class="container">
      <div class="team-header">
        <div class="section-tag">Leadership</div>
        <h2 class="section-title">The <em>Team</em> Behind SUCOFAM</h2>
        <p class="section-desc">
          Meet the dedicated professionals working to transform agricultural livelihoods across Uganda.
        </p>
      </div>

      <div class="team-grid">
        <div
          v-for="(member, i) in teamMembers"
          :key="member.name"
          class="team-card reveal"
          :style="`transition-delay: ${i * 0.1}s`"
        >
          <div class="member-image-wrap">
            <img :src="member.image" :alt="member.name" class="member-image" />
            <div class="member-overlay">
              <div class="member-socials">
                <a :href="member.social.linkedin" class="social-icon" title="LinkedIn"><Linkedin :size="18" /></a>
                <a :href="member.social.twitter" class="social-icon" title="Twitter"><Twitter :size="18" /></a>
                <a :href="`mailto:${member.social.email}`" class="social-icon" title="Email"><Mail :size="18" /></a>
              </div>
            </div>
          </div>
          <div class="member-info">
            <h3 class="member-name">{{ member.name }}</h3>
            <span class="member-role">{{ member.role }}</span>
            <p class="member-bio">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { teamMembers } from '../data/content.js'
import { Linkedin, Twitter, Mail } from 'lucide-vue-next'
</script>

<style scoped>
.team-section {
  padding: 8rem 0;
  background: var(--white);
}

.team-header {
  margin-bottom: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.team-card {
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform var(--transition);
}

.team-card:hover {
  transform: translateY(-8px);
}

.member-image-wrap {
  position: relative;
  aspect-ratio: 1/1.2;
  overflow: hidden;
  border-radius: var(--radius);
}

.member-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.team-card:hover .member-image {
  transform: scale(1.08);
}

.member-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26, 61, 43, 0.85), transparent);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1.5rem;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.team-card:hover .member-overlay {
  opacity: 1;
}

.member-socials {
  display: flex;
  gap: 1rem;
  transform: translateY(10px);
  transition: transform 0.4s ease;
}

.team-card:hover .member-socials {
  transform: translateY(0);
}

.social-icon {
  width: 36px;
  height: 36px;
  background: var(--gold);
  color: var(--charcoal);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, background 0.3s;
}

.social-icon:hover {
  transform: scale(1.1);
  background: var(--harvest);
}

.member-info {
  padding: 1.5rem 0.5rem;
}

.member-name {
  font-family: var(--ff-serif);
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--charcoal);
  margin-bottom: 0.25rem;
}

.member-role {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 1rem;
}

.member-bio {
  font-size: 0.85rem;
  color: var(--text-muted);
  line-height: 1.6;
}

@media (max-width: 1000px) {
  .team-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .team-grid { grid-template-columns: 1fr; }
}
</style>
