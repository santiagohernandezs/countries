import type { Metadata } from 'next'

export const meta: Metadata = {
  title: 'Countries App',
  description: 'App to search countries',
  authors: [{ name: 'Tao', url: '@tao' }],
  category: 'App',
  keywords: ['countries', 'search'],
  publisher: 'Tao',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    locale: 'en_US',
    type: 'website',
    url: 'https://countries-app.vercel.app/',
    siteName: 'Countries App',
    title: 'Countries App',
    description: 'App to search countries',
    images: [
      {
        url: 'https://countries-app.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Countries App'
      }
    ],
    countryName: 'Colombia'
  },
  alternates: {
    canonical: 'https://countries-app.vercel.app/',
    languages: {
      'en-US': 'https://countries-app.vercel.app/',
      'es-ES': 'https://countries-app.vercel.app/es'
    }
  }
}
