<template>
  <section class="home-partners bg-soft">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-tag">Partnerships</div>
        <h2 class="section-title">Trusted <em>Collaborators</em></h2>
        <div class="section-line" />
        <p class="section-desc">
          SUCOFAM works with mission-aligned partners to strengthen value chains, deepen impact,
          and support sustainable agricultural livelihoods across Uganda.
        </p>
      </div>

      <div class="partners-grid reveal">
        <div v-for="partner in partners" :key="partner.name" class="partner-card">
          <div class="partner-image">
            <img :src="partner.src" :alt="partner.alt" loading="lazy" />
          </div>
          <div class="partner-name">{{ partner.name }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import enableLogo from '@/assets/img/partnerships/enable.jpeg'
import esatLogo from '@/assets/img/partnerships/esat.jpeg'
import generalMerchantsLogo from '@/assets/img/partnerships/general_merchants.jpeg'
import mubecLogo from '@/assets/img/partnerships/mubec.jpeg'
import ukiramuLogo from '@/assets/img/partnerships/ukiramu.jpeg'
import wakandaLogo from '@/assets/img/partnerships/wakanda.jpeg'

const partners = [
  { name: 'Enabel', src: enableLogo, alt: 'Enable partnership image' },
  { name: 'ESAT', src: esatLogo, alt: 'ESAT partnership image' },
  { name: 'General Merchants', src: generalMerchantsLogo, alt: 'General Merchants partnership image' },
  { name: 'MUBEC', src: mubecLogo, alt: 'Mubec partnership image' },
  { name: 'UkIRAMU', src: ukiramuLogo, alt: 'Ukiramu partnership image' },
  { name: 'Wakanda Coffee', src: wakandaLogo, alt: 'Wakanda partnership image' }
]
</script>

<style scoped>
.home-partners {
  padding: var(--section-pad) 0;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.partner-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.partner-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: rgba(116, 161, 46, 0.15);
}

.partner-image {
  width: 100%;
  max-width: 220px;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 1rem;
  background: var(--bg-soft);
  display: flex;
  align-items: center;
  justify-content: center;
}

.partner-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.partner-name {
  margin-top: 1rem;
  font-weight: 700;
  color: var(--text-dark);
  font-size: 1rem;
}

@media (max-width: 900px) {
  .partners-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .partners-grid {
    grid-template-columns: 1fr;
  }
}
</style>
