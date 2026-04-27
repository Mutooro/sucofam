<template>
  <section class="home-cta">
    <div class="container">
      <div class="cta-box reveal">
        <h2 class="cta-title">Join Us in Empowering<br />Ugandan Farmers</h2>
        <p class="cta-desc">
          Join us in building a more equitable agricultural future for Uganda. Every program we run translates into real change at the farmer household level.
        </p>
        <router-link to="/contact" class="btn btn-white">
          Get Involved
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home-cta {
  padding: var(--section-pad) 0;
  background: var(--white);
}

.cta-box {
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
  border-radius: var(--radius-lg);
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-box::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
}

.cta-box::after {
  content: '';
  position: absolute;
  bottom: -30%;
  left: -10%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.03);
}

.cta-title {
  font-family: var(--ff-serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: var(--white);
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.cta-desc {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.85);
  max-width: 560px;
  margin: 0 auto 2rem;
  line-height: 1.7;
  position: relative;
  z-index: 1;
}

.cta-box .btn {
  position: relative;
  z-index: 1;
}

@media (max-width: 600px) {
  .cta-box {
    padding: 3rem 1.5rem;
  }
}
</style>
