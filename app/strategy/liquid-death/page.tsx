'use client'

import Link from 'next/link'

const IconTarget = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="16" r="12" />
    <circle cx="16" cy="16" r="6" />
    <circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none" />
    <line x1="16" y1="4" x2="16" y2="1" />
    <line x1="16" y1="28" x2="16" y2="31" />
    <line x1="4" y1="16" x2="1" y2="16" />
    <line x1="28" y1="16" x2="31" y2="16" />
  </svg>
)

const IconInsight = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="13" r="8" />
    <line x1="12" y1="24" x2="20" y2="24" />
    <line x1="13" y1="27" x2="19" y2="27" />
    <line x1="16" y1="5" x2="16" y2="2" />
    <line x1="24" y1="8" x2="26" y2="6" />
    <line x1="8" y1="8" x2="6" y2="6" />
  </svg>
)

const IconMessage = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="6" width="28" height="18" rx="1" />
    <polyline points="2,6 16,17 30,6" />
  </svg>
)

const IconRole = () => (
  <svg width="20" height="20" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="10" r="5" />
    <path d="M4 26c0-6.627 5.373-12 12-12s12 5.373 12 12" />
  </svg>
)

const sections = [
  {
    Icon:  IconTarget,
    label: 'The Tension',
    text:  "Valentine's Day is the Super Bowl of meaningless consumerism. Liquid Death is built on refusing to participate in exactly that.",
  },
  {
    Icon:  IconInsight,
    label: 'The Insight',
    text:  "Only Liquid Death could own a Valentine's Day blood drive — because they're the only brand that would hijack the holiday for a genuinely good cause.",
  },
  {
    Icon:  IconMessage,
    label: 'Key Message',
    text:  "This Valentine's Day goes out to all the bleeding hearts who know a day about love should be spent doing good.",
  },
  {
    Icon:  IconRole,
    label: 'My Role',
    text:  "Concept development, brand voice, event design, limited edition can design, OOH creative, and campaign copy.",
  },
]

export default function LiquidDeathPage() {
  return (
    <>
      {/* ── Header ───────────────────────────────────────────────────── */}
      <section
        style={{
          padding:      '4rem 2rem 2.5rem',
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

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="text-label" style={{ color: 'var(--green)', marginBottom: '0.4rem' }}>
              Case 02 · Liquid Death
            </div>
            <h1
              className="text-display"
              style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}
            >
              Bleed for a Cause
            </h1>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {['Experiential Marketing', 'Brand Extension', 'Event Design'].map(t => (
                <span
                  key={t}
                  className="text-label"
                  style={{ background: 'var(--bg-secondary)', padding: '2px 8px', color: 'var(--text-muted)' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div
            style={{
              width:      120,
              height:     80,
              background: '#FF69B4',
              border:     '1px solid var(--border)',
              flexShrink: 0,
            }}
          />
        </div>
      </section>

      {/* ── Icon sections ────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth:     'var(--max-width)',
          margin:       '0 auto',
          padding:      '2.5rem 2rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          className="grid-1px"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
        >
          {sections.map(({ Icon, label, text }) => (
            <div key={label} className="grid-cell" style={{ padding: '1.25rem' }}>
              <div style={{ color: 'var(--green)', marginBottom: '0.6rem' }}>
                <Icon />
              </div>
              <div className="text-label" style={{ color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                {label}
              </div>
              <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pull quote ───────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth:     'var(--max-width)',
          margin:       '0 auto',
          padding:      '2.5rem 2rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize:   'clamp(1.25rem, 3vw, 1.75rem)',
            color:      'var(--text-primary)',
            maxWidth:   640,
            lineHeight: 1.4,
            fontStyle:  'italic',
          }}
        >
          &ldquo;Post your pokes with #bleedforacause — because what&apos;s a good deed if Instagram doesn&apos;t know about it?&rdquo;
        </p>
        <p className="text-label" style={{ color: 'var(--text-muted)', marginTop: '0.75rem' }}>
          Campaign hook
        </p>
      </section>

      {/* ── Embedded Deck ────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 'var(--max-width)',
          margin:   '0 auto',
          padding:  '2.5rem 2rem',
        }}
      >
        <div className="section-label" style={{ marginBottom: '1.25rem' }}>Full presentation</div>
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