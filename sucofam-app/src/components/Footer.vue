<template>
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="/assets/img/ngite_space_logo.png" alt="Ngite Space">
        <p>We're committed to blending agribusiness with environmental awareness and action. Join us in making a
          difference for coffee and cocoa communities across Uganda.</p>
        <div class="social-links">
          <a href="https://instagram.com/ngite_space" class="social-link" target="_blank"><i
              class="fab fa-instagram"></i></a>
          <a href="https://x.com/ngitespace" class="social-link" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="#" class="social-link" target="_blank"><i class="fab fa-youtube"></i></a>
          <a href="#" class="social-link" target="_blank"><i class="fab fa-facebook-f"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul class="footer-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Projects</h4>
        <ul class="footer-links">
          <li><router-link to="/projects">Ngite Climate Auditorium</router-link></li>
          <li><router-link to="/projects">Women for Climate</router-link></li>
          <li><router-link to="/projects">Responsible Waste Disposal</router-link></li>
          <li><router-link to="/projects">Food Security Initiative</router-link></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact Us</h4>
        <div class="footer-contact">
          <div class="contact-item"><i class="fas fa-map-marker-alt"></i><span>P.O Box 188312, Kampala, Uganda</span>
          </div>
          <div class="contact-item"><i class="fas fa-phone"></i><a href="tel:+256763965806">+256 763 965 806</a></div>
          <div class="contact-item"><i class="fas fa-phone"></i><a href="tel:+256393002153">+256 393 002 153</a></div>
          <div class="contact-item"><i class="fas fa-envelope"></i><a
              href="mailto:info@ngitespace.com">info@ngitespace.com</a></div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© {{ currentYear }} Ngite Space Limited. All rights reserved.</p>
      <!-- <p>Developed by <a href="https://mutooro.xyz" target="_blank">Mutooro</a></p> -->
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
/* Scoped styles can be added here */
</style>
