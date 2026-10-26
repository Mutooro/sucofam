<template>
  <div class="page-view">
    <div class="page-hero">
      <div class="page-hero-bg">
        <img :src="heroBg" alt="Contact SUCOFAM" />
        <div class="page-hero-overlay" />
      </div>
      <div class="page-hero-content container">
        <div class="section-tag white reveal">Get In Touch</div>
        <h1 class="page-hero-title reveal reveal-delay-1">Contact Us</h1>
        <p class="page-hero-desc reveal reveal-delay-2">
          Connect with our headquarters in Kasese or our coordination office in Kampala for partnerships, sourcing, or institutional inquiries.
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
              Whether you are an institutional donor, commercial off-taker, development researcher, or prospective partner, our team is ready to assist you.
            </p>

            <div class="info-items">
              <div v-for="loc in officeLocations" :key="loc.type" class="info-item">
                <div class="info-icon">
                  <MapPin :size="22" />
                </div>
                <div>
                  <span class="info-label">{{ loc.type }}</span>
                  <span class="info-value">{{ loc.address }}</span>
                  <span class="info-detail">{{ loc.details }}</span>
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon">
                  <Mail :size="22" />
                </div>
                <div>
                  <span class="info-label">General &amp; Commercial Inquiries</span>
                  <a href="mailto:info.sucofam@gmail.com" class="info-value">info.sucofam@gmail.com</a>
                </div>
              </div>

              <!-- <div class="info-item">
                <div class="info-icon">
                  <ShieldCheck :size="22" />
                </div>
                <div>
                  <span class="info-label">Ethics &amp; Confidential Whistleblowing</span>
                  <a href="mailto:ethics@sucofam.org" class="info-value">ethics@sucofam.org</a>
                </div>
              </div> -->

              <div class="info-item">
                <div class="info-icon">
                  <Phone :size="22" />
                </div>
                <div>
                  <span class="info-label">Phone &amp; WhatsApp</span>
                  <div class="info-phone-list">
                    <a href="tel:+256782285490" class="info-value">+256 782 285 490</a>
                    <a href="tel:+256775199363" class="info-value">+256 775 199 363</a>
                    <a href="tel:+256706432002" class="info-value">+256 706 432 002</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper reveal reveal-delay-1">
            <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
              <div class="form-row">
                <div class="form-group" :class="{ 'has-error': errors.name, 'has-success': touched.name && !errors.name && formData.name }">
                  <label for="name">Full Name <span class="required">*</span></label>
                  <input
                    type="text"
                    id="name"
                    v-model="formData.name"
                    placeholder="Your name"
                    @blur="validateField('name')"
                    @input="clearError('name')"
                    :class="{ 'error': errors.name }"
                    required
                    :aria-invalid="errors.name ? 'true' : 'false'"
                    aria-describedby="name-error"
                  />
                  <span id="name-error" v-if="errors.name" class="error-message" role="alert">{{ errors.name }}</span>
                  <span v-if="touched.name && !errors.name && formData.name" class="success-icon"><Check :size="16" /></span>
                </div>
                <div class="form-group" :class="{ 'has-error': errors.email, 'has-success': touched.email && !errors.email && formData.email }">
                  <label for="email">Email Address <span class="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    placeholder="your@email.com"
                    @blur="validateField('email')"
                    @input="clearError('email')"
                    :class="{ 'error': errors.email }"
                    required
                    :aria-invalid="errors.email ? 'true' : 'false'"
                    aria-describedby="email-error"
                  />
                  <span id="email-error" v-if="errors.email" class="error-message" role="alert">{{ errors.email }}</span>
                  <span v-if="touched.email && !errors.email && formData.email" class="success-icon"><Check :size="16" /></span>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="org">Organization / Company</label>
                  <input type="text" id="org" v-model="formData.org" placeholder="Company or Agency name (optional)" />
                </div>
                <div class="form-group">
                  <label for="inquiryType">Inquiry Category</label>
                  <select id="inquiryType" v-model="formData.inquiryType">
                    <option value="partnership">Strategic Partnership</option>
                    <option value="coffee">Coffee Sourcing / Samples</option>
                    <option value="cocoa">Cocoa Sourcing / Samples</option>
                    <option value="honey">Honey Sourcing / Samples</option>
                    <option value="nexuscafe">NexusCafe Commercial Orders</option>
                    <option value="due-diligence">Institutional Due Diligence</option>
                    <option value="general">General Inquiries</option>
                  </select>
                </div>
              </div>

              <div class="form-group" :class="{ 'has-error': errors.subject, 'has-success': touched.subject && !errors.subject && formData.subject }">
                <label for="subject">Subject <span class="required">*</span></label>
                <input
                  type="text"
                  id="subject"
                  v-model="formData.subject"
                  placeholder="How can we assist you?"
                  @blur="validateField('subject')"
                  @input="clearError('subject')"
                  :class="{ 'error': errors.subject }"
                    required
                    :aria-invalid="errors.subject ? 'true' : 'false'"
                    aria-describedby="subject-error"
                />
                <span id="subject-error" v-if="errors.subject" class="error-message" role="alert">{{ errors.subject }}</span>
                <span v-if="touched.subject && !errors.subject && formData.subject" class="success-icon"><Check :size="16" /></span>
              </div>

              <div class="form-group" :class="{ 'has-error': errors.message, 'has-success': touched.message && !errors.message && formData.message }">
                <label for="message">Message <span class="required">*</span></label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="4"
                  placeholder="Provide details regarding your inquiry or volume specifications..."
                  @blur="validateField('message')"
                  @input="clearError('message')"
                  :class="{ 'error': errors.message }"
                  required
                  :aria-invalid="errors.message ? 'true' : 'false'"
                  aria-describedby="message-error"
                ></textarea>
                <span id="message-error" v-if="errors.message" class="error-message" role="alert">{{ errors.message }}</span>
                <span v-if="touched.message && !errors.message && formData.message" class="success-icon"><Check :size="16" /></span>
              </div>

              <button type="submit" class="btn btn-accent" :disabled="submitting">
                <span v-if="!submitting">Send Message <Send :size="16" /></span>
                <span v-else>Sending...</span>
              </button>
              <p v-if="submitted" class="form-success">Thank you! Your message has been received and our team will respond shortly.</p>
              <p v-if="submitError" class="form-error" role="alert">{{ submitError }}</p>
            </form>
          </div>
        </div>

        <div class="map-section reveal">
          <div class="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.053641771!2d30.0768311!3d0.1874221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17616611f7a00001%3A0x8b3b3b3b3b3b3b3b!2sKasese!5e0!3m2!1sen!2sug!4v1714285000000!5m2!1sen!2sug" 
              width="100%" 
              height="400" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="SUCOFAM Kasese Office Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { usePageSeo } from '../composables/usePageSeo.js'
