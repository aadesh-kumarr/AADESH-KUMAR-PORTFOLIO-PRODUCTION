import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: ['/'],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: ['/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: ['/'],
      },
      {
        userAgent: 'CCBot',
        allow: ['/'],
      },
    ],
    sitemap: ['https://aadeshkumar-portfolio.vercel.app/sitemap.xml'],
  }
}
