<template>
  <div class="page-view">
    <div class="page-hero">
      <div class="page-hero-bg">
        <img :src="heroBg" alt="Gallery" />
        <div class="page-hero-overlay" />
      </div>
      <div class="page-hero-content container">
        <div class="section-tag white reveal">Our Gallery</div>
        <h1 class="page-hero-title reveal reveal-delay-1">Gallery</h1>
        <p class="page-hero-desc reveal reveal-delay-2">
          A visual journey through our work with farming communities across Uganda.
        </p>
      </div>
    </div>

    <section class="gallery-section section-padding">
      <div class="container">
        <!-- Filter Tabs -->
        <div class="gallery-filters reveal">
          <button 
            v-for="cat in categories" 
            :key="cat"
            class="filter-btn"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="gallery-grid">
          <div 
            v-for="(img, i) in filteredImages" 
            :key="i"
            class="gallery-item reveal"
            :class="[`reveal-delay-${i % 3}`, getSpanClass(i)]"
            @click="openLightbox(img)"
          >
            <img :src="img.src" :alt="img.alt" loading="lazy" />
            <div class="gallery-overlay">
              <div class="gallery-overlay-content">
                <ZoomIn :size="24" />
                <span>{{ img.alt }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <Transition name="lightbox">
      <div v-if="lightboxImage" class="lightbox" @click="lightboxImage = null">
        <button class="lightbox-close" @click="lightboxImage = null">
          <X :size="28" />
        </button>
        <div class="lightbox-content" @click.stop>
          <img :src="lightboxImage.src" :alt="lightboxImage.alt" />
          <p class="lightbox-caption">{{ lightboxImage.alt }}</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ZoomIn, X } from 'lucide-vue-next'
import { galleryImages } from '../data/content.js'
import heroBg from '@/assets/img/coffee1.jpg'

const activeCategory = ref('All')
const lightboxImage = ref(null)

const categories = computed(() => {
  const cats = [...new Set(galleryImages.map(img => img.category))]
  return ['All', ...cats]
})

const filteredImages = computed(() => {
  if (activeCategory.value === 'All') return galleryImages
  return galleryImages.filter(img => img.category === activeCategory.value)
})

const getSpanClass = (i) => {
  // Make every 4th item span 2 columns for visual variety
  return (i % 5 === 0) ? 'span-wide' : ''
}

const openLightbox = (img) => {
  lightboxImage.value = img
}
</script>

<style scoped>
.page-hero {
  position: relative;
  min-height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: var(--primary-dark);
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
  opacity: 0.35;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(8, 28, 21, 0.9) 0%, rgba(27, 67, 50, 0.85) 100%);
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

/* Gallery Filters */
.gallery-filters {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.6rem 1.5rem;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--bg-soft);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: rgba(166, 124, 82, 0.06);
}

.filter-btn.active {
  background: var(--accent);
  color: var(--white);
  border-color: var(--accent);
  box-shadow: 0 4px 16px rgba(166, 124, 82, 0.25);
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  grid-auto-flow: dense;
}

.gallery-item {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4 / 3;
}

.gallery-item.span-wide {
  grid-column: span 2;
  aspect-ratio: 16 / 9;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
}

.gallery-overlay-content {
  color: var(--white);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.gallery-overlay-content span {
  font-size: 0.9rem;
  font-weight: 500;
}

.gallery-item:hover img {
  transform: scale(1.08);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 5000;
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.lightbox-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
  color: var(--white);
}

.lightbox-content {
  max-width: 900px;
  width: 100%;
  text-align: center;
}

.lightbox-content img {
  width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: var(--radius);
}

.lightbox-caption {
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

/* Lightbox transition */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .gallery-item.span-wide {
    grid-column: span 1;
    aspect-ratio: 4 / 3;
  }
}

@media (max-width: 500px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