import { MapPin, Mail, Phone, Send, Check } from 'lucide-vue-next'
import { officeLocations } from '../data/content.js'
import heroBg from '@/assets/img/coffee1.jpg'

usePageSeo({
  title: 'Contact SUCOFAM | Offices in Kasese & Kampala',
  description:
    'Contact SUCOFAM Uganda Limited. Connect with our Head Office in Kasese or Coordination Desk in Kampala for value chain sourcing, partnership opportunities, and inquiries.',
  path: '/contact',
  breadcrumbs: [{ name: 'Contact', path: '/contact' }]
})

const submitting = ref(false)
const submitted = ref(false)
const submitError = ref('')
const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT

const formData = ref({
  name: '',
  email: '',
  org: '',
  inquiryType: 'partnership',
  subject: '',
  message: ''
})

const errors = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const touched = ref({
  name: false,
  email: false,
  subject: false,
  message: false
})

const hasErrors = computed(() => {
  return Object.values(errors.value).some(error => error !== '')
})

const validateField = (field) => {
  touched.value[field] = true

  switch (field) {
    case 'name':
      if (!formData.value.name.trim()) {
        errors.value.name = 'Name is required'
      } else if (formData.value.name.trim().length < 2) {
        errors.value.name = 'Name must be at least 2 characters'
      } else {
        errors.value.name = ''
      }
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!formData.value.email.trim()) {
        errors.value.email = 'Email is required'
      } else if (!emailRegex.test(formData.value.email)) {
        errors.value.email = 'Please enter a valid email address'
      } else {
        errors.value.email = ''
      }
      break
    case 'subject':
      if (!formData.value.subject.trim()) {
        errors.value.subject = 'Subject is required'
      } else if (formData.value.subject.trim().length < 5) {
        errors.value.subject = 'Subject must be at least 5 characters'
      } else {
        errors.value.subject = ''
      }
      break
    case 'message':
      if (!formData.value.message.trim()) {
        errors.value.message = 'Message is required'
      } else if (formData.value.message.trim().length < 10) {
        errors.value.message = 'Message must be at least 10 characters'
      } else {
        errors.value.message = ''
      }
      break
  }
}

