<template>
  <div class="page-view">
    <div class="view-spacer" />
    
    <section class="news-list-section">
      <div class="container">
        <div class="news-list-header reveal">
          <div class="section-tag">Latest Updates</div>
          <h2 class="section-title">SUCOFAM <em>News & Blog</em></h2>
          <p class="section-desc">Stay updated with our latest field activities, milestones, and success stories.</p>
        </div>

        <div class="news-list-grid">
          <article 
            v-for="article in newsArticles" 
            :key="article.id" 
            class="news-list-card reveal"
          >
            <div class="nc-image">
              <img :src="article.image" :alt="article.title" />
            </div>
            <div class="nc-content">
              <span class="nc-date">{{ article.date }}</span>
              <h3 class="nc-title">{{ article.title }}</h3>
              <p class="nc-summary">{{ article.summary }}</p>
              <a href="#" class="nc-link">Read Full Article →</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { newsArticles } from '../data/content.js'
</script>

<style scoped>
.page-view { min-height: 80vh; }
.view-spacer { height: 80px; background: var(--forest); }

.news-list-section { padding: 7rem 0; background: var(--main-bg); }

.news-list-header { margin-bottom: 4rem; text-align: center; }

.news-list-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.news-list-card {
  background: var(--white);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s;
}
.news-list-card:hover { transform: translateY(-8px); }

.nc-image { height: 200px; overflow: hidden; background: #eee; }
.nc-image img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; }

.nc-content { padding: 2rem; }
.nc-date { display: block; font-size: 0.75rem; color: var(--gold); font-weight: 700; margin-bottom: 0.8rem; text-transform: uppercase; }
.nc-title { font-family: var(--ff-serif); font-size: 1.25rem; color: var(--charcoal); margin-bottom: 1rem; line-height: 1.4; }
.nc-summary { font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 1.5rem; }
.nc-link { font-size: 0.85rem; font-weight: 700; color: var(--forest); text-decoration: none; border-bottom: 2px solid var(--gold); padding-bottom: 2px; transition: color 0.3s; }
.nc-link:hover { color: var(--gold); }

@media (max-width: 1000px) { .news-list-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) { .news-list-grid { grid-template-columns: 1fr; } }
</style>
