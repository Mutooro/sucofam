<template>
  <div class="page-view">
    <div class="page-hero">
      <div class="page-hero-bg">
        <img :src="heroBg" alt="SUCOFAM Accountability and Governance" />
        <div class="page-hero-overlay" />
      </div>
      <div class="page-hero-content container">
        <div class="section-tag white reveal">Institutional Due Diligence</div>
        <h1 class="page-hero-title reveal reveal-delay-1">Accountability &amp; Policies</h1>
        <p class="page-hero-desc reveal reveal-delay-2">
          Transparent governance, ethical safeguarding, and compliance frameworks that guide our partnerships and operations.
        </p>
      </div>
    </div>

    <!-- Institutional Profile -->
    <section class="profile-section bg-white section-padding">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Fiduciary Integrity</div>
          <h2 class="section-title">Institutional <em>Credibility</em></h2>
          <div class="section-line" />
          <p class="section-desc">
            SUCOFAM Uganda Limited is committed to the highest standards of integrity, transparency, and accountability across all farmer operations, donor-funded projects, and commercial partnerships.
          </p>
        </div>

        <div class="legal-card-grid reveal">
          <div class="legal-box">
            <div class="legal-icon"><ShieldCheck :size="28" /></div>
            <h3>Legal Entity &amp; Registration</h3>
            <p><strong>Official Registered Name:</strong> {{ legalProfile.legalName }}</p>
            <p><strong>Operating Brand:</strong> {{ legalProfile.operatingName }}</p>
            <p><strong>Legal Form:</strong> {{ legalProfile.legalForm }}</p>
            <p><strong>Year Established:</strong> {{ legalProfile.registrationYear }}</p>
          </div>

          <div class="legal-box">
            <div class="legal-icon"><MapPin :size="28" /></div>
            <h3>Headquarters &amp; Coverage</h3>
            <p><strong>Headquarters:</strong> {{ legalProfile.headquarters }}</p>
            <p><strong>Focal Region:</strong> {{ legalProfile.focusRegion }}</p>
            <p><strong>Operating Districts:</strong> {{ legalProfile.operationalDistricts.join(', ') }}</p>
            <p><strong>Compliance Registration:</strong> Republic of Uganda Corporate Regulations</p>
          </div>

          <div class="legal-box">
            <div class="legal-icon"><FileCheck :size="28" /></div>
            <h3>Governance &amp; Fiduciary Controls</h3>
            <p><strong>Governance:</strong> Independent Strategic Advisory Oversight</p>
            <p><strong>Audit Standard:</strong> Annual External Financial Audit</p>
            <p><strong>Banking Controls:</strong> Dual-Authorization Fiduciary Controls</p>
            <p><strong>Data Compliance:</strong> Uganda Data Protection &amp; Privacy Act (2019)</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Policies Accordion / Cards -->
    <section class="policies-section bg-soft section-padding">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-tag">Institutional Safeguards</div>
          <h2 class="section-title">Core Operating <em>Policies</em></h2>
          <div class="section-line" />
          <p class="section-desc">
            Our published institutional policies provide full clarity for donors, partners, and community stakeholders conducting institutional due diligence.
          </p>
        </div>

        <div class="policies-grid">
          <div 
            v-for="(policy, i) in institutionalPolicies" 
            :key="policy.id"
            :id="policy.id"
            class="policy-card reveal"
            :class="`reveal-delay-${i % 2}`"
          >
            <div class="policy-header">
              <span class="policy-badge">{{ policy.category }}</span>
              <h3 class="policy-title">{{ policy.title }}</h3>
            </div>
            
            <p class="policy-summary">{{ policy.summary }}</p>

            <div class="policy-points-box">
              <h4 class="points-title">Key Provisions:</h4>
              <ul class="policy-points">
                <li v-for="point in policy.keyPoints" :key="point">
                  <CheckCircle2 :size="16" class="check-icon" />
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Grievance & Whistleblower CTA -->
    <section class="whistleblower-section bg-white section-padding-sm">
      <div class="container">
        <div class="wb-card reveal">
          <div class="wb-content">
            <div class="wb-icon"><AlertCircle :size="32" /></div>
            <div>
              <h3>Confidential Whistleblowing &amp; Grievance Channel</h3>
              <p>
                SUCOFAM maintains an independent, confidential reporting channel for any concerns regarding fraud, safeguarding violations, corruption, or policy non-compliance. All reports are investigated with complete confidentiality and zero retaliation.
              </p>
              <div class="wb-contacts">
                <a href="mailto:ethics@sucofam.org" class="wb-btn">
                  <Mail :size="16" /> Email: ethics@sucofam.org
                </a>
                <span class="wb-phone">
                  <Phone :size="16" /> Confidential Desk: +256 782 285 490
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partner Inquiry CTA -->
    <section class="partner-cta bg-soft section-padding-sm">
      <div class="container">
        <div class="cta-box reveal">
          <h2 class="cta-title">Request Due Diligence Package</h2>
          <p class="cta-desc">
            Are you a prospective institutional donor, financial partner, or commercial off-taker? Contact our compliance and legal desk for full policy documents, audit summaries, and registration certificates.
          </p>
          <router-link to="/contact" class="btn btn-accent">
            Contact Compliance Desk <ArrowRight :size="16" />
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { usePageSeo } from '../composables/usePageSeo.js'
import { ShieldCheck, MapPin, FileCheck, CheckCircle2, AlertCircle, Mail, Phone, ArrowRight } from 'lucide-vue-next'
import { legalProfile, institutionalPolicies } from '../data/content.js'
import heroBg from '@/assets/img/raap.jpeg'

