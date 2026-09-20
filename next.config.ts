import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Enforced. The policy is deliberately permissive (it allows inline scripts and
// styles, which Next.js and framer-motion need) while blocking third-party
// scripts, frames, and plugins. If something legitimate is ever blocked, the
// browser console names the rule; add that source here. To go back to
// warn-only, change the header key below to "Content-Security-Policy-Report-Only".
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://formspree.io",
  "form-action 'self' https://formspree.io",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
