import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Routes without i18n and middleware', async () => {
  await setup({
    // Setup options if needed
  })

  describe('Public routes', () => {
    it('should exist: /', async () => {
      const html = await $fetch('/')
      expect(html).toBeTruthy()
    })
  })

  describe('Dashboard routes', () => {
    it('should exist: /dashboard', async () => {
      const html = await $fetch('/dashboard')
      expect(html).toBeTruthy()
    })

    it('should exist: /dashboard/simulate', async () => {
      const html = await $fetch('/dashboard/simulate')
      expect(html).toBeTruthy()
    })

    it('should exist: /dashboard/simulate/:date', async () => {
      const html = await $fetch('/dashboard/simulate/2024-01-15')
      expect(html).toBeTruthy()
    })

    it('should exist: /dashboard/history', async () => {
      const html = await $fetch('/dashboard/history')
      expect(html).toBeTruthy()
    })

    it('should exist: /dashboard/history/simulated-:date', async () => {
      const html = await $fetch('/dashboard/history/simulated-2024-01-15')
      expect(html).toBeTruthy()
    })

    it('should exist: /dashboard/profile', async () => {
      const html = await $fetch('/dashboard/profile')
      expect(html).toBeTruthy()
    })

    it('should exist: /dashboard/about', async () => {
      const html = await $fetch('/dashboard/about')
      expect(html).toBeTruthy()
    })
  })

  describe('404 routes', () => {
    it('should return 404 for non-existent routes', async () => {
      try {
        await $fetch('/non-existent-route')
      } catch (error: any) {
        expect(error.statusCode).toBe(404)
      }
    })
  })
})
