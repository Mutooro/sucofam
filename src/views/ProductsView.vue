<template>
  <div class="page-view">
    <div class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?auto=format&fit=crop&q=80&w=1920" alt="Products" />
        <div class="page-hero-overlay" />
      </div>
      <div class="page-hero-content container">
        <div class="section-tag white reveal">Our Value Chains</div>
        <h1 class="page-hero-title reveal reveal-delay-1">Value Chains</h1>
        <p class="page-hero-desc reveal reveal-delay-2">
          High-quality, traceable value chains empowering organized Ugandan farmer groups.
        </p>
      </div>
    </div>

    <section class="products-section bg-white section-padding">
      <div class="container">
        <div class="products-grid">
          <div 
            v-for="(product, i) in products" 
            :key="product.id"
            :id="product.id"
            class="product-card reveal"
            :class="`reveal-delay-${i}`"
          >
            <div class="product-visual" :style="{ background: product.gradient }">
              <div class="product-icon">
                <component :is="getIcon(product.icon)" :size="48" />
              </div>
            </div>
            <div class="product-content">
              <span class="product-tag">{{ product.tag }}</span>
              <h3>{{ product.name }}</h3>
              <p>{{ product.desc }}</p>
              <router-link to="/contact" class="btn btn-sm btn-outline">
                Inquire Now <ArrowRight :size="14" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Coffee, Bean, Droplets, ArrowRight } from 'lucide-vue-next'
import { products } from '../data/content.js'

const iconMap = { Coffee, Bean, Droplets }
const getIcon = (name) => iconMap[name] || Coffee
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

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.product-card {
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.product-visual {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-icon {
  color: rgba(255, 255, 255, 0.9);
  opacity: 0.8;
}

.product-content {
  padding: 1.75rem;
}

.product-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  background: var(--bg-pink);
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-full);
  margin-bottom: 0.75rem;
}

.product-content h3 {
  font-family: var(--ff-serif);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.product-content p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

@media (max-width: 900px) {
  .products-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
}
</style>
