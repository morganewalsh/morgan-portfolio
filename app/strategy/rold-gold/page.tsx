'use client'

import Link from 'next/link'

export default function RoldGoldPage() {
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
          Case 03 · Rold Gold
        </div>
        <h1
          className="text-display"
          style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.75rem' }}
        >
          True Crime Subculture
        </h1>
        <p className="text-body" style={{ maxWidth: 560, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Subculture Research · Consumer Insight · Creative Brief
        </p>

        {/* Meta grid */}
        <div className="grid-1px" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
          {[
            { label: 'Client',      value: 'Rold Gold' },
            { label: 'My Role',     value: 'Subculture analysis · Target profiling · Insight development · Brief writing' },
            { label: 'Method',      value: 'Desk research · Myth/reality audit · Edison & Pew data' },
            { label: 'Deliverable', value: 'Creative brief + media channel strategy + new flavor concept' },
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
            <div className="section-label" style={{ marginBottom: '1rem' }}>The Subculture</div>
            <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              True crime is one of the most misunderstood audiences in media. The stereotypes — morbid, passive, disengaged — are wrong. 89% of weekly podcast listeners have binged true crime. 77% prefer victim-centered content. They are 3.6x more likely to donate to related causes than the average listener.
            </p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              Our target: women 18–29 who consume true crime daily while multitasking. Driven by empathy and a desire to make sense of injustice. Habitual, ritual listeners — not passive consumers.
            </p>
          </div>
          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>The Insight</div>
            <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              People turn to true crime to make the unknown feel more understandable. The content is heavy, emotionally demanding, and immersive. What they need alongside it isn&apos;t stimulation — it&apos;s grounding.
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
              Heavy stories become more digestible when the moment itself feels simple.
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
              { label: 'Goal',             value: 'Make Rold Gold the snack of choice for the true crime subculture.' },
              { label: 'Target',           value: 'Women 18–29. Habitual true crime listeners who consume daily while multitasking, commuting, or winding down.' },
              { label: 'Consumer Problem', value: 'True crime enthusiasts seek a snack that offers comfort and familiarity to balance the intensity of the content.' },
              { label: 'Desired Action',   value: 'Think: "Rold Gold is my ultimate comfort snack." Do: make it part of the true crime ritual.' },
              { label: 'Key Message',      value: 'Heavy stories become more digestible when the moment feels simple. Rold Gold is the snack that stays out of the way.' },
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
            position:   'relative',
            width:      '100%',
            paddingTop: '56.25%',
            background: 'var(--bg-secondary)',
            border:     '1px solid var(--border)',
          }}
        >
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vRJqaDuxhAGA0yzFkIYnb9cvN4bLnhT-duq8vQHdXb_yAfA92zT7PdyA-aQnAJWs_L7M0eO793udHH3/pubembed?start=false&loop=false&delayms=3000"
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