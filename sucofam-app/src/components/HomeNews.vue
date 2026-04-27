<template>
  <section class="home-news">
    <div class="container">
      <div class="hn-header reveal">
        <div class="hn-title-group">
          <div class="section-tag">Updates</div>
          <h2 class="section-title">Latest <em>From The Field</em></h2>
        </div>
        <router-link to="/news" class="btn-outline">View All News →</router-link>
      </div>

      <div class="hn-grid">
        <article v-for="article in newsArticles.slice(0, 3)" :key="article.id" class="hn-card reveal">
          <div class="hnc-date">{{ article.date }}</div>
          <h3 class="hnc-title">{{ article.title }}</h3>
          <p class="hnc-summary">{{ article.summary }}</p>
          <router-link to="/news" class="hnc-more">Read More</router-link>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { newsArticles } from '../data/content.js'
</script>

<style scoped>
.home-news {
  padding: 7rem 0;
  background: var(--sec-bg);
}

.hn-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4rem;
  gap: 2rem;
}

.hn-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.hn-card {
  background: var(--white);
  padding: 2.5rem;
  border-radius: 4px;
  border-bottom: 3px solid var(--gold);
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s, box-shadow 0.3s;
}
.hn-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.hnc-date {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--gold);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hnc-title {
  font-family: var(--ff-serif);
  font-size: 1.35rem;
  color: var(--charcoal);
  margin-bottom: 1.2rem;
  line-height: 1.4;
}

.hnc-summary {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 2rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.hnc-more {
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--forest);
  text-decoration: underline;
}

@media (max-width: 900px) {
  .hn-header { flex-direction: column; align-items: flex-start; }
  .hn-grid { grid-template-columns: 1fr; }
}
</style>
