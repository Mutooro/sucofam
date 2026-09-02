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

      <div class="partners-marquee reveal">
        <div class="partners-track">
          <img
            v-for="(partner, i) in loopedPartners"
            :key="`${partner.name}-${i}`"
            class="partner-logo"
            :src="partner.src"
            :alt="partner.alt"
            loading="lazy"
          />
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

// Duplicate the list so the marquee track can loop seamlessly (CSS scrolls -50%)
const loopedPartners = [...partners, ...partners]
</script>

<style scoped>
.home-partners {
  padding: var(--section-pad) 0;
}

.partners-marquee {
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
}

.partners-track {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  width: max-content;
  animation: partners-scroll 28s linear infinite;
}

.partners-marquee:hover .partners-track {
  animation-play-state: paused;
}

@keyframes partners-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.partner-logo {
  flex: 0 0 180px;
  width: 180px;
  height: 110px;
  object-fit: contain;
  object-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.partner-logo:hover {
  transform: scale(1.05);
}

@media (max-width: 640px) {
  .partner-logo {
    flex-basis: 150px;
    width: 150px;
    height: 90px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .partners-track {
    animation: none;
  }
  .partners-marquee {
    overflow-x: auto;
  }
}
</style>
