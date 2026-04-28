<template>
  <section class="home-news">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-tag">Updates</div>
        <h2 class="section-title">Latest <em>From The Field</em></h2>
        <div class="section-line" />
      </div>

      <div class="hn-grid">
        <article v-for="(article, i) in newsArticles.slice(0, 3)" :key="article.id" class="hn-card reveal" :class="`reveal-delay-${i}`">
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
      </div>

      <div class="hn-footer reveal">
        <router-link to="/news" class="btn btn-outline">View All News</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import { newsArticles } from '../data/content.js'
</script>

<style scoped>
.home-news {
  padding: var(--section-pad) 0;
  background: var(--white);
}

.hn-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.hn-card {
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.hn-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.hn-image {
  height: 200px;
  overflow: hidden;
}

.hn-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.hn-card:hover .hn-image img {
  transform: scale(1.05);
}

.hn-content {
  padding: 1.5rem;
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
  font-size: 1.15rem;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
  line-height: 1.4;
  font-weight: 700;
}

.hnc-summary {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hnc-more {
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--accent);
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  transition: all 0.2s ease;
}

.hnc-more:hover {
  gap: 0.5rem;
  color: var(--accent-hover);
}

.hn-footer {
  text-align: center;
}

@media (max-width: 900px) {
  .hn-grid { grid-template-columns: 1fr; }
}
</style>
