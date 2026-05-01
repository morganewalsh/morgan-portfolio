'use client'

import Link from 'next/link'

export default function RoldGoldPage() {
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
          Case 03 · Rold Gold
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
          Trust Your Gut
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
          89% of weekly podcast listeners have binged true crime. We figured out what snack belongs in that ritual — and exactly why it has to be Rold Gold.
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
            src="https://docs.google.com/presentation/d/e/2PACX-1vRbhd1BtVnjsE5grpkqAPBiJnPJnKw0eWRsc6ky9lzGTYGCp3b67jRfD0aCjnplngt4n2SVf9mXyEUA/pubembed?start=false&loop=false&delayms=3000"
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