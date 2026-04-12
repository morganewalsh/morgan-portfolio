'use client'

import Image from 'next/image'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'

const skills = [
  { cat: 'Data',     items: 'Python · SQL · Rust · Power BI · geospatial' },
  { cat: 'Design',   items: 'Figma · Framer · UX research · Adobe CC'     },
  { cat: 'Strategy', items: 'Brand · market research · campaign · comms'  },
  { cat: 'Language', items: 'Spanish'  },
]

const projects = [
  {
    tag:   'Data',
    title: 'Boston accident trends',
    desc:  'Rust-powered analysis of traffic incident data — where, when, and who bears the cost.',
    href:  '/data',
  },
  {
    tag:   'UX / Product',
    title: 'Pack app',
    desc:  'Product design for a collaborative trip-packing tool — research, flows, prototype.',
    href:  '/ux',
  },
  {
    tag:   'Strategy',
    title: 'Liquid Death campaign',
    desc:  'Experiential marketing strategy — research, brief, and full campaign execution.',
    href:  '/strategy',
  },
  {
    tag:   'Strategy',
    title: 'Best Buy brand portfolio',
    desc:  'Full brand strategy — positioning, audience research, and creative execution.',
    href:  '/strategy',
  },
]

const facts = [
  'BU Run Club — Social Chair',
  'Code for Boston member',
  'Guitarist',
]

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding:      '3rem 2rem 2.5rem',
          borderBottom: '1px solid var(--border)',
          display:      'grid',
          gridTemplateColumns: '1fr auto',
          gap:          '2rem',
          alignItems:   'center',
          maxWidth:     'var(--max-width)',
          margin:       '0 auto',
        }}
      >
        <div>
          <p
            className="text-label"
            style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}
          >
            Boston, MA · BU Advertising + Data Science '26
          </p>

          <h1
            className="text-display"
            style={{ maxWidth: 520, marginBottom: '1rem' }}
          >
            I grew up where <em>car</em> sounds like <em>cah</em> — speech
            therapy taught me that how you communicate matters as much as what
            you&apos;re saying.
          </h1>

          <p className="text-body" style={{ maxWidth: 440, marginBottom: '1.5rem' }}>
            Now I work with data and design to turn complex problems into
            stories that are easy to understand and solve.
          </p>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link href="/data" className="btn btn-primary">See my work</Link>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          </div>
        </div>

        {/* Oval photo */}
          <img
            src="/headshot.png"
            alt="Morgan Walsh"
            style={{ 
              width: 200, 
              height: 'auto',
              flexShrink :0, 
            }}
          />
      </section>

      {/* ── Skills ───────────────────────────────────────────────────────── */}
      <section
        style={{
          padding:      '2rem',
          borderBottom: '1px solid var(--border)',
          maxWidth:     'var(--max-width)',
          margin:       '0 auto',
        }}
      >
        <div className="section-label">What I work with</div>
        <div
          className="grid-1px"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}
        >
          {skills.map(s => (
            <div key={s.cat} className="grid-cell" style={{ padding: '1rem' }}>
              <div
                style={{
                  fontSize:      '0.6875rem',
                  fontWeight:    500,
                  color:         'var(--green)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom:  '0.35rem',
                }}
              >
                {s.cat}
              </div>
              <div className="text-body-sm">{s.items}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Projects ─────────────────────────────────────────────────────── */}
      <section
        style={{
          padding:      '2rem',
          borderBottom: '1px solid var(--border)',
          maxWidth:     'var(--max-width)',
          margin:       '0 auto',
        }}
      >
        <div className="section-label">Selected work</div>
        <div
          className="grid-1px"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
        >
          {projects.map(p => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────────────── */}
      <section
        style={{
          padding:      '2rem',
          borderBottom: '1px solid var(--border)',
          maxWidth:     'var(--max-width)',
          margin:       '0 auto',
        }}
      >
        <div className="section-label">About</div>
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: '1fr 1fr',
            gap:                 '2rem',
          }}
        >
          {/* Bio */}
          <div>
            <p className="text-body" style={{ marginBottom: '0.75rem' }}>
              I&apos;m a designer and analyst finishing a degree in advertising
              with a data science minor at Boston University. I began thinking about
              how stories shape our communities through journalism: writing about
              my local government at 15 taught me how to find a story before I knew 
              how to visualize it.
            </p>
            <p className="text-body">
              I care about the places where people&apos;s relationship with the
              world gets designed, and, admittedly, finding the perfect font for 
              every occasion. How we communicate, and what it looks like,
              really does matter. 
            </p>
            <div style={{ marginTop: '1rem' }}>
              {facts.map(f => (
                <div
                  key={f}
                  className="text-body-sm"
                  style={{
                    padding:      '0.4rem 0',
                    borderBottom: '1px solid var(--border)',
                    display:      'flex',
                    alignItems:   'center',
                    gap:          '0.5rem',
                  }}
                >
                  <span
                    style={{
                      width:        4,
                      height:       4,
                      borderRadius: '50%',
                      background:   'var(--green)',
                      flexShrink:   0,
                    }}
                  />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Resume card */}
          <div
            style={{
              background:    'var(--bg-secondary)',
              border:        '1px solid var(--border)',
              display:       'flex',
              flexDirection: 'column',
              height:        '100%',
              minHeight:     400,
            }}
          >
            <div
              style={{
                padding:        '0.75rem 1rem',
                borderBottom:   '1px solid var(--border)',
                display:        'flex',
                justifyContent: 'space-between',
                alignItems:     'center',
              }}
            >
              <div>
                <div className="text-label" style={{ color: 'var(--green)', marginBottom: 2 }}>
                  Résumé
                </div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--text-primary)' }}>
                  Morgan E. Walsh
                </div>
              </div><a
                href="/resume.pdf"
                download
                className="btn btn-primary"
                style={{ fontSize: '0.75rem', padding: '6px 14px' }}
              >
                Download ↓
              </a>
            </div>
            <iframe
              src="/resume.pdf"
              style={{
                flex:      1,
                width:     '100%',
                minHeight: 340,
                border:    'none',
                background: 'var(--bg-secondary)',
              }}
              title="Morgan Walsh résumé"
            />
          </div>

        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{
          padding:  '2rem',
          maxWidth: 'var(--max-width)',
          margin:   '0 auto',
        }}
      >
        <div className="section-label">Contact</div>
        <h2
          className="text-heading"
          style={{
            fontFamily:    'var(--font-serif)',
            marginBottom:  '0.5rem',
          }}
        >
          Let&apos;s build something worth building.
        </h2>
        <p className="text-body" style={{ maxWidth: 400, marginBottom: '1.25rem' }}>
          Looking for product design and data roles in Boston starting 
          summer 2026. I&apos;m interested in teams building things that are 
          genuinely worth understanding.
          </p>

        {/* Simple mailto form — swap for a real form handler when ready */}
        <div
          style={{
            display:   'flex',
            maxWidth:  400,
            border:    '1px solid var(--text-disabled)',
          }}
        >
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              flex:       1,
              background: 'var(--bg-secondary)',
              border:     'none',
              color:      'var(--text-primary)',
              fontFamily: 'var(--font-sans)',
              fontSize:   '0.8125rem',
              padding:    '0.625rem 0.875rem',
              outline:    'none',
            }}
          />
          <button className="btn btn-primary" style={{ borderRadius: 0 }}>
            Send →
          </button>
        </div>

        <div
          style={{
            display:   'flex',
            gap:       '1.5rem',
            marginTop: '1rem',
          }}
        >
          {[
            { label: 'mwalshe@bu.edu', href: 'mailto:mwalshe@bu.edu' },
            { label: 'LinkedIn',       href: 'https://linkedin.com/in/morganwalsh' },
            { label: 'GitHub',         href: 'https://github.com/morganwalsh'      },
          ].map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-body-sm"
              style={{
                color:      'var(--text-muted)',
                transition: 'color 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--green)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

