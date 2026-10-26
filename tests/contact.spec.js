import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createHead } from '@unhead/vue/client'
import ContactView from '../src/views/ContactView.vue'

describe('ContactView', () => {
  it('requires the mandatory fields before submission', async () => {
    const wrapper = mount(ContactView, {
      global: {
        plugins: [createHead()],
        stubs: {
          RouterLink: true
        }
      }
    })

    await wrapper.get('form').trigger('submit')

    expect(wrapper.text()).toContain('Name is required')
    expect(wrapper.text()).toContain('Email is required')
    expect(wrapper.text()).toContain('Subject is required')
    expect(wrapper.text()).toContain('Message is required')
  })

  it('reports missing endpoint configuration instead of opening an email client', async () => {
    const wrapper = mount(ContactView, {
      global: {
        plugins: [createHead()],
        stubs: {
          RouterLink: true
        }
      }
    })

    await wrapper.get('#name').setValue('Test User')
    await wrapper.get('#email').setValue('test@example.com')
    await wrapper.get('#subject').setValue('Test inquiry')
    await wrapper.get('#message').setValue('This is a test message.')
    await wrapper.get('form').trigger('submit')

    expect(wrapper.text()).toContain('Contact submission is not configured yet')
  })
})
