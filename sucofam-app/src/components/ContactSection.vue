<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="contact-header">
        <div class="section-tag">Get In Touch</div>
        <h2 class="section-title">Partner With <em>SUCOFAM</em></h2>
      </div>

      <div class="contact-grid">
        <!-- Info column -->
        <div class="contact-info reveal">
          <h3 class="info-heading">Let's Build Together</h3>
          <p class="info-desc">
            Whether you're a donor, investor, market partner, or institution —
            we welcome collaboration that advances smallholder farmer empowerment
            across Uganda.
          </p>

          <div class="contact-details">
            <div v-for="detail in contactDetails" :key="detail.label" class="detail-row">
              <span class="detail-icon">{{ detail.icon }}</span>
              <div class="detail-body">
                <strong>{{ detail.label }}</strong>
                <span>{{ detail.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Form column -->
        <div class="contact-form-wrap reveal reveal-delay-2">
          <form class="contact-form" @submit.prevent="submit">
            <div class="form-row">
              <div class="form-group">
                <label for="firstName">First Name</label>
                <input id="firstName" v-model="form.firstName" type="text" placeholder="Jane" />
              </div>
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <input id="lastName" v-model="form.lastName" type="text" placeholder="Doe" />
              </div>
            </div>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input id="email" v-model="form.email" type="email" placeholder="jane@example.com" required />
            </div>

            <div class="form-group">
              <label for="org">Organization</label>
              <input id="org" v-model="form.org" type="text" placeholder="Your organization (optional)" />
            </div>

            <div class="form-group">
              <label for="interest">Partnership Interest</label>
              <select id="interest" v-model="form.interest">
                <option value="">Select an area...</option>
                <option>Funding / Grants</option>
                <option>Market Partnerships</option>
                <option>Technical Support</option>
                <option>Research Collaboration</option>
                <option>Volunteer / Internship</option>
                <option>Other</option>
              </select>
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                placeholder="Tell us how you'd like to collaborate..."
                required
              />
            </div>

            <button type="submit" class="btn-primary submit-btn" :class="{ sent: formSent }">
              <Transition name="btn-swap" mode="out-in">
                <span v-if="formSent" key="sent">✓ Message Sent!</span>
                <span v-else key="send">Send Message →</span>
              </Transition>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formSent = ref(false)
const form = reactive({ firstName: '', lastName: '', email: '', org: '', interest: '', message: '' })

const contactDetails = [
  { icon: '📍', label: 'Head Office',         value: 'P.O.Box 430664, Rwenzori Road, Kasese Municipality' },
  { icon: '🏢', label: 'Coordination Office', value: 'Equatorial Mall, RM 09, Kampala Road, Kampala' },
  { icon: '🌾', label: 'Field Office',         value: 'Hapuuyo Sub County, Kyegegwa District' },
  { icon: '📞', label: 'Phone',                value: '+256 782 285 490 / +256 775 199 363 / +256 706 432 002' },
  { icon: '✉️', label: 'Email',                value: 'info.sucofam@gmail.com' },
]

function submit() {
  if (!form.email || !form.message) return
  formSent.value = true
  setTimeout(() => {
    formSent.value = false
    Object.assign(form, { firstName: '', lastName: '', email: '', org: '', interest: '', message: '' })
  }, 4000)
}
</script>

<style scoped>
.contact-section {
  padding: 7rem 0;
  background: var(--white);
}
.contact-header { margin-bottom: 3.5rem; }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 5rem;
  align-items: start;
}

/* Info */
.info-heading {
  font-family: var(--ff-serif);
  font-size: 1.5rem; font-weight: 800;
  color: var(--charcoal);
  margin-bottom: 0.8rem;
}
.info-desc {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 0.97rem;
}

.contact-details { display: flex; flex-direction: column; gap: 1.4rem; }
.detail-row {
  display: flex; align-items: flex-start; gap: 1rem;
}
.detail-icon { font-size: 1.2rem; width: 36px; flex-shrink: 0; margin-top: 0.1rem; }
.detail-body { display: flex; flex-direction: column; gap: 0.15rem; }
.detail-body strong {
  font-size: 0.72rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.14em;
  color: var(--gold);
}
.detail-body span { color: var(--text-muted); font-size: 0.9rem; line-height: 1.55; }

/* Form */
.contact-form {
  display: flex; flex-direction: column; gap: 1.2rem;
}
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-group { display: flex; flex-direction: column; gap: 0.4rem; }
.form-group label {
  font-size: 0.75rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--text-mid);
}
.form-group input,
.form-group textarea,
.form-group select {
  padding: 0.9rem 1rem;
  border: 1.5px solid rgba(14,61,35,0.12);
  border-radius: var(--radius);
  background: var(--grey-light);
  font-family: var(--ff-sans);
  font-size: 0.9rem;
  color: var(--charcoal);
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(197,160,74,0.1);
  background: var(--white);
}
.form-group textarea { resize: vertical; min-height: 130px; }

.submit-btn {
  align-self: flex-start;
  min-width: 180px;
  justify-content: center;
}
.submit-btn.sent {
  background: var(--leaf);
  color: var(--white);
}

.btn-swap-enter-active, .btn-swap-leave-active { transition: opacity 0.2s, transform 0.2s; }
.btn-swap-enter-from { opacity: 0; transform: translateY(8px); }
.btn-swap-leave-to  { opacity: 0; transform: translateY(-8px); }

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 3rem; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
