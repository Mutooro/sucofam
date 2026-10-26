import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createHead } from '@unhead/vue/client'
import ContactView from '../src/views/ContactView.vue'
import { INQUIRY_EMAIL, buildInquiryMailto } from '../src/utils/inquiryMailto.js'

const mountForm = () =>
  mount(ContactView, {
    global: {
      plugins: [createHead()],
      stubs: {
        RouterLink: true
      }
    }
  })

// handleSubmit is async, so the DOM only reflects its outcome a tick later.
const settle = () => new Promise((resolve) => setTimeout(resolve, 0))

const parseMailto = (href) => {
  const query = new URLSearchParams(href.slice(href.indexOf('?') + 1))
  return { subject: query.get('subject'), body: query.get('body') }
}

const completeForm = {
  name: 'Test User',
  email: 'test@example.com',
  org: 'Albertine Interventions',
  subject: 'partnership',
  message: "Let's connect",
  inquiryType: 'coffee'
}

describe('buildInquiryMailto', () => {
  it('composes a prefilled inquiry addressed to the published contact', () => {
    const href = buildInquiryMailto(completeForm)
    expect(href.startsWith(`mailto:${INQUIRY_EMAIL}?`)).toBe(true)

    const { subject, body } = parseMailto(href)
    expect(subject).toBe('Coffee Sourcing / Samples: partnership')
    expect(body).toContain("Let's connect")
    expect(body).toContain('Name: Test User')
    expect(body).toContain('Email: test@example.com')
    expect(body).toContain('Organization: Albertine Interventions')
    expect(body).toContain('Inquiry category: Coffee Sourcing / Samples')
  })

  it('omits the organization line when that optional field is empty', () => {
    const { body } = parseMailto(buildInquiryMailto({ ...completeForm, org: '' }))
    expect(body).not.toContain('Organization:')
  })

  it('keeps an unknown category readable instead of dropping it', () => {
    const { subject } = parseMailto(buildInquiryMailto({ ...completeForm, inquiryType: 'field-visit' }))
    expect(subject).toBe('field-visit: partnership')
  })
})

describe('ContactView', () => {
  it('requires the mandatory fields before submission', async () => {
    const wrapper = mountForm()

    await wrapper.get('form').trigger('submit')

    expect(wrapper.text()).toContain('Name is required')
    expect(wrapper.text()).toContain('Email is required')
    expect(wrapper.text()).toContain('Subject is required')
    expect(wrapper.text()).toContain('Message is required')
  })

  it('hands a valid submission to the email client when no endpoint is configured', async () => {
    const wrapper = mountForm()

    await wrapper.get('#name').setValue(completeForm.name)
    await wrapper.get('#email').setValue(completeForm.email)
    await wrapper.get('#subject').setValue(completeForm.subject)
    await wrapper.get('#message').setValue(completeForm.message)
    await wrapper.get('form').trigger('submit')
    await settle()

    // The handoff notice is deliberately worded as "ready to send": a mailto: navigation
    // cannot confirm delivery, so the page must not claim the message was received.
    expect(wrapper.text()).toContain('Your email app should have opened')
    expect(wrapper.find('.form-error').exists()).toBe(false)
    expect(wrapper.find('.form-success').exists()).toBe(false)
  })

  it('keeps the composed values on screen after the handoff', async () => {
    const wrapper = mountForm()

    await wrapper.get('#name').setValue(completeForm.name)
    await wrapper.get('#email').setValue(completeForm.email)
    await wrapper.get('#subject').setValue(completeForm.subject)
    await wrapper.get('#message').setValue(completeForm.message)
    await wrapper.get('form').trigger('submit')
    await settle()

    expect(wrapper.get('#name').element.value).toBe(completeForm.name)
    expect(wrapper.get('#message').element.value).toBe(completeForm.message)
  })
})
