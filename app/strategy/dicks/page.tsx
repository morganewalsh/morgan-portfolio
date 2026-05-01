'use client'

import Link from 'next/link'

export default function DicksPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ── Header ───────────────────────────────────────────────────── */}
      <section
        style={{
          padding:      '4rem 2rem 3rem',
          maxWidth:     'var(--max-width)',
          margin:       '0 auto',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Link
          href="/strategy"
          className="text-label"
          style={{ color: '#4D8059', textDecoration: 'none', display: 'inline-block', marginBottom: '1.5rem' }}
        >
          ← Strategy
        </Link>

        <p className="text-label" style={{ color: '#4D8059', marginBottom: '0.4rem' }}>
          Case 01 · Dick&apos;s Sporting Goods
        </p>
        <h1
          style={{
            fontFamily:   'var(--font-serif)',
            fontSize:     'clamp(2rem, 5vw, 3rem)',
            color:        '#161616',
            marginBottom: '1.25rem',
            lineHeight:   1.2,
          }}
        >
          Escape Routes
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize:   '1rem',
            fontWeight: 300,
            lineHeight: 1.75,
            color:      '#555',
            maxWidth:   560,
          }}
        >
          When getting outside feels like a second job, no one goes outside. We ran a Recollective audience study with 33 BU undergrads to find out why — then built the campaign to fix it.
        </p>
      </section>

      {/* ── Embedded Deck ────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 'var(--max-width)',
          margin:   '0 auto',
          padding:  '3rem 2rem 4rem',
        }}
      >
        <div
          style={{
            position:   'relative',
            width:      '100%',
            paddingTop: '56.25%',
            background: '#f5f5f5',
            border:     '1px solid #e0e0e0',
          }}
        >
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vT0NY_UAhCdTguzKmMko4WXig7DTnxWKgNP9uCGtm_kYJskyoOz4HBl7xJHlQdgF6bMSOKJTcZIk32f/pubembed?start=false&loop=false&delayms=3000"
            style={{
              position: 'absolute',
              top:      0,
              left:     0,
              width:    '100%',
              height:   '100%',
              border:   'none',
            }}
            allowFullScreen
          />
        </div>
      </section>
    </div>
  )
}