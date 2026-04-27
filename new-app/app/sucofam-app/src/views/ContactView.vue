<template>
  <div class="page-view">
    <div class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=1920" alt="Contact" />
        <div class="page-hero-overlay" />
      </div>
      <div class="page-hero-content container">
        <div class="section-tag white reveal">Get In Touch</div>
        <h1 class="page-hero-title reveal reveal-delay-1">Contact Us</h1>
        <p class="page-hero-desc reveal reveal-delay-2">
          Reach out to partner, volunteer, or learn more about our work across Uganda.
        </p>
      </div>
    </div>

    <section class="contact-section bg-white section-padding">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info reveal">
            <h2 class="heading-md">Let's Connect</h2>
            <div class="section-line" />
            <p class="text-body">
              Whether you're interested in partnering, volunteering, donating, or simply learning more 
              about SUCOFAM's work, we'd love to hear from you.
            </p>

            <div class="info-items">
              <div class="info-item">
                <div class="info-icon">
                  <MapPin :size="22" />
                </div>
                <div>
                  <span class="info-label">Address</span>
                  <span class="info-value">Kasese, Uganda</span>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <Mail :size="22" />
                </div>
                <div>
                  <span class="info-label">Email</span>
                  <a href="mailto:info@sucofam.org" class="info-value">info@sucofam.org</a>
                </div>
              </div>
              <div class="info-item">
                <div class="info-icon">
                  <Phone :size="22" />
                </div>
                <div>
                  <span class="info-label">Phone</span>
                  <a href="tel:+256782285490" class="info-value">+256 782 285 490</a>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper reveal reveal-delay-1">
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input type="text" id="name" placeholder="Your name" required />
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input type="email" id="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" placeholder="How can we help?" required />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" rows="5" placeholder="Tell us more..." required></textarea>
              </div>
              <button type="submit" class="btn btn-accent" :disabled="submitting">
                <span v-if="!submitting">Send Message <Send :size="16" /></span>
                <span v-else>Sending...</span>
              </button>
              <p v-if="submitted" class="form-success">Thank you! We'll be in touch soon.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MapPin, Mail, Phone, Send } from 'lucide-vue-next'

const submitting = ref(false)
const submitted = ref(false)

const handleSubmit = () => {
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    submitted.value = true
    setTimeout(() => submitted.value = false, 4000)
  }, 1500)
}
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
}

.contact-info p {
  margin-bottom: 2rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.info-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: var(--bg-pink);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-label {
  display: block;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.25rem;
}

.info-value {
  display: block;
  font-weight: 600;
  color: var(--text-dark);
  font-size: 1rem;
  transition: color 0.2s;
}

.info-value:hover {
  color: var(--accent);
}

.contact-form-wrapper {
  background: var(--white);
  border-radius: var(--radius);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-dark);
}

.form-group input,
.form-group textarea {
  padding: 0.85rem 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-family: inherit;
  font-size: 0.95rem;
  color: var(--text-dark);
  background: var(--white);
  transition: all 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(214, 51, 132, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-success {
  color: var(--primary);
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
