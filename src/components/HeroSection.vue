<template>
  <section class="hero">
    <!-- Background image slider with overlay -->
    <div class="hero-bg">
      <swiper
        :modules="[Autoplay, EffectFade]"
        :slides-per-view="1"
        :effect="'fade'"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }"
        class="hero-swiper"
      >
        <swiper-slide v-for="(article, index) in heroSlides" :key="article.id || index">
          <div class="slide-image">
            <img :src="article.image" :alt="article.title" />
          </div>
        </swiper-slide>
      </swiper>
      <div class="hero-overlay" />
    </div>

    <div class="hero-content container">
      <div class="hero-left">
        <!-- <h1 class="hero-title reveal">
          <em>Improving Farmer Livelihoods</em> 
        </h1> -->

        <!-- <p class="hero-desc reveal reveal-delay-1">
          SUCOFAM empowers smallholder farmers across Uganda through coffee, cocoa, and honey value chains—ensuring fair incomes and sustainable growth.
        </p> -->

        <!-- <div class="hero-actions reveal reveal-delay-2">
          <router-link to="/programs" class="btn btn-accent">
            Explore Programs <ArrowRight class="icon-sm" />
          </router-link>
          <router-link to="/contact" class="btn btn-outline-white">
            Partner With Us
          </router-link>
        </div> -->
      </div>

    </div>
    
    <!-- Right — floating trust card (Absolute positioned relative to hero) -->
    <!-- <div class="hero-right-float reveal reveal-delay-3">
      <div class="trust-card">
        <div class="trust-avatars">
          <img :src="test1" alt="Farmer" />
          <img :src="test2" alt="Farmer" />
          <img :src="test5" alt="Farmer" />
          <img :src="test1" alt="Farmer" />
          <img :src="test2" alt="Farmer" />
          <img :src="test5" alt="Farmer" />
          <div class="trust-more">200+</div>
        </div>
        <p class="trust-text">Farmers empowered across Uganda</p>
      </div>
    </div> -->

    <!-- Scroll indicator -->
    <!-- <div class="scroll-hint" @click="scrollToAbout">
      <div class="scroll-wheel" />
      <span>Scroll</span>
    </div> -->
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import { newsArticles } from '../data/content.js'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'

// Import assets for trust card
import test1 from '@/assets/img/test_1.jpg'
import test2 from '@/assets/img/test_2.jpg'
import test5 from '@/assets/img/test_5.jpg'

// Get top 3 news photos for the hero
const heroSlides = computed(() => {
  return newsArticles.slice(0, 3)
})

const scrollToAbout = () => {
  const about = document.getElementById('about')
  if (about) {
    about.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  background: var(--primary-deep);
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-swiper {
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
}

.slide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top, 
    rgba(8, 28, 21, 0.6) 0%, 
    rgba(8, 28, 21, 0.3) 40%, 
    rgba(8, 28, 21, 0) 100%
  );
  z-index: 2;
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 3;
  padding: 12rem 1.5rem 12rem;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: flex-end;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* Left */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--gold-light);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(8px);
}

.badge-dot {
  width: 6px;
  height: 6px;
  background: var(--gold);
  border-radius: 50%;
  animation: pulse 2s ease infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.85); }
}

.hero-title {
  font-family: var(--ff-serif);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  color: var(--white);
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.hero-title em {
  font-style: italic;
  color: var(--accent-light);
}

.hero-desc {
  font-size: 1.1rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 520px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.icon-sm {
  width: 1.1rem;
  height: 1.1rem;
}

/* Right — trust card */
.hero-right-float {
  position: absolute;
  top: 20%;
  right: 5%;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.trust-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  padding: 1.5rem 2rem;
  max-width: 300px;
  box-shadow: var(--shadow-lg);
}

.trust-avatars {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.trust-avatars img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin-left: -10px;
  object-fit: cover;
}

.trust-avatars img:first-child {
  margin-left: 0;
}

.trust-more {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  margin-left: -10px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.trust-text {
  color: var(--text-body);
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.4;
}

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  z-index: 3;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  transition: color 0.3s;
}

.scroll-hint:hover {
  color: var(--gold);
}

.scroll-wheel {
  width: 22px;
  height: 34px;
  border: 1.5px solid currentColor;
  border-radius: 12px;
  position: relative;
}

.scroll-wheel::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 7px;
  background: currentColor;
  border-radius: 2px;
  animation: scrollAnim 2s ease infinite;
}

@keyframes scrollAnim {
  0% { opacity: 1; transform: translateX(-50%) translateY(0); }
  80% { opacity: 0; transform: translateX(-50%) translateY(10px); }
  100% { opacity: 0; transform: translateX(-50%) translateY(0); }
}

@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 6rem 1.5rem 2rem;
    width: 100%;
  }
  .hero-right-float {
    position: static;
    justify-content: center;
    padding: 0 1.5rem;
    margin-bottom: 4rem;
    width: 100%;
  }
  .trust-card {
    max-width: 320px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .hero-right-float {
    display: none;
  }
}

@media (max-width: 600px) {
  .hero {
    min-height: 85vh; /* Slightly reduced height on mobile to show more photo width */
  }
  .slide-image img {
    object-position: center 30%; /* Focus on the upper-middle part of photos where subjects usually are */
  }
}

@media (max-width: 500px) {
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  .hero-actions .btn {
    width: 100%;
  }
}
</style>
