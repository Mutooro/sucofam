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
                <img :src="t.image" :alt="t.name" />
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
  transform: `translateX(-${currentIndex.value * 340}px)`,
  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
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
}

.testimonials-wrapper {
  overflow: hidden;
  padding: 1rem 0;
}

.testimonials-track {
  display: flex;
  gap: 1.5rem;
  cursor: grab;
}

.testimonial-card {
  flex-shrink: 0;
  width: 320px;
  background: var(--white);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  opacity: 0.6;
  transform: scale(0.95);
}

.testimonial-card.active {
  opacity: 1;
  transform: scale(1);
  box-shadow: var(--shadow-md);
  border-color: transparent;
}

.quote-icon {
  font-family: var(--ff-serif);
  font-size: 3rem;
  line-height: 1;
  color: var(--accent);
  opacity: 0.4;
  margin-bottom: 0.5rem;
}

.testimonial-quote {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-body);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.testimonial-author img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--bg-pink);
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--text-dark);
}

.author-role {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.testimonial-nav {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.nav-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(214, 51, 132, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.nav-dot.active {
  background: var(--accent);
  width: 24px;
  border-radius: 5px;
}

.nav-dot:hover {
  background: var(--accent-light);
}

@media (max-width: 768px) {
  .testimonial-card {
    width: 280px;
    padding: 1.5rem;
  }
}
</style>
