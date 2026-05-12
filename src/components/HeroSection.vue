<template>
  <section class="hero">
    <!-- Background image slider with overlay -->
    <div class="hero-bg">
      <swiper
        :modules="[Autoplay, EffectFade, Navigation]"
        :slides-per-view="1"
        :effect="'fade'"
        :loop="true"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false
        }"
        :navigation="{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        }"
        class="hero-swiper"
      >
        <swiper-slide v-for="(article, index) in heroSlides" :key="article.id || index">
          <div class="slide-image">
            <img :src="article.image" :alt="article.title" />
          </div>
          <div class="slide-content container">
            <div class="slide-card">
              <span class="slide-category" v-if="article.category">{{ article.category }}</span>
              <span class="slide-date">{{ article.date }}</span>
              <h2 class="slide-title">{{ article.title }}</h2>
            </div>
          </div>
        </swiper-slide>
        
        <!-- Navigation Arrows -->
        <button class="hero-nav-btn hero-prev" aria-label="Previous slide">
          <ChevronLeft :size="24" />
        </button>
        <button class="hero-nav-btn hero-next" aria-label="Next slide">
          <ChevronRight :size="24" />
        </button>
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
          <div class="trust-more">4,532+</div>
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
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { newsArticles } from '../data/content.js'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

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
    rgba(8, 28, 21, 0.7) 0%, 
    rgba(8, 28, 21, 0.3) 50%, 
    rgba(8, 28, 21, 0.1) 100%
  );
  z-index: 2;
  pointer-events: none;
}

/* Slide Content */
.slide-content {
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;
  padding-bottom: 3rem;
}

.slide-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 2rem 3rem;
  border-radius: 0.5rem;
  max-width: 750px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  pointer-events: auto;
  transform: translateY(40px);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  text-align: left;
}

.swiper-slide-active .slide-card {
  transform: translateY(0);
  opacity: 1;
  transition-delay: 0.8s;
}

.slide-category {
  display: block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #333;
  letter-spacing: 0.15em;
  margin-bottom: 0.4rem;
}
.slide-date {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #2d6a4f; /* Green as in image */
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.slide-title {
  font-family: var(--ff-sans); /* Reference image looks more sans-serif */
  font-size: clamp(1.4rem, 3.5vw, 2.2rem);
  font-weight: 600;
  line-height: 1.2;
  color: #1a1a1a;
  margin-bottom: 0;
}

.slide-summary {
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 2rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Navigation Arrows */
.hero-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: #1a1a1a;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.hero-nav-btn:hover {
  background: var(--white);
  transform: translateY(-50%) scale(1.1);
}

.hero-prev {
  left: 2rem;
}

.hero-next {
  right: 2rem;
}

.swiper-button-disabled {
  opacity: 0.5;
  cursor: not-allowed;
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
  .slide-content {
    align-items: flex-end;
    padding-bottom: 2rem;
    padding-left: 0;
    padding-right: 0;
  }
  .slide-card {
    padding: 2rem;
    border-radius: 1.5rem;
    max-width: 100%;
    transform: translateY(30px);
  }
  .swiper-slide-active .slide-card {
    transform: translateY(0);
  }
  .slide-title {
    font-size: 1.5rem;
  }
  .slide-summary {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
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
