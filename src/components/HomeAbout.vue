<template>
  <section id="about" class="home-about">


    <!-- Who We Are Section -->
    <div class="about-content container">
      <div class="about-left reveal">
        <div class="section-tag">Who We Are</div>
        <h2 class="section-title">
          A Movement for<br /><em>Agricultural</em> Transformation
        </h2>
        <div class="section-line" />
        <p class="about-text">
          SUCOFAM empowers smallholder farmers, especially women and youth, across Western Uganda's Rwenzori region through the coffee, cocoa, and honey value chains. Sustainable livelihoods, not subsistence.
        </p>
        <p class="about-text">
          Every program we run translates into real change at the farmer household level,
          addressing not only productivity but also financial inclusion, nutrition, and well-being.
        </p>
        <router-link to="/about" class="btn btn-outline">
          Learn More About Us <ArrowRight :size="16" />
        </router-link>
      </div>

      <div class="about-right reveal reveal-delay-2">
        <div class="about-images">
          <img 
            :src="aboutMainImg" 
            alt="Community farming" 
            class="about-img-main"
          />
          <img 
            :src="aboutFloatImg" 
            alt="Coffee harvest" 
            class="about-img-float"
            loading="lazy"
          />
          <div class="about-stat-float">
            <span class="stat-num">4,532+</span>
            <span class="stat-label">Farmers Empowered</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'

// Import local images
import aboutMainImg from '@/assets/img/smell_coffee.jpg' 

import aboutFloatImg from '@/assets/img/rwenzori_farmers.jpeg'
</script>

<style scoped>
.home-about {
  position: relative;
  padding-bottom: var(--section-pad);
  background: var(--white);
}

/* Who We Are */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 5rem;
}

.about-left .section-title {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
}

.about-text {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.about-right {
  display: flex;
  justify-content: center;
}

.about-images {
  position: relative;
  width: 100%;
  max-width: 480px;
}

.about-img-main {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.about-img-float {
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 200px;
  height: 140px;
  object-fit: cover;
  border-radius: var(--radius);
  box-shadow: var(--shadow-xl);
  border: 4px solid var(--white);
}

.about-stat-float {
  position: absolute;
  top: 20px;
  right: -20px;
  background: var(--accent);
  color: var(--white);
  padding: 1rem 1.25rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
  text-align: center;
}

.stat-num {
  display: block;
  font-family: var(--ff-serif);
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1;
}

.stat-label {
  display: block;
  font-size: 0.7rem;
  font-weight: 500;
  opacity: 0.9;
  margin-top: 0.25rem;
  letter-spacing: 0.05em;
}

@media (max-width: 900px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-top: 3rem;
  }
  .about-images {
    max-width: 100%;
  }
  .about-img-float {
    width: 160px;
    height: 110px;
    left: -15px;
    bottom: -20px;
  }
  .about-stat-float {
    right: 10px;
    top: 10px;
  }
}

@media (max-width: 768px) {
  .home-about {
    padding-top: 4rem;
  }
}

@media (max-width: 500px) {
  .about-img-float {
    display: none;
  }
}
</style>
