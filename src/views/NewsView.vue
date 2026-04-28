<template>
  <div class="page-view">
    <div class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1523741543316-beb120fc75f4?auto=format&fit=crop&q=80&w=1920" alt="News" />
        <div class="page-hero-overlay" />
      </div>
      <div class="page-hero-content container">
        <div class="section-tag white reveal">Updates</div>
        <h1 class="page-hero-title reveal reveal-delay-1">Latest News</h1>
        <p class="page-hero-desc reveal reveal-delay-2">
          Stay informed about our programs, milestones, and community stories.
        </p>
      </div>
    </div>

    <section class="news-section bg-white section-padding">
      <div class="container">
        <div class="news-grid">
          <article 
            v-for="(article, i) in newsArticles" 
            :key="article.id"
            class="news-card reveal"
            :class="`reveal-delay-${i % 3}`"
          >
            <div class="news-image">
              <img :src="article.image" :alt="article.title" />
            </div>
            <div class="news-content">
              <div class="news-date">{{ article.date }}</div>
              <h3>{{ article.title }}</h3>
              <p>{{ article.summary }}</p>
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

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.news-card {
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.news-image {
  height: 220px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.news-card:hover .news-image img {
  transform: scale(1.05);
}

.news-content {
  padding: 1.75rem;
}

.news-date {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.news-content h3 {
  font-family: var(--ff-serif);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.news-content p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-muted);
}

@media (max-width: 900px) {
  .news-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
}
</style>
