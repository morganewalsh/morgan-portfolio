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
    label: 'The Problem',
    text:  "Cost, logistics, and time turn getting outside into a second job — so college students default to what's easy and bigger adventures stay stuck in the group chat.",
  },
  {
    Icon:  IconInsight,
    label: 'The Insight',
    text:  "Dick's has an opportunity to make outdoor exploration the new default for college students by removing the friction entirely.",
  },
  {
    Icon:  IconMessage,
    label: 'Key Message',
    text:  "Getting outside shouldn't feel like a second job. Dick's makes it so easy, it feels like you're getting away with something.",
  },
  {
    Icon:  IconRole,
    label: 'My Role',
    text:  "Research design, Recollective survey build, audience analysis, brief writing, and campaign concepting — 33 BU undergrads, fully synthesized.",
  },
]

export default function DicksPage() {
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
              Case 01 · Dick&apos;s Sporting Goods
            </div>
            <h1
              className="text-display"
              style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}
            >
              Escape Routes
            </h1>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {['Audience Research', 'Recollective Study', 'Brand Strategy'].map(t => (
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

          {/* Color block accent */}
          <div
            style={{
              width:      120,
              height:     80,
              background: '#E8F5E2',
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
          maxWidth: 'var(--max-width)',
          margin:   '0 auto',
          padding:  '2.5rem 2rem',
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
          &ldquo;I don&apos;t have to go out of my way to enjoy simple pleasures.&rdquo;
        </p>
        <p className="text-label" style={{ color: 'var(--text-muted)', marginTop: '0.75rem' }}>
          Desired consumer thought
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