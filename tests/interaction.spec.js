import { describe, expect, it, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createHead } from '@unhead/vue/client'
import CookieConsent from '../src/components/CookieConsent.vue'
import GalleryView from '../src/views/GalleryView.vue'
import NotFoundView from '../src/views/NotFoundView.vue'
import NavBar from '../src/components/NavBar.vue'

const CONSENT_KEY = 'sucofamCookieConsent'
const global = { plugins: [createHead()], stubs: { RouterLink: true } }

const mountView = (component) => mount(component, { attachTo: document.body, global })

beforeEach(() => {
  localStorage.clear()
  document.head.innerHTML = ''
  document.body.innerHTML = ''
})

describe('CookieConsent', () => {
  it('records an explicit rejection', async () => {
    const wrapper = mount(CookieConsent, { global })
    expect(wrapper.text()).toContain('Cookie preferences')

    await wrapper.get('.cookie-reject').trigger('click')

    expect(JSON.parse(localStorage.getItem(CONSENT_KEY))).toEqual({
      essential: true,
      analytics: false,
      marketing: false
    })
  })

  it('leaves optional categories off unless the visitor turns them on', async () => {
    const wrapper = mount(CookieConsent, { global })
    await wrapper.get('.cookie-accept').trigger('click')
    expect(JSON.parse(localStorage.getItem(CONSENT_KEY))).toMatchObject({
      essential: true,
      analytics: false,
      marketing: false
    })

    wrapper.unmount()
    localStorage.clear()

    const withPrefs = mount(CookieConsent, { global })
    await withPrefs.get('.cookie-preferences-toggle').trigger('click')
    const boxes = withPrefs.findAll('.cookie-preference input')
    expect(boxes).toHaveLength(3)

    await boxes[1].setValue(true)
    await withPrefs.get('.cookie-accept').trigger('click')
    expect(JSON.parse(localStorage.getItem(CONSENT_KEY))).toMatchObject({
      analytics: true,
      marketing: false
    })
  })

  it('keeps the essential category locked on', async () => {
    const wrapper = mount(CookieConsent, { global })
    await wrapper.get('.cookie-preferences-toggle').trigger('click')

    const essential = wrapper.findAll('.cookie-preference input')[0]
    expect(essential.attributes('disabled')).toBeDefined()
    expect(essential.element.checked).toBe(true)
  })

  it('does not resurface once a choice is stored', async () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ essential: true, analytics: false, marketing: false }))
    const wrapper = mount(CookieConsent, { global })
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).not.toContain('Accept')
  })
})

describe('Gallery lightbox', () => {
  it('opens from a keyboard-focusable tile, closes on Escape and returns focus', async () => {
    const wrapper = mountView(GalleryView)
    const tile = wrapper.get('.gallery-item')

    // Reachable and operable without a mouse.
    expect(tile.attributes('role')).toBe('button')
    expect(tile.attributes('tabindex')).toBe('0')

    tile.element.focus()
    await tile.trigger('click')
    const dialog = wrapper.get('.lightbox')
    expect(dialog.attributes('role')).toBe('dialog')
    expect(dialog.attributes('aria-modal')).toBe('true')
    expect(document.activeElement).toBe(wrapper.get('.lightbox-close').element)

    await window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.lightbox').exists()).toBe(false)
    expect(document.activeElement).toBe(tile.element)
  })

  it('names the close control for screen readers', async () => {
    const wrapper = mountView(GalleryView)
    await wrapper.get('.gallery-item').trigger('click')

    expect(wrapper.get('.lightbox-close').attributes('aria-label')).toBeTruthy()
  })
})

describe('NotFound view', () => {
  it('renders recovery copy and a noindex head', async () => {
    const wrapper = mountView(NotFoundView)
    expect(wrapper.get('h1').text()).toContain("couldn't find")
    expect(wrapper.find('.btn').exists()).toBe(true)

    await new Promise((resolve) => setTimeout(resolve, 0))
    expect(document.title).toBe('Page Not Found | SUCOFAM Uganda')
    expect(document.querySelector('meta[name="robots"]').content).toBe('noindex')
  })
})

describe('NavBar interaction', () => {
  it('toggles dropdowns on click and exposes the expanded state', async () => {
    const wrapper = mountView(NavBar)
    const trigger = wrapper.get('.dropdown-trigger')

    expect(trigger.attributes('aria-expanded')).toBe('false')
    await trigger.trigger('click')
    expect(trigger.attributes('aria-expanded')).toBe('true')

    await trigger.trigger('click')
    expect(trigger.attributes('aria-expanded')).toBe('false')
  })

  it('closes an open dropdown on Escape', async () => {
    const wrapper = mountView(NavBar)
    const trigger = wrapper.get('.dropdown-trigger')

    await trigger.trigger('click')
    await window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await wrapper.vm.$nextTick()

    expect(trigger.attributes('aria-expanded')).toBe('false')
  })

  it('exposes the mobile menu as a modal dialog and restores the toggle on close', async () => {
    const wrapper = mountView(NavBar)
    const toggle = wrapper.get('.nav-toggle')

    await toggle.trigger('click')
    expect(wrapper.get('.mobile-menu-content').attributes('aria-modal')).toBe('true')

    await window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.mobile-menu').exists()).toBe(false)
    expect(document.activeElement).toBe(toggle.element)
  })
})
