'use client'

import Link from 'next/link'

const briefs = [
  {
    slug:    'dicks',
    brand:   "Dick's Sporting Goods",
    title:   'Escape Routes',
    blurb:   "When getting outside feels like a second job, no one goes outside. We ran a Recollective audience study with 33 BU undergrads to find out why — then built the campaign to fix it.",
    tags:    ['Audience Research', 'Recollective Study', 'Brand Strategy'],
    imgSide: 'left',
    bg:      '#E8F5E2',
    accent:  '#F4A261',
  },
  {
    slug:    'liquid-death',
    brand:   'Liquid Death',
    title:   'Bleed for a Cause',
    blurb:   "A Valentine's Day blood drive in a van that looks like it's on tour with a rockstar. Liquid Death doesn't join the holiday — it hijacks it.",
    tags:    ['Experiential Marketing', 'Brand Extension', 'Event Design'],
    imgSide: 'right',
    bg:      '#FF69B4',
    accent:  '#ffffff',
  },
  {
    slug:    'rold-gold',
    brand:   'Rold Gold',
    title:   'True Crime Subculture',
    blurb:   "89% of weekly podcast listeners have binged true crime. We figured out what snack belongs in that ritual — and exactly why it has to be Rold Gold.",
    tags:    ['Subculture Research', 'Consumer Insight', 'Creative Brief'],
    imgSide: 'left',
    bg:      '#E8E0F0',
    accent:  '#7B6B8A',
  },
]

export default function StrategyPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        style={{
          padding:      '4rem 2rem 3rem',
          maxWidth:     'var(--max-width)',
          margin:       '0 auto',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <p
          className="text-label"
          style={{ color: '#4D8059', marginBottom: '0.75rem' }}
        >
          Strategy
        </p>
        <h1
          style={{
            fontFamily:   'var(--font-serif)',
            fontSize:     'clamp(2rem, 5vw, 3rem)',
            color:        '#161616',
            marginBottom: '1.25rem',
            maxWidth:     640,
            lineHeight:   1.2,
          }}
        >
          Why do people do what they do?
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize:   '1rem',
            fontWeight: 300,
            lineHeight: 1.75,
            color:      '#444',
            maxWidth:   560,
          }}
        >
          One of my most prized birthday gifts was &ldquo;The Big Book of Questions and Answers&rdquo;; my parents couldn&apos;t keep up with how many I asked. Now I make it my job to find out why people do what they do.
        </p>
      </section>

      {/* ── Checkerboard Grid ─────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 'var(--max-width)',
          margin:   '0 auto',
          padding:  '0 2rem 4rem',
        }}
      >
        {briefs.map((b) => (
          <div
            key={b.slug}
            style={{
              display:             'grid',
              gridTemplateColumns: '1fr 1fr',
              borderBottom:        '1px solid #e0e0e0',
              minHeight:           360,
            }}
          >
            {/* Image block */}
            <div
              style={{
                order:      b.imgSide === 'left' ? 1 : 2,
                background: b.bg,
                display:    'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight:  360,
                padding:    '2rem',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize:   'clamp(1.5rem, 4vw, 2.5rem)',
                  color:      b.accent === '#ffffff' ? '#161616' : b.accent,
                  textAlign:  'center',
                  lineHeight: 1.2,
                  fontStyle:  'italic',
                  opacity:    0.7,
                }}
              >
                {b.title}
              </div>
            </div>

            {/* Text block */}
            <Link
              href={`/strategy/${b.slug}`}
              style={{ textDecoration: 'none', order: b.imgSide === 'left' ? 2 : 1 }}
            >
              <div
                style={{
                  padding:        '3rem 2.5rem',
                  display:        'flex',
                  flexDirection:  'column',
                  justifyContent: 'center',
                  height:         '100%',
                  background:     '#ffffff',
                  transition:     'background 0.15s ease',
                  cursor:         'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f7f7f7')}
                onMouseLeave={e => (e.currentTarget.style.background = '#ffffff')}
              >
                <p
                  className="text-label"
                  style={{ color: '#4D8059', marginBottom: '0.4rem' }}
                >
                  {b.brand}
                </p>
                <h2
                  style={{
                    fontFamily:   'var(--font-serif)',
                    fontSize:     '1.5rem',
                    color:        '#161616',
                    marginBottom: '0.75rem',
                    fontWeight:   400,
                  }}
                >
                  {b.title}
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize:   '0.875rem',
                    fontWeight: 300,
                    lineHeight: 1.75,
                    color:      '#555',
                    marginBottom: '1.25rem',
                  }}
                >
                  {b.blurb}
                </p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                  {b.tags.map(t => (
                    <span
                      key={t}
                      className="text-label"
                      style={{
                        background: '#f0f0f0',
                        padding:    '2px 8px',
                        color:      '#888',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    display:    'flex',
                    alignItems: 'center',
                    gap:        '0.4rem',
                    color:      '#4D8059',
                    fontSize:   '0.8125rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 400,
                  }}
                >
                  View case study →
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  )
}
 