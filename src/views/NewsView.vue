<template>
  <div class="page-view">
    <div class="page-hero">
      <div class="page-hero-bg">
        <img :src="heroBg" alt="SUCOFAM News and Field Updates" />
        <div class="page-hero-overlay" />
      </div>
      <div class="page-hero-content container">
        <div class="section-tag white reveal">Field Reports &amp; Insights</div>
        <h1 class="page-hero-title reveal reveal-delay-1">Latest News &amp; Updates</h1>
        <p class="page-hero-desc reveal reveal-delay-2">
          Stories, milestones, training dispatches, and partnership developments from our farming communities in Western Uganda.
        </p>
      </div>
    </div>

    <!-- News Grid Section -->
    <section class="news-section bg-white section-padding">
      <div class="container">
        <div class="news-grid">
          <article 
            v-for="(article, i) in newsArticles" 
            :key="article.id"
            :id="`article-${article.id}`"
            class="news-card reveal"
            :class="`reveal-delay-${i % 3}`"
          >
            <div class="news-image">
              <img :src="article.image" :alt="article.title" loading="lazy" />
              <span class="news-cat-tag">{{ article.category }}</span>
            </div>
            
            <div class="news-content">
              <div class="news-meta">
                <span class="news-date">{{ article.date }}</span>
                <span v-if="article.location" class="news-loc"><MapPin :size="12" /> {{ article.location }}</span>
              </div>
              
              <h3 class="news-title">{{ article.title }}</h3>
              <p class="news-summary">{{ article.summary }}</p>
              
              <div class="news-card-footer">
              <button @click="openArticle(article, $event)" class="btn-read-more">
                  Read Full Story <ArrowRight :size="14" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Full Article Reader Modal -->
    <Transition name="article-modal">
      <div v-if="selectedArticle" class="article-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="article-modal-title">
        <div class="article-modal-container" @click.stop>
          <button ref="articleClose" class="modal-close-btn" @click="closeArticle" aria-label="Close article">
            <X :size="24" />
          </button>

          <div class="modal-article-hero">
            <img :src="selectedArticle.image" :alt="selectedArticle.title" />
            <div class="modal-hero-badge">{{ selectedArticle.category }}</div>
          </div>

          <div class="modal-article-body">
            <div class="modal-meta-row">
              <span class="modal-date"><Calendar :size="14" /> {{ selectedArticle.date }}</span>
              <span v-if="selectedArticle.location" class="modal-loc"><MapPin :size="14" /> {{ selectedArticle.location }}</span>
              <span v-if="selectedArticle.author" class="modal-author"><User :size="14" /> {{ selectedArticle.author }}</span>
            </div>

            <h2 id="article-modal-title" class="modal-title">{{ selectedArticle.title }}</h2>

            <div v-if="selectedArticle.relatedProgram" class="modal-program-badge">
              <strong>Related Program:</strong> {{ selectedArticle.relatedProgram }}
            </div>

            <div class="modal-text-content">
              <p class="lead-text">{{ selectedArticle.summary }}</p>
              <div class="content-divider" />
              <p>{{ selectedArticle.content || selectedArticle.summary }}</p>
            </div>

            <div class="modal-footer-actions">
              <button class="btn btn-sm btn-outline" @click="shareArticle(selectedArticle)">
                <Share2 :size="14" /> {{ copied ? 'Link Copied!' : 'Share Story' }}
              </button>
              <button class="btn btn-sm btn-accent" @click="closeArticle">
                Back to News
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import { usePageSeo, toCanonical, SITE_URL } from '../composables/usePageSeo.js'
import { useRoute } from 'vue-router'
import { Calendar, MapPin, User, ArrowRight, X, Share2 } from 'lucide-vue-next'
import { newsArticles } from '../data/content.js'
import heroBg from '@/assets/img/partnership.jpeg'

// The WebPage node's @id/url are derived from the same canonical the <link rel=canonical>
// emits, so structured data and the head can never disagree about the page's spelling.
const newsUrl = toCanonical('/news')

usePageSeo({
  title: 'News & Field Dispatches | SUCOFAM Uganda',
  description:
    'Latest news, field stories, and program dispatches from SUCOFAM Uganda Limited. Follow our work across coffee, cocoa, honey, and climate-smart agriculture.',
  path: '/news',
  breadcrumbs: [{ name: 'News', path: '/news' }],
  graph: [
    {
      '@type': 'WebPage',
      '@id': `${newsUrl}#webpage`,
      name: 'News & Field Dispatches',
      url: newsUrl,
      publisher: { '@id': `${SITE_URL}/#organization` },
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'en'
    }
  ]
})

