<template>
  <transition name="cookie-fade">
    <div v-if="!hasConsented" class="cookie-consent" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
      <div class="cookie-content">
        <h2 id="cookie-title" class="cookie-title">Cookie preferences</h2>
        <p id="cookie-description" class="cookie-message">
          We use essential storage to remember your choice. Optional analytics and marketing storage stays disabled unless you allow it.
        </p>
        <div v-if="showPreferences" class="cookie-preferences">
          <label v-for="category in categories" :key="category.id" class="cookie-preference">
            <input v-model="preferences[category.id]" type="checkbox" :disabled="category.required" />
            <span>
              <strong>{{ category.label }}</strong>
              <small>{{ category.description }}</small>
            </span>
          </label>
        </div>
        <div class="cookie-actions">
          <button type="button" @click="acceptCookies" class="cookie-accept">
            Accept
          </button>
          <button type="button" @click="rejectCookies" class="cookie-reject">
            Reject optional
          </button>
          <button type="button" @click="showPreferences = !showPreferences" class="cookie-preferences-toggle" :aria-expanded="showPreferences">
            {{ showPreferences ? 'Hide preferences' : 'Preferences' }}
          </button>
          <router-link to="/contact" class="cookie-learn">
            Learn more
          </router-link>
        </div>
        <button type="button" @click="rejectCookies" class="cookie-close" aria-label="Reject optional cookies and close">
          <X :size="16" />
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { X } from 'lucide-vue-next'

const hasConsented = ref(false)
const showPreferences = ref(false)
const preferences = ref({ essential: true, analytics: false, marketing: false })

const categories = [
  { id: 'essential', label: 'Essential', description: 'Required to remember consent and keep the site working.', required: true },
  { id: 'analytics', label: 'Analytics', description: 'Optional measurement to help us improve the site.', required: false },
  { id: 'marketing', label: 'Marketing', description: 'Optional personalization and campaign measurement.', required: false }
]

const consentKey = 'sucofamCookieConsent'

onMounted(() => {
  // Check if user has already consented
  const storedConsent = localStorage.getItem(consentKey)
  if (storedConsent) {
    try {
      preferences.value = { ...preferences.value, ...JSON.parse(storedConsent), essential: true }
    } catch {
      // Ignore malformed legacy storage and show the preferences again.
    }
    hasConsented.value = true
  }
})

const acceptCookies = () => {
  saveConsent(preferences.value)
}

const rejectCookies = () => {
  saveConsent({ essential: true, analytics: false, marketing: false })
}

const saveConsent = (value) => {
  localStorage.setItem(consentKey, JSON.stringify(value))
  hasConsented.value = true
}
</script>

<style scoped>
.cookie-consent {
  position: fixed;
  bottom: 30px;
  right: 30px;
  max-width: 400px;
  background: var(--primary);
  color: var(--white);
  padding: 1.5rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  z-index: 9999;
  animation: slideIn 0.5s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cookie-content {
  position: relative;
  padding-right: 2rem;
}

.cookie-message {
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  color: var(--white);
}

.cookie-title {
  margin-bottom: 0.5rem;
  color: var(--white);
  font-size: 1.1rem;
}

.cookie-preferences {
  display: grid;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.cookie-preference {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  font-size: 0.8rem;
}

.cookie-preference input {
  margin-top: 0.2rem;
  accent-color: var(--accent);
}

.cookie-preference small {
  display: block;
  margin-top: 0.15rem;
  opacity: 0.8;
}

.cookie-actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.cookie-accept {
  background: var(--accent);
  color: var(--white);
  border: none;
  padding: 0.6rem 1.25rem;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition);
}

.cookie-reject,
.cookie-preferences-toggle {
  color: var(--white);
  padding: 0.6rem 0.25rem;
  font-size: 0.8rem;
  text-decoration: underline;
}

.cookie-actions {
  flex-wrap: wrap;
}

.cookie-accept:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
}

.cookie-learn {
  color: var(--white);
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: underline;
  transition: opacity var(--transition);
}

.cookie-learn:hover {
  opacity: 0.8;
}

.cookie-close {
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  color: var(--white);
  cursor: pointer;
  padding: 0.25rem;
  transition: opacity var(--transition);
  opacity: 0.7;
}

.cookie-close:hover {
  opacity: 1;
}

.cookie-fade-enter-active,
.cookie-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.cookie-fade-enter-from,
.cookie-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

@media (max-width: 768px) {
  .cookie-consent {
    bottom: 20px;
    right: 20px;
    left: 20px;
    max-width: none;
  }

  .cookie-content {
    padding-right: 1.5rem;
  }
}
</style>
