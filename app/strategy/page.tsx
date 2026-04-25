
'use client'
 
import Link from 'next/link'
 
const briefs = [
  {
    slug:      'dicks',
    number:    '01',
    brand:     "Dick's Sporting Goods",
    title:     'Escape Routes',
    tags:      ['Audience Research', 'Recollective Study', 'Brand Strategy'],
    hook:      "When getting outside feels like a second job, no one goes outside. Here's how Dick's can change the game.",
    bg:        '#E8F5E2',
    accent:    '#F4A261',
    darkText:  true,
  },
  {
    slug:      'liquid-death',
    number:    '02',
    brand:     'Liquid Death',
    title:     'Bleed for a Cause',
    tags:      ['Experiential Marketing', 'Brand Extension', 'Event Design'],
    hook:      "Liquid death takes over Valentine's day with a blood drive. As a bleeding heart brand, only Liquid Death could own this.",
    bg:        '#FF69B4',
    accent:    '#FFFFFF',
    darkText:  true,
  },
  {
    slug:      'rold-gold',
    number:    '03',
    brand:     'Rold Gold',
    title:     'True Crime Subculture',
    tags:      ['Subculture Research', 'Consumer Insight', 'Creative Brief'],
    hook:      "True Crime is about more than morbid facination. We did a deep dive into what fuels podcast listeners ritual and made Rold Gold part of it.",
    bg:        '#E8E0F0',
    accent:    '#7B6B8A',
    darkText:  true,
  },
]
 
export default function StrategyPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        style={{
          padding:      '4rem 2rem 2rem',
          maxWidth:     'var(--max-width)',
          margin:       '0 auto',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="section-label">Strategy</div>
        <h1
          className="text-display"
          style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}
        >
          Welcome to strategy!
        </h1>
        <p className="text-body" style={{ maxWidth: 560, color: 'var(--text-secondary)' }}>
          Here you'll find a few of my favroite projects that combine good research with better storytelling.
        </p>
      </section>
 
      {/* ── Strategist Skills ─────────────────────────────────────────── */}
      <section
        style={{
          maxWidth:     'var(--max-width)',
          margin:       '0 auto',
          padding:      '3rem 2rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="section-label">What makes me tick</div>
        <div
          className="grid-1px"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '1.5rem' }}
        >
          {[
            {
              glyph: '26.2',
              title: 'In it For the Long Haul',
              body:  "I need to see things through. That's not a virtue I perform — it's just how I'm wired. I ran a marathon in Vermont in the middle of summer with pneumonia and finished. Strategy is the same instinct: I don't quit when the problem gets uncomfortable, I get more interested.",
            },
            {
              glyph: '01',
              title: 'Bilingual: Data + Human',
              body:  "I build the charts and I write the story that makes them matter. Numbers tell me what's true — Python, SQL, Rust, Power BI — but beautiful visualizations alone convince no one of anything. My job is the translation layer between what the data shows and what a person actually does with it.",
            },
            {
              glyph: '→',
              title: 'I Process Slowly, on Purpose',
              body:  "The best rock climbers don't charge the wall. They read the whole route first. I do the same thing with a brief — I sit with the problem longer than feels comfortable, until I understand what's actually being asked. That's what kept me from solving the wrong problem at Orbit, at Campus Planning, and at Code for Boston.",
            },
          ].map(s => (
            <div key={s.title} className="grid-cell" style={{ padding: '1.5rem' }}>
              <div
                style={{
                  fontFamily:   'var(--font-serif)',
                  fontSize:     '2rem',
                  color:        'var(--green)',
                  marginBottom: '0.75rem',
                  lineHeight:   1,
                }}
              >
                {s.glyph}
              </div>
              <p
                className="text-heading-sm"
                style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', color: 'var(--text-primary)' }}
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
          padding:  '3rem 2rem',
        }}
      >
        <div className="section-label">Selected briefs</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 1, marginTop: '1.5rem' }}>
          {briefs.map(b => (
            <Link
              key={b.slug}
              href={`/strategy/${b.slug}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div
                style={{
                  display:         'grid',
                  gridTemplateColumns: '1fr 2fr auto',
                  alignItems:      'center',
                  gap:             '2rem',
                  background:      b.bg,
                  border:          '1px solid var(--border)',
                  padding:         '2rem',
                  transition:      'opacity 0.15s ease',
                  cursor:          'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                {/* Left: number + brand */}
                <div>
                  <div
                    style={{
                      fontFamily:    'var(--font-serif)',
                      fontSize:      '3rem',
                      color:         b.accent,
                      lineHeight:    1,
                      marginBottom:  '0.5rem',
                      opacity:       0.6,
                    }}
                  >
                    {b.number}
                  </div>
                  <div className="text-label" style={{ color: b.accent }}>
                    {b.brand}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize:   '1.25rem',
                      color:      b.darkText ? '#161616' : 'var(--text-primary)',
                      marginTop:  '0.25rem',
                    }}
                  >
                    {b.title}
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
                    {b.tags.map(t => (
                      <span
                        key={t}
                        className="text-label"
                        style={{
                          background: 'rgba(0,0,0,0.1)',
                          padding:    '2px 8px',
                          color:      b.darkText ? '#444' : 'var(--text-muted)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
 
                {/* Middle: hook */}
                <p className="text-body" style={{ color: b.darkText ? '#333' : 'var(--text-secondary)', maxWidth: 480 }}>
                  {b.hook}
                </p>
 
                {/* Right: arrow */}
                <div
                  style={{
                    width:           40,
                    height:          40,
                    border:          `1px solid ${b.accent}`,
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'center',
                    color:           b.accent,
                    fontFamily:      'var(--font-sans)',
                    fontSize:        '1.1rem',
                    flexShrink:      0,
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
 