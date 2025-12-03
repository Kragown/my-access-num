import '@testing-library/jest-dom'

if (typeof globalThis.fetch === 'undefined') {
  try {
    const { fetch, Headers, Request, Response } = require('undici')
    globalThis.fetch = fetch
    globalThis.Headers = Headers
    globalThis.Request = Request
    globalThis.Response = Response
  } catch (e) {
    // undici might not be available in jsdom environment, that's ok
  }
}
