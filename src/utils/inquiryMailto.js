import { legalProfile } from '../data/content.js'

/**
 * The contact form has no server of its own. Unless VITE_CONTACT_FORM_ENDPOINT is configured,
 * a valid submission is handed to the visitor's email client through a mailto: URL, so this
 * module owns the address and the message shape in one place.
 *
 * Note that the address below (legalProfile.contactEmail) is the one used across the footer,
 * the structured data and the Products call-to-action. The contact panel on the Contact page
 * still displays a different mailbox; whichever one is authoritative should be set once here.
 */
export const INQUIRY_EMAIL = legalProfile.contactEmail

export const INQUIRY_LABELS = {
  partnership: 'Strategic Partnership',
  coffee: 'Coffee Sourcing / Samples',
  cocoa: 'Cocoa Sourcing / Samples',
  honey: 'Honey Sourcing / Samples',
  nexuscafe: 'NexusCafe Commercial Orders',
  'due-diligence': 'Institutional Due Diligence',
  general: 'General Inquiries'
}

export function inquiryLabel(value) {
  return INQUIRY_LABELS[value] ?? value
}

/** Builds the prefilled inquiry email: category in the subject, message, then the sender block. */
export function buildInquiryMailto({ name, email, org, subject, message, inquiryType }, to = INQUIRY_EMAIL) {
  const details = [
    `Name: ${name}`,
    `Email: ${email}`,
    ...(org ? [`Organization: ${org}`] : []),
    `Inquiry category: ${inquiryLabel(inquiryType)}`
  ]

  const body = `${message}\n\n${details.join('\n')}\n`
  const subjectLine = `${inquiryLabel(inquiryType)}: ${subject}`

  return `mailto:${to}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`
}
