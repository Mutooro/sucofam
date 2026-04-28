<template>
  <footer class="app-footer">
    <div class="footer-inner container">
      <div class="footer-top">
        <!-- Brand -->
        <div class="footer-brand">
          <router-link to="/" class="brand-logo">
            <img :src="logoImg" alt="SUCOFAM Logo" class="footer-logo-img" />
          </router-link>
          <p class="brand-tagline">
            Empowering smallholder farmers across Uganda through coffee, cocoa, and honey value chains—ensuring fair incomes and sustainable growth.
          </p>
          <div class="social-row">
            <a class="social-btn" href="mailto:info@sucofam.org" title="Email us">
              <Mail :size="18" />
            </a>
            <a class="social-btn" href="tel:+256782285490" title="Call us">
              <Phone :size="18" />
            </a>
            <a class="social-btn" href="#" title="Facebook">
              <Facebook :size="18" />
            </a>
            <a class="social-btn" href="#" title="Twitter">
              <Twitter :size="18" />
            </a>
          </div>
        </div>

        <!-- Navigate -->
        <div class="footer-col">
          <h4 class="col-heading">Quick Links</h4>
          <ul>
            <li v-for="link in navLinks" :key="link.section">
              <router-link :to="{ name: link.section }">{{ link.label }}</router-link>
            </li>
            <li><router-link to="/contact">Partner With Us</router-link></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-col">
          <h4 class="col-heading">Contact</h4>
          <ul class="contact-list">
            <li>
              <MapPin :size="16" class="inline-icon" />
              <span>Kasese-Uganda, Rwenzori Road</span>
            </li>
            <li>
              <Mail :size="16" class="inline-icon" />
              <a href="mailto:info@sucofam.org">info@sucofam.org</a>
            </li>
            <li>
              <Phone :size="16" class="inline-icon" />
              <div class="phone-list">
                <a href="tel:+256782285490">+256 782 285 490</a>
                <a href="tel:+256775199363">+256 775 199 363</a>
                <a href="tel:+256706432002">+256 706 432 002</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <span class="copy">© {{ year }} SUCOFAM. All rights reserved.</span>
        <span class="copy">Empowering Farmers, Building Futures.</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Mail, Phone, Facebook, MapPin, Twitter } from 'lucide-vue-next'
import { navLinks } from '../data/content.js'
import logoImg from '@/assets/img/logo.jpeg'

const year = new Date().getFullYear()
</script>

<style scoped>
.app-footer {
  background: var(--primary-dark);
  color: rgba(255, 255, 255, 0.7);
}

.footer-inner {
  padding: 4rem 0 2rem;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* Brand */
.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.2rem;
}

.footer-logo-img {
  height: 56px;
  width: auto;
  border-radius: var(--radius-sm);
}

.brand-logo span {
  font-family: var(--ff-serif);
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--white);
  letter-spacing: -0.02em;
}

.brand-tagline {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 300px;
  margin-bottom: 1.5rem;
}

.social-row {
  display: flex;
  gap: 0.75rem;
}

.social-btn {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}

.social-btn:hover {
  border-color: var(--accent);
  background: rgba(166, 124, 82, 0.15);
  color: var(--accent);
}

/* Cols */
.col-heading {
  color: var(--white);
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-col a,
.footer-col span {
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.9rem;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.footer-col a:hover {
  color: var(--accent);
}

.contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
}

.phone-list {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.inline-icon {
  flex-shrink: 0;
  color: var(--accent);
}

/* Bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.copy {
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
}
</style>
