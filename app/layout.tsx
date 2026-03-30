import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Morgan Walsh — Advertising · Data Science · Boston',
  description:
    'Designer and analyst working at the intersection of data, civic systems, and communication. BU Advertising + Data Science, graduating May 2026.',
  keywords: ['civic design', 'data science', 'UX', 'Boston', 'portfolio', 'advertising strategy'],
  authors: [{ name: 'Morgan Walsh' }],
  openGraph: {
    title: 'Morgan Walsh',
    description: 'Designer and analyst — civic tech, data, strategy.',
    url: 'https://morganwalsh.com',
    siteName: 'Morgan Walsh',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Morgan Walsh',
    description: 'Designer and analyst — civic tech, data, strategy.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <footer
          style={{
            padding: '1rem 2rem',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--text-disabled)' }}>
            Morgan Walsh · Boston · 2026
          </span>
          <span style={{ color: 'var(--gilt)', fontSize: '0.75rem' }}>✦</span>
        </footer>
      </body>
    </html>
  )
}

