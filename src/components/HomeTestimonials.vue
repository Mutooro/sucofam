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
        <div class="testimonial-stage">
          <button
            class="carousel-control carousel-control--previous"
            type="button"
            aria-label="Show previous testimonial"
            @click="previous"
          >
            <span aria-hidden="true">&larr;</span>
          </button>

          <Transition name="testimonial" mode="out-in">
            <article :key="activeTestimonial.name" class="testimonial-card">
            <div class="testimonial-content">
              <div class="quote-icon">"</div>
              <p class="testimonial-quote">{{ activeTestimonial.quote }}</p>
              <div class="testimonial-author">
                <img :src="activeTestimonial.image" :alt="activeTestimonial.name" loading="lazy" />
                <div class="author-info">
                  <span class="author-name">{{ activeTestimonial.name }}</span>
                  <span class="author-role">{{ activeTestimonial.role }}</span>
                </div>
              </div>
            </div>
            </article>
          </Transition>

          <button
            class="carousel-control carousel-control--next"
            type="button"
            aria-label="Show next testimonial"
            @click="next"
          >
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        <div class="testimonial-nav">
          <button
            v-for="(_, i) in testimonials.length"
            :key="i"
            class="nav-dot"
            :class="{ active: i === currentIndex }"
            :aria-label="`Show testimonial ${i + 1}`"
            :aria-current="i === currentIndex ? 'true' : undefined"
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

const activeTestimonial = computed(() => testimonials[currentIndex.value])

const goTo = (index) => {
  currentIndex.value = index
  resetAutoPlay()
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
  resetAutoPlay()
}

const previous = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
  resetAutoPlay()
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
  padding: 2rem 0;
  position: relative;
}

.testimonial-stage {
  display: grid;
  grid-template-columns: auto minmax(0, 760px) auto;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}

.testimonial-card {
  width: 100%;
  background: var(--white);
  border-radius: 2rem;
  padding: 3rem 2.5rem;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--accent-light);
  display: flex;
  flex-direction: column;
}

.carousel-control {
  width: 48px;
  height: 48px;
  border: 1px solid var(--border);
  border-radius: 50%;
  background: var(--white);
  color: var(--accent);
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-control:hover,
.carousel-control:focus-visible {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--white);
}

.testimonial-enter-active,
.testimonial-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.testimonial-enter-from,
.testimonial-leave-to {
  opacity: 0;
  transform: translateY(12px);
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

@media (max-width: 600px) {
  .testimonial-stage {
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto auto;
    gap: 1rem;
  }

  .testimonial-card {
    grid-column: 1 / -1;
    grid-row: 1;
    padding: 2rem 1.5rem;
  }

  .carousel-control {
    width: 42px;
    height: 42px;
  }

  .carousel-control--previous {
    grid-column: 1;
    grid-row: 2;
    justify-self: end;
  }

  .carousel-control--next {
    grid-column: 3;
    grid-row: 2;
    justify-self: start;
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

</style>