usePageSeo({
  title: 'Accountability & Institutional Policies | SUCOFAM Uganda',
  description:
    'Review SUCOFAM Uganda Limited institutional policies, legal identity, safeguarding guidelines, whistleblower channels, data privacy compliance, and fiduciary controls.',
  path: '/accountability',
  breadcrumbs: [{ name: 'Accountability', path: '/accountability' }]
})
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
  font-size: clamp(2.3rem, 5vw, 3.2rem);
  font-weight: 900;
  color: var(--white);
  margin-bottom: 1rem;
}

.page-hero-desc {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.6;
}

/* Legal Cards */
.legal-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
}

.legal-box {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.legal-box:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.legal-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-sm);
  background: var(--bg-green);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.legal-box h3 {
  font-family: var(--ff-serif);
  font-size: 1.25rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.legal-box p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
}

.legal-box p strong {
  color: var(--text-dark);
}

/* Policies Grid */
.policies-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.policy-card {
  background: var(--white);
  border-radius: var(--radius);
  padding: 2.5rem;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}

.policy-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--accent);
  background: var(--bg-pink);
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  margin-bottom: 0.75rem;
}

.policy-title {
  font-family: var(--ff-serif);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.policy-summary {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--text-body);
  margin-bottom: 1.5rem;
}

.policy-points-box {
  background: var(--bg-soft);
  border-radius: var(--radius-sm);
  padding: 1.25rem 1.5rem;
  border-left: 3px solid var(--primary);
  margin-top: auto;
}

.points-title {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.policy-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.policy-points li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-muted);
}

.check-icon {
  color: var(--primary);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

/* Whistleblower Box */
.wb-card {
  background: #fff8f5;
  border: 1px solid #ffdcd0;
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-sm);
}

.wb-content {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.wb-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #ffede6;
  color: #ff5722;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.wb-content h3 {
  font-family: var(--ff-serif);
  font-size: 1.3rem;
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.wb-content p {
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
}

.wb-contacts {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
}

.wb-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #ff5722;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.wb-btn:hover {
  background: #e04818;
  transform: translateY(-2px);
}

.wb-phone {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-dark);
}

/* Partner CTA */
.partner-cta .cta-box {
  background: linear-gradient(135deg, var(--bg-green) 0%, var(--white) 100%);
  border-radius: var(--radius-lg);
  padding: 3rem;
  text-align: center;
  border: 1px solid var(--border);
}

.partner-cta .cta-title {
  font-family: var(--ff-serif);
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 0.75rem;
}

.partner-cta .cta-desc {
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 1.5rem;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .legal-card-grid { grid-template-columns: 1fr; }
  .policies-grid { grid-template-columns: 1fr; }
  .wb-content { flex-direction: column; }
}
</style>
