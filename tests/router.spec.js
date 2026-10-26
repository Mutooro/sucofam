import { describe, expect, it } from 'vitest'
import { routes } from '../src/router/index.js'

describe('router', () => {
  it('defines the primary public routes', () => {
    const routeNames = routes.map((route) => route.name)

    expect(routeNames).toEqual(expect.arrayContaining([
      'home',
      'about',
      'programs',
      'value-chains',
      'impact',
      'gallery',
      'news',
      'accountability',
      'contact',
      'not-found'
    ]))
  })

  it('keeps the legacy products path available', () => {
    const valueChainsRoute = routes.find((route) => route.name === 'value-chains')

    expect(valueChainsRoute.alias).toContain('/products')
  })
})
