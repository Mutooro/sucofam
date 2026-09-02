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
          SUCOFAM empowers smallholder farmers especially women and youth
          across Uganda through the coffee, cocoa, and honey value chains.
          Sustainable livelihoods, not subsistence.
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
import { Eye, Target, ArrowRight } from 'lucide-vue-next'
import { vision, mission } from '../data/content.js'

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

/* Vision & Mission Overlap Card */
.vm-overlap-container {
  position: relative;
  z-index: 10;
  margin-top: -10rem;
}

.vm-overlap-card {
  background: #fdfdfd;
  border-radius: 3.5rem 3.5rem 1.5rem 1.5rem;
  padding: 4rem 5rem;
  box-shadow: 0 20px 50px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.03);
}

.vm-grid-overlap {
  display: flex;
  align-items: flex-start;
  gap: 3rem;
}

.vm-item {
  flex: 1;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.vm-icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--bg-green);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
}

.vm-icon.pink {
  background: var(--bg-pink);
  color: var(--accent);
}

.vm-content h3 {
  font-family: var(--ff-serif);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.vm-content p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
}

.vm-divider {
  width: 1px;
  height: 80px;
  background: rgba(0,0,0,0.06);
  align-self: center;
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
  .vm-overlap-container {
    margin-top: -3rem;
  }
  .vm-overlap-card {
    padding: 2rem 1.5rem;
    border-radius: 2.5rem 2.5rem 1.5rem 1.5rem;
  }
  .vm-grid-overlap {
    flex-direction: column;
    gap: 2rem;
  }
  .vm-divider {
    display: none;
  }
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
  .vm-overlap-container {
    display: none;
  }
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
