'use client'

import Link from 'next/link'

export default function LiquidDeathPage() {
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
          Case 02 · Liquid Death
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
          Bleed for a Cause
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
          A Valentine&apos;s Day blood drive in a van that looks like it&apos;s on tour with a rockstar. Liquid Death doesn&apos;t join the holiday — it hijacks it.
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
            src="https://docs.google.com/presentation/d/e/2PACX-1vR9Pw-ZVb_FYf04yn3y_P7BwPDVEIrsYqUU2d1YCUeqRcY8lrQ1boq7ybjTtcjqZoVBo-e6t6sck4nW/pubembed?start=false&loop=false&delayms=3000"
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