const clearError = (field) => {
  if (errors.value[field]) {
    errors.value[field] = ''
  }
}

const validateAll = () => {
  Object.keys(errors.value).forEach(field => {
    validateField(field)
  })
  return !hasErrors.value
}

const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    org: '',
    inquiryType: 'partnership',
    subject: '',
    message: ''
  }
  errors.value = { name: '', email: '', subject: '', message: '' }
  touched.value = { name: false, email: false, subject: false, message: false }
}

const handleSubmit = async () => {
  if (!validateAll()) {
    return
  }

  submitting.value = true
  submitError.value = ''

  if (!contactEndpoint) {
    submitError.value = 'Contact submission is not configured yet. Please email info.sucofam@gmail.com directly.'
    submitting.value = false
    return
  }

  try {
    const response = await fetch(contactEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData.value })
    })

    if (!response.ok) throw new Error(`Contact submission failed with status ${response.status}`)

    submitted.value = true
    resetForm()
    window.setTimeout(() => { submitted.value = false }, 5000)
  } catch (error) {
    console.error('Contact form submission failed', error)
    submitError.value = 'We could not send your message. Please try again or email info.sucofam@gmail.com directly.'
  } finally {
    submitting.value = false
  }
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
}

.contact-info p {
  margin-bottom: 2rem;
  font-size: 0.95rem;
  line-height: 1.7;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  font-size: 0.75rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.info-value {
  display: block;
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.95rem;
  transition: color 0.2s;
}

.info-value:hover {
  color: var(--accent);
}

.info-phone-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.info-detail {
  display: block;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
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
  position: relative;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-dark);
}

.required {
  color: var(--accent);
  margin-left: 2px;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.8rem 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-family: inherit;
  font-size: 0.92rem;
  color: var(--text-dark);
  background: var(--white);
  transition: all 0.2s ease;
}

.form-group input:focus-visible,
.form-group select:focus-visible,
.form-group textarea:focus-visible {
  border-color: var(--accent-hover);
}

.form-group input.error,
.form-group textarea.error {
  border-color: var(--error-text);
  box-shadow: 0 0 0 3px rgba(179, 38, 30, 0.12);
}

.form-group.has-success input,
.form-group.has-success textarea {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(116, 161, 46, 0.1);
}

.error-message {
  display: block;
  color: var(--error-text);
  font-weight: 600;
  font-size: 0.78rem;
  margin-top: 0.35rem;
  animation: slideDown 0.2s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-icon {
  position: absolute;
  right: 1rem;
  top: 2.6rem;
  color: var(--primary);
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.form-group textarea {
  resize: vertical;
  min-height: 110px;
}

.form-success {
  color: var(--primary);
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  background: var(--bg-green);
  padding: 0.75rem;
  border-radius: var(--radius-sm);
}

.form-error {
  color: var(--error-text);
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  background: var(--error-bg);
  border: 1px solid var(--error-text);
  padding: 0.75rem;
  border-radius: var(--radius-sm);
}

.map-section {
  margin-top: 4rem;
}

.map-wrapper {
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border);
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
