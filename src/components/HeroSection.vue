<template>
  <section class="hero">
    <div class="hero-frame">
      <!-- Background: video when available, real farm photography otherwise -->
      <div class="hero-bg">
        <img :src="heroPoster" alt="" class="hero-poster" aria-hidden="true" />

        <video
          v-if="!videoFailed"
          class="hero-video"
          autoplay
          muted
          loop
          playsinline
          preload="auto"
          :poster="heroPoster"
          :src="heroVideoSrc"
          @error="videoFailed = true"
        ></video>

        <swiper
          v-show="videoFailed"
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
          </swiper-slide>

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
          <div class="hero-badge reveal">
            <span class="badge-dot" />
            Transforming Ugandan Agriculture
          </div>

          <h1 class="hero-title reveal reveal-delay-1">
            We Turn Ugandan Farms Into
            <em class="rotating-headline">
              <span aria-live="polite">{{ typedWord }}</span><span class="typing-cursor" aria-hidden="true" />
            </em>
          </h1>

          <p class="hero-desc reveal reveal-delay-2">
            SUCOFAM empowers 4,500+ smallholder farmers especially women and youth
            across Uganda's coffee, cocoa, and honey value chains.
          </p>

          <div class="hero-actions reveal reveal-delay-3">
            <router-link to="/contact" class="btn btn-accent">
              Get Started <ArrowRight class="icon-sm" />
            </router-link>
            <router-link to="/programs" class="btn btn-outline-white">
              Our Services
            </router-link>
          </div>

          <div class="hero-trust-bar reveal reveal-delay-3">
            <span
              v-for="(partner, i) in trustPartners"
              :key="partner"
              class="hero-trust-item"
            >
              {{ partner }}
              <span v-if="i < trustPartners.length - 1" class="hero-trust-dot">•</span>
            </span>
          </div>
        </div>
      </div>

      <div class="scroll-hint" @click="scrollToAbout">
        <div class="scroll-wheel" />
        <span>Scroll</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { newsArticles } from '../data/content.js'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Navigation } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

// Real farmer photo (public/hero-bg.jpg) — always-visible base layer, and video poster/fallback
const heroPoster = '/hero-bg.jpg'

// Drop a hero-video.mp4 into /public to enable the video background — this is a plain
// string (not a static `src=` attribute) so Vite doesn't try to bundle a file that doesn't exist yet.
const heroVideoSrc = '/hero-video.mp4'

// Get top 3 news photos for the hero (used only if the video source is unavailable)
const heroSlides = computed(() => {
  return newsArticles.slice(0, 3)
})

// If /hero-video.mp4 hasn't been added yet (or fails to load), fall back to the photo swiper
const videoFailed = ref(false)

const rotatingWords = ['Coffee', 'Cocoa', 'Honey']
const typedWord = ref('')
let typingTimer
let wordIndex = 0
let isDeleting = false

const typeNextCharacter = () => {
  const currentWord = rotatingWords[wordIndex]
  typedWord.value = isDeleting
    ? currentWord.slice(0, typedWord.value.length - 1)
    : currentWord.slice(0, typedWord.value.length + 1)

  let delay = isDeleting ? 55 : 95

  if (!isDeleting && typedWord.value === currentWord) {
    isDeleting = true
    delay = 1500
  } else if (isDeleting && typedWord.value === '') {
    isDeleting = false
    wordIndex = (wordIndex + 1) % rotatingWords.length
    delay = 350
  }

  typingTimer = window.setTimeout(typeNextCharacter, delay)
}

onMounted(() => {
  typeNextCharacter()
})

onBeforeUnmount(() => {
  window.clearTimeout(typingTimer)
})

const trustPartners = ['Enabel', 'ESAT', 'MUBEC', 'Wakanda Coffee']

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
  padding: 7rem clamp(1rem, 5vw, 4rem) 3rem;
  display: flex;
  align-items: center;
  background: var(--white);
}

.hero-frame {
  width: min(100%, 1320px);
  aspect-ratio: 2 / 1;
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: var(--primary-deep);
  margin: 0 auto;
  box-shadow: var(--shadow-lg);
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: var(--primary-deep);
}

/* Always-present base photo — visible instantly, and still underneath the
   video/swiper so there's never a blank flash while either one loads. */
.hero-poster {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-swiper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
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
  background: linear-gradient(90deg, rgba(5, 39, 26, 0.96) 0%, rgba(11, 58, 37, 0.76) 38%, rgba(11, 34, 26, 0.08) 100%);
  z-index: 2;
  pointer-events: none;
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
  height: 100%;
  padding: 4rem clamp(2rem, 5vw, 5rem);
  max-width: 1320px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
}

.hero-left {
  max-width: 570px;
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

.rotating-headline {
  display: block;
  min-height: 1.1em;
}

.typing-cursor {
  display: inline-block;
  width: 2px;
  height: 0.9em;
  margin-left: 0.12em;
  vertical-align: -0.08em;
  background: var(--accent-light);
  animation: cursor-blink 0.85s step-end infinite;
}

@keyframes cursor-blink {
  50% { opacity: 0; }
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

.hero-actions .btn-accent {
  background: var(--primary);
  box-shadow: 0 4px 16px rgba(116, 161, 46, 0.3);
}

.hero-actions .btn-accent:hover {
  background: var(--primary-light);
  box-shadow: 0 8px 24px rgba(116, 161, 46, 0.4);
}

.icon-sm {
  width: 1.1rem;
  height: 1.1rem;
}

.hero-trust-bar {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
}

.hero-trust-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.hero-trust-dot {
  color: var(--gold-light);
  opacity: 0.8;
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
    padding: 6rem 1rem 2rem;
  }
  .hero-frame {
    aspect-ratio: auto;
    min-height: calc(100vh - 2rem);
  }
  .hero-content {
    padding: 6rem 1.5rem 3rem;
    width: 100%;
  }
  .hero-left {
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .hero {
    min-height: 85vh;
    padding: 0.75rem;
  }
  .hero-frame {
    min-height: calc(85vh - 1.5rem);
    border-radius: 18px;
  }
  .hero-content {
    padding: 5rem 1.25rem 2.5rem;
  }
  .hero-overlay {
    background: linear-gradient(90deg, rgba(5, 39, 26, 0.96) 0%, rgba(11, 58, 37, 0.72) 75%, rgba(11, 34, 26, 0.35) 100%);
  }
  .hero-poster,
  .hero-video,
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
  .hero-trust-bar {
    font-size: 0.72rem;
  }
}
</style>
