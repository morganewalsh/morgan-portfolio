'use client'

import Link from 'next/link'

export default function DicksPage() {
  return (
    <>
      {/* ── Header ───────────────────────────────────────────────────── */}
      <section
        style={{
          padding:      '4rem 2rem 2rem',
          maxWidth:     'var(--max-width)',
          margin:       '0 auto',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <Link
          href="/strategy"
          className="text-label"
          style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-block', marginBottom: '1.5rem' }}
        >
          ← Strategy
        </Link>
        <div className="text-label" style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>
          Case 01 · Dick&apos;s Sporting Goods
        </div>
        <h1
          className="text-display"
          style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.75rem' }}
        >
          Escape Routes
        </h1>
        <p className="text-body" style={{ maxWidth: 560, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Audience Research · Recollective Study · Brand Strategy
        </p>

        {/* Meta grid */}
        <div className="grid-1px" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
          {[
            { label: 'Client',    value: "Dick's Sporting Goods" },
            { label: 'My Role',   value: 'Research · Brief writing · Creative concepting' },
            { label: 'Method',    value: 'Recollective audience study — 33 BU undergrads' },
            { label: 'Deliverable', value: 'Creative brief + campaign concept' },
          ].map(m => (
            <div key={m.label} className="grid-cell" style={{ padding: '1rem' }}>
              <div className="text-label" style={{ color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{m.label}</div>
              <div className="text-body-sm" style={{ color: 'var(--text-primary)' }}>{m.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Write-up ─────────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth:     'var(--max-width)',
          margin:       '0 auto',
          padding:      '3rem 2rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>The Problem</div>
            <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Dick&apos;s Sporting Goods wanted to reach Boston-area college students — a generation that genuinely wants the outdoors but keeps finding reasons not to go. We ran a Recollective audience study with 33 BU undergrads to understand what was actually stopping them.
            </p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              What we found: it wasn&apos;t lack of interest. It was cost, logistics, and time. Getting outside required gear investments, planning, and coordination — turning what should be a mental reset into something that felt like a second job.
            </p>
          </div>
          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>The Insight</div>
            <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Students default to what&apos;s easy — walking, running, nearby parks — while bigger adventures stay stuck in the group chat. The desire is there, but the financial and logistical barrier reframes outdoor recreation as a luxury instead of an accessible part of everyday life.
            </p>
            <p
              style={{
                fontFamily:  'var(--font-serif)',
                fontSize:    '1.1rem',
                color:       'var(--green)',
                fontStyle:   'italic',
                borderLeft:  '2px solid var(--green)',
                paddingLeft: '1rem',
              }}
            >
              Dick&apos;s has an opportunity to make outdoor adventures the new default for college students — by removing the logistical friction entirely.
            </p>
          </div>
        </div>

        {/* Brief summary */}
        <div
          style={{
            marginTop:  '2rem',
            background: 'var(--bg-secondary)',
            border:     '1px solid var(--border)',
            padding:    '1.5rem',
          }}
        >
          <div className="section-label" style={{ marginBottom: '1rem' }}>The Brief</div>
          <div className="grid-1px" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {[
              { label: 'Goal',             value: "Establish Dick's as a community hub for outdoor experiences among Boston-area college students." },
              { label: 'Target',           value: 'Adventurous Newcomers — 18–20 year olds new to Boston, looking for affordable, low-commitment activities.' },
              { label: 'Consumer Problem', value: "Can't justify gear spending on hobbies they don't yet integrate into their routine. Going outside feels like work." },
              { label: 'Desired Action',   value: 'Think: "I don\'t have to go out of my way to enjoy simple pleasures." Do: sign up for Escape Routes.' },
              { label: 'Key Message',      value: "Getting outside shouldn't feel like a second job. Dick's makes it so easy, it feels like you're getting away with something." },
            ].map(b => (
              <div key={b.label} className="grid-cell" style={{ padding: '1rem' }}>
                <div className="text-label" style={{ color: 'var(--green)', marginBottom: '0.25rem' }}>{b.label}</div>
                <p className="text-body-sm" style={{ color: 'var(--text-secondary)' }}>{b.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Embedded Deck ────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 'var(--max-width)',
          margin:   '0 auto',
          padding:  '3rem 2rem',
        }}
      >
        <div className="section-label" style={{ marginBottom: '1.5rem' }}>Full presentation</div>
        <div
          style={{
            position:    'relative',
            width:       '100%',
            paddingTop:  '56.25%',
            background:  'var(--bg-secondary)',
            border:      '1px solid var(--border)',
          }}
        >
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vQztiF69pBiD60EwprwkvfYVKB5PqW-MnheuNpUPKIYpN5FLqbwfQ2KGMxRD1Murnnadoki35fXu_ZA/pubembed?start=false&loop=false&delayms=3000"
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
    </>
  )
}