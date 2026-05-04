<template>
  <section class="home-testimonials bg-soft">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-tag">Testimonials</div>
        <h2 class="section-title">Voices from the <em>Field</em></h2>
        <div class="section-line" />
        <p class="section-desc">
          Hear from the farmers and partners who have been part of our journey.
        </p>
      </div>

      <div class="testimonials-wrapper">
        <div class="testimonials-track" :style="trackStyle">
          <div 
            v-for="(t, i) in duplicatedTestimonials" 
            :key="`${i}-${t.name}`"
            class="testimonial-card"
            :class="{ active: i === currentIndex }"
          >
            <div class="testimonial-content">
              <div class="quote-icon">"</div>
              <p class="testimonial-quote">{{ t.quote }}</p>
              <div class="testimonial-author">
                <img :src="t.image" :alt="t.name" loading="lazy" />
                <div class="author-info">
                  <span class="author-name">{{ t.name }}</span>
                  <span class="author-role">{{ t.role }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="testimonial-nav">
          <button 
            v-for="(_, i) in testimonials.length" 
            :key="i"
            class="nav-dot"
            :class="{ active: i === activeDot }"
            @click="goTo(i)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { testimonials } from '../data/content.js'

const currentIndex = ref(0)
const autoPlayInterval = ref(null)

const duplicatedTestimonials = computed(() => [...testimonials, ...testimonials])

const activeDot = computed(() => currentIndex.value % testimonials.length)

const trackStyle = computed(() => ({
  transform: `translateX(calc(-${currentIndex.value} * (var(--card-width) + var(--card-gap))))`,
  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
}))

const goTo = (index) => {
  currentIndex.value = index
  resetAutoPlay()
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const resetAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
  }
  autoPlayInterval.value = setInterval(next, 5000)
}

onMounted(() => {
  resetAutoPlay()
})

onUnmounted(() => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
  }
})
</script>

<style scoped>
.home-testimonials {
  padding: var(--section-pad) 0;
  --card-width: 380px;
  --card-gap: 1.5rem;
  overflow: hidden;
}

.testimonials-wrapper {
  padding: 2rem 0;
  position: relative;
}

.testimonials-track {
  display: flex;
  gap: var(--card-gap);
  padding: 0 1rem;
}

.testimonial-card {
  flex-shrink: 0;
  width: var(--card-width);
  background: var(--white);
  border-radius: 2rem;
  padding: 3rem 2.5rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all 0.4s ease;
  opacity: 0.5;
  transform: scale(0.9);
  display: flex;
  flex-direction: column;
}

.testimonial-card.active {
  opacity: 1;
  transform: scale(1);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-light);
}

.quote-icon {
  font-family: var(--ff-serif);
  font-size: 4rem;
  line-height: 1;
  color: var(--accent);
  opacity: 0.2;
  margin-bottom: -1rem;
}

.testimonial-quote {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-dark);
  margin-bottom: 2rem;
  font-style: italic;
  position: relative;
  z-index: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
}

.testimonial-author img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--bg-pink);
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 800;
  font-size: 1rem;
  color: var(--text-dark);
}

.author-role {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 600;
}

.testimonial-nav {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 3rem;
}

.nav-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(166, 124, 82, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.nav-dot.active {
  background: var(--accent);
  width: 32px;
  border-radius: 6px;
}

@media (max-width: 900px) {
  .home-testimonials {
    --card-width: 320px;
  }
}

@media (max-width: 600px) {
  .home-testimonials {
    --card-width: 280px;
    --card-gap: 1rem;
  }
  .testimonial-card {
    padding: 2rem 1.5rem;
  }
  .testimonial-quote {
    font-size: 1rem;
  }
  .section-header {
    text-align: center;
  }
  .section-line {
    margin: 1rem auto;
  }
}

@media (max-width: 400px) {
  .home-testimonials {
    --card-width: 240px;
  }
}
</style>
