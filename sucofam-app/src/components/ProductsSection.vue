<template>
  <section id="products" class="products-section">
    <div class="container">
      <div class="products-header">
        <div>
          <div class="section-tag">Our Products</div>
          <h2 class="section-title">
            SUCOFAM <em>Branded</em> Products
          </h2>
        </div>
        <p class="section-desc">
          Traceable, farmer-produced, and already on the market — connecting
          Uganda's smallholder farmers to premium value chains.
        </p>
      </div>

      <div class="products-grid">
        <div
          v-for="(product, i) in products"
          :key="product.id"
          class="product-card reveal"
          :style="`transition-delay: ${i * 0.12}s`"
        >
          <!-- Hero banner -->
          <div class="product-banner" :style="`background: ${product.gradient}`">
            <span class="product-emoji">{{ product.emoji }}</span>
            <div class="product-glow" />
          </div>

          <div class="product-body">
            <span class="product-tag">{{ product.tag }}</span>
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-desc">{{ product.desc }}</p>

            <div class="product-footer">
              <span class="pf-badge">Farmer-Produced</span>
              <span class="pf-badge">Traceable</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { products } from '../data/content.js'
</script>

<style scoped>
.products-section {
  padding: 7rem 0;
  background: var(--mist);
}

.products-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  margin-bottom: 3.5rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* Card */
.product-card {
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition), box-shadow var(--transition);
}
.product-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

/* Banner */
.product-banner {
  height: 200px;
  display: flex; align-items: center; justify-content: center;
  position: relative;
  overflow: hidden;
}
.product-emoji {
  font-size: 5rem;
  position: relative; z-index: 2;
  filter: drop-shadow(0 8px 24px rgba(0,0,0,0.25));
  transition: transform 0.4s;
}
.product-card:hover .product-emoji {
  transform: scale(1.1) translateY(-4px);
}
.product-glow {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse at 50% 80%, rgba(255,255,255,0.07) 0%, transparent 65%);
}

/* Body */
.product-body { padding: 1.8rem; }
.product-tag {
  display: inline-block;
  background: var(--parchment);
  color: var(--bark);
  padding: 0.25rem 0.75rem;
  border-radius: 2px;
  font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase; font-weight: 700;
  margin-bottom: 0.8rem;
}
.product-name {
  font-family: var(--ff-serif);
  font-size: 1.45rem; font-weight: 800;
  color: var(--charcoal);
  margin-bottom: 0.7rem;
}
.product-desc {
  font-size: 0.875rem;
  color: var(--text-muted);
  line-height: 1.72;
  margin-bottom: 1.2rem;
}
.product-footer { display: flex; gap: 0.6rem; flex-wrap: wrap; }
.pf-badge {
  font-size: 0.72rem; font-weight: 600;
  background: rgba(14,61,35,0.07);
  color: var(--forest);
  padding: 0.28rem 0.75rem;
  border-radius: 20px;
  letter-spacing: 0.04em;
}

@media (max-width: 900px) {
  .products-header { flex-direction: column; align-items: flex-start; }
  .products-grid { grid-template-columns: 1fr; max-width: 480px; }
}
</style>
