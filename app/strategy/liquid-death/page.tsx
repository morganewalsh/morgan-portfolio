'use client'

import Link from 'next/link'

export default function LiquidDeathPage() {
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
          Case 02 · Liquid Death
        </div>
        <h1
          className="text-display"
          style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.75rem' }}
        >
          Bleed for a Cause
        </h1>
        <p className="text-body" style={{ maxWidth: 560, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Experiential Marketing · Brand Extension · Event Design
        </p>

        {/* Meta grid */}
        <div className="grid-1px" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
          {[
            { label: 'Client',      value: 'Liquid Death' },
            { label: 'My Role',     value: 'Concept development · Brand voice · Event design · Campaign copy' },
            { label: 'Format',      value: 'Experiential activation + limited edition product design' },
            { label: 'Deliverable', value: 'Campaign concept, event design, can design, OOH' },
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
            <div className="section-label" style={{ marginBottom: '1rem' }}>The Tension</div>
            <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Liquid Death is a water brand that acts like it hates water. Its entire identity is built on refusing to participate in the performative wellness culture that surrounds hydration. Valentine&apos;s Day is the Super Bowl of meaningless consumerism — cheap flowers, hollow gestures, brands clambering to seem romantic.
            </p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              The brief: design an experiential campaign that extends the brand without softening it. The instinct that killed every other idea: Liquid Death doesn&apos;t join Valentine&apos;s Day — it takes it over.
            </p>
          </div>
          <div>
            <div className="section-label" style={{ marginBottom: '1rem' }}>The Insight</div>
            <p className="text-body" style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              A day about love should be spent doing good, not buying cheap chocolate. Liquid Death is a genuine bleeding-heart company — environmentally committed, anti-establishment, built for people who want to mean something.
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
              Only Liquid Death could own a Valentine&apos;s Day blood drive — because they&apos;re the only brand that would challenge the status quo of the holiday for a genuinely good cause.
            </p>
          </div>
        </div>

        {/* Campaign details */}
        <div
          style={{
            marginTop:  '2rem',
            background: 'var(--bg-secondary)',
            border:     '1px solid var(--border)',
            padding:    '1.5rem',
          }}
        >
          <div className="section-label" style={{ marginBottom: '1rem' }}>The Execution</div>
          <div className="grid-1px" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {[
              { label: 'The Activation',  value: "Liquid Death takes over portable blood banks in major cities. A van dripping with blood, punctured by an arrow — sterile inside, rockstar outside." },
              { label: 'The Product',     value: "Limited edition blood-type matched cans. Heart-shaped (like the organ) gummies. Tattoo-themed band-aids. Recycled aluminum pins." },
              { label: 'The Hook',        value: "Post your pokes with #bleedforacause — because what's a good deed if Instagram doesn't know about it?" },
              { label: 'Key Message',     value: "This Valentine's Day goes out to all the bleeding hearts who know a day about love should be spent doing good." },
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
            src="https://docs.google.com/presentation/d/e/2PACX-1vSoXOLXUIafg6DGq-Y2_9uyOdu4Gu6kVydjHZNMpPHEu7gwvZXjSfbA_XVzYYRZvi0ltRPkEgJLzty3/pubembed?start=false&loop=false&delayms=3000"
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