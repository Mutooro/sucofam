<template>
  <div class="page-view">
    <div class="page-hero">
      <div class="page-hero-bg">
        <img :src="heroBg" alt="SUCOFAM Field Activities Gallery" />
        <div class="page-hero-overlay" />
      </div>
      <div class="page-hero-content container">
        <div class="section-tag white reveal">Field Documentation</div>
        <h1 class="page-hero-title reveal reveal-delay-1">Activities Gallery</h1>
        <p class="page-hero-desc reveal reveal-delay-2">
          Authentic field photographs documenting smallholder training, agroforestry, harvesting, and community engagements in Western Uganda.
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
            :key="img.title || i"
            class="gallery-item reveal"
            role="button"
            tabindex="0"
            :aria-label="`Open details for ${img.title}`"
            :class="[`reveal-delay-${i % 3}`, getSpanClass(i)]"
            @click="openLightbox(img)"
            @keydown.enter="openLightbox(img)"
            @keydown.space.prevent="openLightbox(img)"
          >
            <img :src="img.src" :alt="img.alt" loading="lazy" />
            <div class="gallery-overlay">
              <div class="gallery-overlay-content">
                <span class="gallery-cat-badge">{{ img.category }}</span>
                <h4 class="gallery-item-title">{{ img.title }}</h4>
                <p class="gallery-item-loc"><MapPin :size="14" /> {{ img.location }}</p>
                <div class="gallery-zoom-hint">
                  <ZoomIn :size="16" /> Click for details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rich Metadata Lightbox Modal -->
    <Transition name="lightbox">
      <div v-if="lightboxImage" class="lightbox" role="dialog" aria-modal="true" aria-labelledby="lightbox-title">
        <button ref="lightboxClose" class="lightbox-close" @click="closeLightbox" aria-label="Close gallery details">
          <X :size="28" />
        </button>
        <div class="lightbox-content" @click.stop>
          <div class="lightbox-image-wrapper">
            <img :src="lightboxImage.src" :alt="lightboxImage.alt" />
          </div>
          
          <div class="lightbox-details">
            <div class="lightbox-tag">{{ lightboxImage.category }}</div>
            <h3 id="lightbox-title" class="lightbox-title">{{ lightboxImage.title }}</h3>
            <p class="lightbox-caption">{{ lightboxImage.alt }}</p>

            <div class="lightbox-meta-grid">
              <div class="meta-box">
                <span class="meta-label">Activity:</span>
                <span class="meta-val">{{ lightboxImage.activity || 'Field Operation' }}</span>
              </div>
              <div class="meta-box">
                <span class="meta-label">Location:</span>
                <span class="meta-val">{{ lightboxImage.location }}</span>
              </div>
              <div class="meta-box">
                <span class="meta-label">Date:</span>
                <span class="meta-val">{{ lightboxImage.date }}</span>
              </div>
              <div class="meta-box">
                <span class="meta-label">Project:</span>
                <span class="meta-val">{{ lightboxImage.project || 'SUCOFAM Regional Initiative' }}</span>
              </div>
              <div class="meta-box">
                <span class="meta-label">Partner:</span>
                <span class="meta-val">{{ lightboxImage.partner || 'Local Farmer Cooperatives' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { usePageSeo } from '../composables/usePageSeo.js'
import { ZoomIn, X, MapPin } from 'lucide-vue-next'
import { galleryImages } from '../data/content.js'
import heroBg from '@/assets/img/coffee1.jpg'

usePageSeo({
  title: 'Field Activities Gallery | SUCOFAM Uganda',
  description:
    'Authentic field gallery of SUCOFAM Uganda. Browse photos of coffee harvesting, agroforestry tree planting, farmer training, and beekeeping in the Rwenzori region.',
  path: '/gallery',
  breadcrumbs: [{ name: 'Gallery', path: '/gallery' }]
})

const activeCategory = ref('All')
const lightboxImage = ref(null)
const lightboxClose = ref(null)
let lastGalleryTrigger = null

const categories = computed(() => {
  const cats = [...new Set(galleryImages.map(img => img.category))]
  return ['All', ...cats]
})

const filteredImages = computed(() => {
  if (activeCategory.value === 'All') return galleryImages
  return galleryImages.filter(img => img.category === activeCategory.value)
})

const getSpanClass = (i) => {
  return (i % 5 === 0) ? 'span-wide' : ''
}

const openLightbox = (img) => {
  lastGalleryTrigger = document.activeElement
  lightboxImage.value = img
  nextTick(() => lightboxClose.value?.focus())
}

const closeLightbox = () => {
  lightboxImage.value = null
  nextTick(() => lastGalleryTrigger?.focus?.())
}

const handleLightboxKeydown = (event) => {
  if (lightboxImage.value && event.key === 'Escape') {
    event.preventDefault()
    closeLightbox()
  }
}

onMounted(() => window.addEventListener('keydown', handleLightboxKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', handleLightboxKeydown))
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
  background: var(--primary-deep);
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
  max-width: 750px;
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
  color: rgba(255, 255, 255, 0.75);
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
  padding: 0.6rem 1.4rem;
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
  gap: 1.5rem;
  grid-auto-flow: dense;
}

.gallery-item {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4 / 3;
  box-shadow: var(--shadow-sm);
  background: var(--bg-soft);
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
  background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
}

.gallery-overlay-content {
  color: var(--white);
  width: 100%;
}

.gallery-cat-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gold-light);
  margin-bottom: 0.35rem;
}

.gallery-item-title {
  font-family: var(--ff-serif);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  line-height: 1.3;
}

.gallery-item-loc {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
}

.gallery-zoom-hint {
  font-size: 0.75rem;
  color: var(--accent-light);
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-weight: 600;
}

.gallery-item:hover img {
  transform: scale(1.08);
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

/* Rich Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 5000;
  background: rgba(0, 0, 0, 0.94);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: auto;
}

.lightbox-close {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 5010;
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.25);
  color: var(--white);
}

.lightbox-content {
  max-width: 960px;
  width: 100%;
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  display: grid;
  grid-template-columns: 1.2fr 1fr;
}

.lightbox-image-wrapper {
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image-wrapper img {
  width: 100%;
  height: 100%;
  max-height: 70vh;
  object-fit: cover;
  display: block;
}

.lightbox-details {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
}

.lightbox-tag {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  background: var(--bg-pink);
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  margin-bottom: 0.75rem;
  align-self: flex-start;
}

.lightbox-title {
  font-family: var(--ff-serif);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.lightbox-caption {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.lightbox-meta-grid {
  background: var(--bg-soft);
  border-radius: var(--radius-sm);
  padding: 1.25rem;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: auto;
}

.meta-box {
  display: grid;
  grid-template-columns: 90px 1fr;
  font-size: 0.85rem;
}

.meta-label {
  font-weight: 700;
  color: var(--text-dark);
}

.meta-val {
  color: var(--text-muted);
}

/* Transitions */
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
  .lightbox-content {
    grid-template-columns: 1fr;
    max-height: 85vh;
    overflow-y: auto;
  }
  .lightbox-image-wrapper img {
    max-height: 40vh;
  }
}

@media (max-width: 500px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  .lightbox-details {
    padding: 1.5rem;
  }
}
</style>
