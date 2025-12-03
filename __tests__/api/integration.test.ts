/**
 * Tests d'intégration API
 * Ces tests vérifient que les routes Next.js répondent correctement
 * 
 * @jest-environment node
 */

import { fetch, Headers, Request, Response } from 'undici'

if (typeof globalThis.fetch === 'undefined') {
  globalThis.fetch = fetch as any
  globalThis.Headers = Headers as any
  globalThis.Request = Request as any
  globalThis.Response = Response as any
}

describe('API Integration Tests', () => {
  const baseUrl = process.env.TEST_BASE_URL || 'http://localhost:3000'

  it('should return 200 for landing page', async () => {
    const response = await fetch(`${baseUrl}/landing`)
    expect(response.status).toBe(200)
    expect(response.headers.get('content-type')).toContain('text/html')
  })

  it('should return 200 for dashboard page', async () => {
    const response = await fetch(`${baseUrl}/dashboard`)
    expect(response.status).toBe(200)
    expect(response.headers.get('content-type')).toContain('text/html')
  })

  it('should redirect root to landing page', async () => {
    const response = await fetch(`${baseUrl}/`, {
      redirect: 'manual',
    })
    expect(response.status).toBe(307) // Next.js redirect status
    expect(response.headers.get('location')).toContain('/landing')
  })

  it('should return 404 for non-existent page', async () => {
    const response = await fetch(`${baseUrl}/non-existent-page`)
    expect(response.status).toBe(404)
  })

  it('should have correct HTML structure on landing page', async () => {
    const response = await fetch(`${baseUrl}/landing`)
    const html = await response.text()
    
    expect(html).toContain('Transformez votre façon de travailler')
    expect(html).toContain('Nos fonctionnalités')
    expect(html).toContain('Contactez-nous')
  })
})

