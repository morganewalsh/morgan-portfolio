'use client'

import Link from 'next/link'

const briefs = [
  {
    slug:     'dicks',
    number:   '01',
    brand:    "Dick's Sporting Goods",
    title:    'Escape Routes',
    tags:     ['Audience Research', 'Recollective Study', 'Brand Strategy'],
    hook:     "When getting outside feels like a second job, no one goes outside. We found out why — then built the brief to fix it.",
    bg:       '#E8F5E2',
    accent:   '#F4A261',
    darkText: true,
  },
  {
    slug:     'liquid-death',
    number:   '02',
    brand:    'Liquid Death',
    title:    'Bleed for a Cause',
    tags:     ['Experiential Marketing', 'Brand Extension', 'Event Design'],
    hook:     "A Valentine's Day blood drive in a van that looks like it's on tour with a rockstar. Only Liquid Death could own this.",
    bg:       '#FF69B4',
    accent:   '#FFFFFF',
    darkText: true,
  },
  {
    slug:     'rold-gold',
    number:   '03',
    brand:    'Rold Gold',
    title:    'True Crime Subculture',
    tags:     ['Subculture Research', 'Consumer Insight', 'Creative Brief'],
    hook:     "89% of weekly podcast listeners have binged true crime. We figured out what snack belongs in that ritual — and why.",
    bg:       '#E8E0F0',
    accent:   '#7B6B8A',
    darkText: true,
  },
]

const skills = [
  {
    glyph: '26.2',
    title: 'In it For the Long Haul',
    body:  "I ran a marathon in Vermont in the summer with pneumonia and finished. I don't quit when the problem gets uncomfortable — I get more interested.",
  },
  {
    glyph: '01',
    title: 'Bilingual: Data + Human',
    body:  "I build the charts and write the story that makes them matter. Beautiful visualizations alone convince no one of anything.",
  },
  {
    glyph: '→',
    title: 'I Process Slowly, on Purpose',
    body:  "I sit with a brief longer than feels comfortable — until I understand what's actually being asked, not just what was said.",
  },
]

export default function StrategyPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        style={{
          padding:      '4rem 2rem 2.5rem',
          maxWidth:     'var(--max-width)',
          margin:       '0 auto',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="section-label">Strategy</div>
        <h1
          className="text-display"
          style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', maxWidth: 560 }}
        >
          How I think before I build.
        </h1>
        <p className="text-body" style={{ maxWidth: 480, color: 'var(--text-secondary)' }}>
          Three briefs. Three brands. One through line: the problem is never the problem you start with.
        </p>
      </section>

      {/* ── Skills ───────────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth:     'var(--max-width)',
          margin:       '0 auto',
          padding:      '2.5rem 2rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="section-label">What makes me tick</div>
        <div
          className="grid-1px"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', marginTop: '1.25rem' }}
        >
          {skills.map(s => (
            <div key={s.title} className="grid-cell" style={{ padding: '1.5rem' }}>
              <div
                style={{
                  fontFamily:   'var(--font-serif)',
                  fontSize:     '1.75rem',
                  color:        'var(--green)',
                  marginBottom: '0.75rem',
                  lineHeight:   1,
                }}
              >
                {s.glyph}
              </div>
              <p
                style={{
                  fontFamily:   'var(--font-serif)',
                  fontSize:     '1rem',
                  color:        'var(--text-primary)',
                  marginBottom: '0.5rem',
                }}
              >
                {s.title}
              </p>
              <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Brief Cards ───────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 'var(--max-width)',
          margin:   '0 auto',
          padding:  '2.5rem 2rem',
        }}
      >
        <div className="section-label">Selected briefs</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: '1.25rem' }}>
          {briefs.map(b => (
            <Link
              key={b.slug}
              href={`/strategy/${b.slug}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div
                style={{
                  display:             'grid',
                  gridTemplateColumns: '200px 1fr auto',
                  alignItems:          'center',
                  gap:                 '2rem',
                  background:          b.bg,
                  border:              '1px solid var(--border)',
                  padding:             '2rem',
                  transition:          'filter 0.15s ease',
                  cursor:              'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(0.93)')}
                onMouseLeave={e => (e.currentTarget.style.filter = 'brightness(1)')}
              >
                {/* Left */}
                <div>
                  <div
                    style={{
                      fontFamily:   'var(--font-serif)',
                      fontSize:     '2.5rem',
                      color:        b.darkText ? 'rgba(0,0,0,0.2)' : b.accent,
                      lineHeight:   1,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {b.number}
                  </div>
                  <div className="text-label" style={{ color: b.accent, marginBottom: '0.2rem' }}>
                    {b.brand}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize:   '1.1rem',
                      color:      b.darkText ? '#161616' : 'var(--text-primary)',
                    }}
                  >
                    {b.title}
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.6rem' }}>
                    {b.tags.map(t => (
                      <span
                        key={t}
                        className="text-label"
                        style={{
                          background: 'rgba(0,0,0,0.08)',
                          padding:    '2px 7px',
                          color:      b.darkText ? '#555' : 'var(--text-muted)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hook */}
                <p
                  className="text-body"
                  style={{ color: b.darkText ? '#333' : 'var(--text-secondary)', maxWidth: 420 }}
                >
                  {b.hook}
                </p>

                {/* Arrow */}
                <div
                  style={{
                    width:          36,
                    height:         36,
                    border:         `1px solid ${b.darkText ? 'rgba(0,0,0,0.3)' : b.accent}`,
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    color:          b.darkText ? '#333' : b.accent,
                    fontSize:       '1rem',
                    flexShrink:     0,
                  }}
                >
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
 