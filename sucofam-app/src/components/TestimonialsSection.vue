<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="testimonials-header">
        <div class="section-tag">Voices From The Ground</div>
        <h2 class="section-title">What Farmers & <em>Partners</em> Say</h2>
      </div>

      <div class="testimonials-grid">
        <div
          v-for="(item, i) in testimonials"
          :key="item.name"
          class="testimonial-card reveal"
          :style="`transition-delay: ${i * 0.1}s`"
        >
          <div class="quote-icon">
            <Quote :size="32" />
          </div>
          <p class="testimonial-text">"{{ item.quote }}"</p>
          <div class="testimonial-author">
            <img :src="item.image" :alt="item.name" class="author-image" />
            <div class="author-info">
              <span class="author-name">{{ item.name }}</span>
              <span class="author-role">{{ item.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { testimonials } from '../data/content.js'
import { Quote } from 'lucide-vue-next'
</script>

<style scoped>
.testimonials-section {
  padding: 8rem 0;
  background: var(--sec-bg);
  position: relative;
  overflow: hidden;
}

.testimonials-section::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: radial-gradient(circle at 20% 30%, rgba(201, 168, 76, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.testimonials-header {
  margin-bottom: 4rem;
  text-align: center;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.testimonial-card {
  background: var(--white);
  padding: 3rem 2.5rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-md);
  position: relative;
  display: flex;
  flex-direction: column;
}

.quote-icon {
  color: var(--gold);
  opacity: 0.2;
  margin-bottom: 1.5rem;
}

.testimonial-text {
  font-family: var(--ff-serif);
  font-size: 1.1rem;
  font-style: italic;
  color: var(--charcoal);
  line-height: 1.7;
  margin-bottom: 2rem;
  flex: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(14, 61, 35, 0.08);
}

.author-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--gold);
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--charcoal);
}

.author-role {
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

@media (max-width: 1000px) {
  .testimonials-grid { grid-template-columns: 1fr; max-width: 600px; margin: 0 auto; }
}
</style>
