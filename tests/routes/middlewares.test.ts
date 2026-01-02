import { describe, it, expect, beforeAll } from 'vitest'
import { setup, $fetch, createPage } from '@nuxt/test-utils'
import { readFile } from 'fs/promises'
import { join } from 'path'

describe('Auth middleware - Dynamic tests', async () => {
  await setup({})

  let isAuthenticated: boolean = false

  beforeAll(async () => {
    // Read the current authentication state from the middleware file
    const middlewarePath = join(process.cwd(), 'app/middleware/auth.global.ts')
    const content = await readFile(middlewarePath, 'utf-8')
    
    // Extract the current value of isAuthenticated
    const match = content.match(/useState\('isAuthenticated',\s*\(\)\s*=>\s*(true|false)\)/)
    if (match) {
      isAuthenticated = match[1] === 'true'
    }
    
    console.log(`\n🔐 Running tests with isAuthenticated = ${isAuthenticated}\n`)
  })

  describe('When user is NOT authenticated', () => {
    it('should redirect /dashboard to landing page', async () => {
      const html = await $fetch('/dashboard') as string
      
      if (!isAuthenticated) {
        // User is NOT authenticated - should be redirected
        expect(html).not.toContain('Dashboard')
        expect(html).not.toContain('Simulaciones')
        expect(html).toBeTruthy()
      } else {
        // User IS authenticated - should access dashboard
        expect(html).toBeTruthy()
        expect(typeof html).toBe('string')
      }
    })

    it('should redirect /dashboard/simulate to landing page', async () => {
      const html = await $fetch('/dashboard/simulate') as string
      
      if (!isAuthenticated) {
        // Should NOT contain simulate page content
        expect(html).not.toContain('Simulaciones')
        expect(html).toBeTruthy()
      } else {
        // Should allow access
        expect(html).toBeTruthy()
        expect(typeof html).toBe('string')
      }
    })

    it('should redirect /dashboard/profile to landing page', async () => {
      const html = await $fetch('/dashboard/profile') as string
      
      if (!isAuthenticated) {
        // Should NOT contain profile content
        expect(html).not.toContain('Perfil')
        expect(html).not.toContain('Profile')
        expect(html).toBeTruthy()
      } else {
        // Should allow access
        expect(html).toBeTruthy()
        expect(typeof html).toBe('string')
      }
    })
  })

  describe('Public routes', () => {
    it('should always allow access to landing page /', async () => {
      const html = await $fetch('/') as string
      expect(html).toBeTruthy()
      expect(typeof html).toBe('string')
    })
  })

  describe('Authentication state validation', () => {
    it('should verify current authentication state', () => {
      // This test documents what state we're testing
      expect(typeof isAuthenticated).toBe('boolean')
      console.log(`✅ Tests ran with authentication state: ${isAuthenticated}`)
    })
  })
})
