<template>
  <section class="home-news">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-tag">Updates</div>
        <h2 class="section-title">Latest <em>From The Field</em></h2>
        <div class="section-line" />
      </div>

      <div class="news-slider-container reveal">
        <swiper
          :modules="[Autoplay, Pagination, Navigation]"
          :slides-per-view="1"
          :space-between="24"
          :loop="true"
          :pagination="{ 
            clickable: true,
            el: '.news-pagination'
          }"
          :navigation="{
            nextEl: '.news-next',
            prevEl: '.news-prev'
          }"
          :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 24
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }"
          class="news-swiper"
        >
          <swiper-slide v-for="article in newsArticles.slice(0, 4)" :key="article.id">
            <article class="hn-card">
              <div class="hn-image">
                <img :src="article.image" :alt="article.title" loading="lazy" />
              </div>
              <div class="hn-content">
                <div class="hnc-date">{{ article.date }}</div>
                <h3 class="hnc-title">{{ article.title }}</h3>
                <p class="hnc-summary">{{ article.summary }}</p>
                <router-link to="/news" class="hnc-more">Read More <ArrowRight :size="14" /></router-link>
              </div>
            </article>
          </swiper-slide>
        </swiper>

        <!-- Custom Navigation & Pagination -->
        <div class="news-controls">
          <button class="news-prev nav-btn" aria-label="Previous slide">
            <ArrowLeft :size="20" />
          </button>
          <div class="news-pagination"></div>
          <button class="news-next nav-btn" aria-label="Next slide">
            <ArrowRight :size="20" />
          </button>
        </div>
      </div>

      <div class="hn-footer reveal">
        <router-link to="/news" class="btn btn-outline">View All News</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight, ArrowLeft } from 'lucide-vue-next'
import { newsArticles } from '../data/content.js'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
</script>

<style scoped>
.home-news {
  padding: var(--section-pad) 0;
  background: var(--white);
  overflow: hidden;
}

.news-slider-container {
  margin-bottom: 4rem;
  position: relative;
  padding: 0 10px;
}

.news-swiper {
  overflow: visible !important;
}

.hn-card {
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.hn-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent-light);
}

.hn-image {
  height: 220px;
  overflow: hidden;
}

.hn-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.hn-card:hover .hn-image img {
  transform: scale(1.1);
}

.hn-content {
  padding: 1.75rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.hnc-date {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hnc-title {
  font-family: var(--ff-serif);
  font-size: 1.25rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
  line-height: 1.4;
  font-weight: 700;
}

.hnc-summary {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hnc-more {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--accent);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.3s ease;
  margin-top: auto;
}

.hnc-more:hover {
  gap: 0.6rem;
  color: var(--accent-hover);
}

.hn-footer {
  text-align: center;
}

/* Swiper Customization */
.news-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.nav-btn {
  background: var(--white);
  border: 1px solid var(--border);
  color: var(--accent);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.nav-btn:hover {
  background: var(--accent);
  color: var(--white);
  border-color: var(--accent);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.nav-btn.swiper-button-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.news-pagination {
  display: flex;
  gap: 0.5rem;
  width: auto !important;
  bottom: 0 !important;
  position: static !important;
}

:deep(.swiper-pagination-bullet) {
  background: var(--accent);
  opacity: 0.2;
  width: 10px;
  height: 10px;
  margin: 0 !important;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
  width: 32px;
  border-radius: 5px;
}

@media (max-width: 640px) {
  .hn-image {
    height: 200px;
  }
  .hn-content {
    padding: 1.5rem;
  }
  .news-controls {
    gap: 1.5rem;
  }
  .nav-btn {
    width: 40px;
    height: 40px;
  }
}
</style>
