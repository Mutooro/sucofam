<template>
  <footer class="app-footer">
    <div class="footer-inner container">
      <div class="footer-top">
        <!-- Brand -->
        <div class="footer-brand">
          <router-link to="/" class="brand-logo">
            <img src="/logo.jpeg" alt="SUCOFAM Logo" class="footer-logo-img" />
          </router-link>

          <p class="brand-tagline">
            Transforming farming households across Uganda through inclusive,
            market-driven agricultural empowerment.
          </p>
          <div class="social-row">
            <a class="social-btn" href="mailto:info@sucofam.org" title="Email us">✉️</a>
            <a class="social-btn" href="tel:+256782285490" title="Call us">📞</a>
          </div>
        </div>

        <!-- Navigate -->
        <div class="footer-col">
          <h4 class="col-heading">Navigate</h4>
          <ul>
            <li v-for="link in navLinks" :key="link.section">
              <router-link :to="{ name: link.section }">{{ link.label }}</router-link>
            </li>
            <li><router-link to="/contact">Partner With Us</router-link></li>
          </ul>
        </div>

        <!-- Value Chains -->
        <div class="footer-col">
          <h4 class="col-heading">Value Chains</h4>
          <ul>
            <li><a>Coffee</a></li>
            <li><a>Cocoa</a></li>
            <li><a>Honey</a></li>
            <li><a>Market Access</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-col">
          <h4 class="col-heading">Contact</h4>
          <ul>
            <li><a href="mailto:info@sucofam.org">info@sucofam.org</a></li>
            <li><a href="tel:+256782285490">+256 782 285 490</a></li>
            <li><a>Kasese, Uganda</a></li>
          </ul>
        </div>

      </div>

      <div class="footer-bottom">
        <span class="copy">© {{ year }} SUCOFAM. All rights reserved. Kasese, Uganda.</span>
        <span class="copy">Empowering Farmers. Building Futures.</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { navLinks } from '../data/content.js'


const year = new Date().getFullYear()
</script>

<style scoped>
.app-footer {
  background: var(--footer-bg);
  color: var(--white);
}

.footer-inner { padding: 4.5rem 2rem 2rem; }

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

/* Brand */
.brand-logo {
  display: flex; align-items: center; gap: 0.7rem;
  margin-bottom: 1rem;
}
.footer-logo-img {
  height: 50px;
  width: auto;
  border-radius: 4px;
}
.brand-tagline {
  color: rgba(255,255,255,0.45);
  font-size: 0.85rem; line-height: 1.7;
  max-width: 260px;
  margin-top: 1rem;
  margin-bottom: 1.4rem;
}

.social-row { display: flex; gap: 0.7rem; }
.social-btn {
  width: 36px; height: 36px;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1rem;
  transition: border-color 0.3s, background 0.3s;
  cursor: pointer;
}
.social-btn:hover { border-color: var(--gold); background: rgba(197,160,74,0.1); }

/* Cols */
.footer-col {}
.col-heading {
  color: var(--gold);
  font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 700;
  margin-bottom: 1.2rem;
}
.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.65rem; }
.footer-col a {
  color: rgba(255,255,255,0.5);
  font-size: 0.875rem;
  cursor: pointer;
  transition: color 0.3s;
}
.footer-col a:hover { color: var(--gold); }

/* Bottom */
.footer-bottom {
  display: flex; justify-content: space-between; align-items: center;
  padding-top: 1.8rem;
  flex-wrap: wrap; gap: 0.5rem;
}
.copy { color: rgba(255,255,255,0.3); font-size: 0.8rem; }

@media (max-width: 900px) {
  .footer-top { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 500px) {
  .footer-top { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; align-items: flex-start; }
}
</style>
