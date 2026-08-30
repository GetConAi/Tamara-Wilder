module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'strict-transport-security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'content-security-policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self'; object-src 'self'; report-uri /csp-report-endpoint;" },
          { key: 'x-frame-options', value: 'SAMEORIGIN' },
          { key: 'x-content-type-options', value: 'nosniff' },
          { key: 'referrer-policy', value: 'strict-origin-when-cross-origin' },
          { key: 'permissions-policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ]
  }
}