const route = useRoute()
const selectedArticle = ref(null)
const copied = ref(false)
const articleClose = ref(null)
let lastArticleTrigger = null

const openArticle = (article, event) => {
  lastArticleTrigger = event?.currentTarget || document.activeElement
  selectedArticle.value = article
  window.history.pushState(null, null, `#article-${article.id}`)
  nextTick(() => articleClose.value?.focus())
}

const closeArticle = () => {
  selectedArticle.value = null
  window.history.pushState(null, null, window.location.pathname)
  nextTick(() => lastArticleTrigger?.focus?.())
}

const handleArticleKeydown = (event) => {
  if (selectedArticle.value && event.key === 'Escape') {
    event.preventDefault()
    closeArticle()
  }
}

const shareArticle = (article) => {
  const url = `${window.location.origin}/news#article-${article.id}`
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      copied.value = true
      setTimeout(() => copied.value = false, 2500)
    })
  }
}

// Deep linking to article from hash or query
const checkRouteHash = () => {
  const hash = window.location.hash
  if (hash && hash.startsWith('#article-')) {
    const id = parseInt(hash.replace('#article-', ''), 10)
    const matched = newsArticles.find(a => a.id === id)
    if (matched) {
      selectedArticle.value = matched
    }
  } else if (route.query.id) {
    const id = parseInt(route.query.id, 10)
    const matched = newsArticles.find(a => a.id === id)
    if (matched) {
      selectedArticle.value = matched
    }
  }
}

watch(() => route.hash, () => checkRouteHash())

onMounted(() => {
  checkRouteHash()
  window.addEventListener('keydown', handleArticleKeydown)
})

onBeforeUnmount(() => window.removeEventListener('keydown', handleArticleKeydown))
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
  background: var(--primary-deep);
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
  max-width: 750px;
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
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
}

/* News Grid */
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.news-card {
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--border);
  transition: all 0.35s ease;
  display: flex;
  flex-direction: column;
}

.news-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.news-image {
  position: relative;
  height: 220px;
  overflow: hidden;
  background: var(--bg-soft);
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.news-card:hover .news-image img {
  transform: scale(1.06);
}

.news-cat-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(8, 28, 21, 0.85);
  color: var(--white);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  backdrop-filter: blur(4px);
}

.news-content {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.news-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
}

.news-date {
  font-weight: 700;
  color: var(--accent);
  text-transform: uppercase;
}

.news-loc {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.news-title {
  font-family: var(--ff-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
  line-height: 1.35;
}

.news-summary {
  font-size: 0.92rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-card-footer {
  margin-top: auto;
  border-top: 1px solid var(--border);
  padding-top: 1rem;
}

.btn-read-more {
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--primary);
  transition: gap 0.2s ease;
  padding: 0;
}

.btn-read-more:hover {
  gap: 0.6rem;
  color: var(--accent);
}

/* Article Modal */
.article-modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 5000;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  overflow-y: auto;
}

.article-modal-container {
  position: relative;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0,0,0,0.4);
}

.modal-close-btn {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
  color: var(--white);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.modal-close-btn:hover {
  background: var(--accent);
  transform: scale(1.05);
}

.modal-article-hero {
  position: relative;
  height: 320px;
  background: #111;
}

.modal-article-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-hero-badge {
  position: absolute;
  bottom: 1.25rem;
  left: 1.5rem;
  background: var(--accent);
  color: var(--white);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.85rem;
  border-radius: var(--radius-full);
}

.modal-article-body {
  padding: 2.5rem;
}

.modal-meta-row {
  display: flex;
  gap: 1.5rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.modal-meta-row span {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.modal-title {
  font-family: var(--ff-serif);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.modal-program-badge {
  background: var(--bg-soft);
  border-left: 3px solid var(--primary);
  padding: 0.6rem 1rem;
  border-radius: 4px;
  font-size: 0.88rem;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.lead-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-dark);
  font-weight: 500;
}

.content-divider {
  height: 1px;
  background: var(--border);
  margin: 1.25rem 0;
}

.modal-text-content p {
  font-size: 0.98rem;
  line-height: 1.8;
  color: var(--text-body);
}

.modal-footer-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

/* Transitions */
.article-modal-enter-active,
.article-modal-leave-active {
  transition: opacity 0.3s ease;
}

.article-modal-enter-from,
.article-modal-leave-to {
  opacity: 0;
}

@media (max-width: 900px) {
  .news-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .news-grid { grid-template-columns: 1fr; }
  .modal-article-body { padding: 1.5rem; }
  .modal-article-hero { height: 220px; }
  .modal-title { font-size: 1.4rem; }
}
</style>
