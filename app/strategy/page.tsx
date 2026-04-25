'use client'

import Link from 'next/link'

export default function StrategyPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '4rem 2rem 2rem',
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="section-label">Strategy</div>
        <h1
          className="text-display"
          style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}
        >
          How I think before I build.
        </h1>
        <p className="text-body" style={{ maxWidth: 560, color: 'var(--text-secondary)' }}>
          Three briefs. Three brands. One through line: the problem is never the problem you start with.
        </p>
      </section>

      {/* ── Strategist Skills ─────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: '3rem 2rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="section-label">What makes me tick</div>
        <div
          className="grid-1px"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '1.5rem' }}
        >
          {/* Skill 1 */}
          <div className="grid-cell" style={{ padding: '1.5rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                color: 'var(--green)',
                marginBottom: '0.75rem',
                lineHeight: 1,
              }}
            >
              26.2
            </div>
            <p
              className="text-heading-sm"
              style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', color: 'var(--text-primary)' }}
            >
              In it For the Long Haul
            </p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              I need to see things through. That&apos;s not a virtue I perform — it&apos;s just how I&apos;m wired. I ran a marathon in Vermont in the middle of summer with pneumonia and finished. Strategy is the same instinct: I don&apos;t quit when the problem gets uncomfortable, I get more interested.
            </p>
          </div>

          {/* Skill 2 */}
          <div className="grid-cell" style={{ padding: '1.5rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                color: 'var(--green)',
                marginBottom: '0.75rem',
                lineHeight: 1,
              }}
            >
              01
            </div>
            <p
              className="text-heading-sm"
              style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', color: 'var(--text-primary)' }}
            >
              Bilingual: Data + Human
            </p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              I build the charts and I write the story that makes them matter. Numbers tell me what&apos;s true — Python, SQL, Rust, Power BI — but beautiful visualizations alone convince no one of anything. My job is the translation layer between what the data shows and what a person actually does with it.
            </p>
          </div>

          {/* Skill 3 */}
          <div className="grid-cell" style={{ padding: '1.5rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                color: 'var(--green)',
                marginBottom: '0.75rem',
                lineHeight: 1,
              }}
            >
              →
            </div>
            <p
              className="text-heading-sm"
              style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', color: 'var(--text-primary)' }}
            >
              I Process Slowly, on Purpose
            </p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              The best rock climbers don&apos;t charge the wall. They read the whole route first. I do the same thing with a brief — I sit with the problem longer than feels comfortable, until I understand what&apos;s actually being asked. That&apos;s what kept me from solving the wrong problem at Orbit, at Campus Planning, and at Code for Boston.
            </p>
          </div>
        </div>
      </section>

      {/* ── Case Study 1: Dick's / Recollective ──────────────────────── */}
      <section
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: '3rem 2rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="section-label">Case 01</div>

        {/* Setup */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', margin: '1.5rem 0', alignItems: 'start' }}>
          <div>
            <h2 className="text-heading" style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
              Dick&apos;s Sporting Goods
            </h2>
            <p className="text-body-sm" style={{ color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Audience Research · Recollective Study · Brand Strategy
            </p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              Dick&apos;s wanted to reach Boston-area college students — a generation that wants the outdoors but can&apos;t afford the barrier to entry. We ran a Recollective audience study with 33 BU undergrads to find out what was actually stopping them.
            </p>
          </div>
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              padding: '1.25rem',
            }}
          >
            <p className="text-label" style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>My Role</p>
            <p className="text-body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Research design · Recollective survey build · Audience analysis · Brief writing · Creative concepting
            </p>
          </div>
        </div>

        {/* Insight + Brief */}
        <div className="grid-1px" style={{ gridTemplateColumns: '1fr 1fr 1fr', marginBottom: '1.5rem' }}>
          <div className="grid-cell" style={{ padding: '1.25rem' }}>
            <p className="text-label" style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>The Problem</p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              Cost, logistics, and time make getting outside feel like a second job. Students default to what&apos;s easy — walking, running, nearby parks — while bigger adventures stay stuck in the group chat.
            </p>
          </div>
          <div className="grid-cell" style={{ padding: '1.25rem' }}>
            <p className="text-label" style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>The Insight</p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              When outdoor adventure requires gear investments, planning, and serious time commitment, that&apos;s not fun — that&apos;s work. Dick&apos;s has an opportunity to make outdoor exploration the new default.
            </p>
          </div>
          <div className="grid-cell" style={{ padding: '1.25rem' }}>
            <p className="text-label" style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>The Brief</p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              Get Boston-area college students to think: <em>&ldquo;I don&apos;t have to go out of my way to enjoy simple pleasures.&rdquo;</em> Do: sign up for Dick&apos;s Escape Routes semester pass.
            </p>
          </div>
        </div>

        {/* Campaign */}
        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            padding: '1.5rem',
          }}
        >
          <p className="text-label" style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>The Campaign: Dick&apos;s Escape Routes</p>
          <p className="text-body" style={{ color: 'var(--text-secondary)', maxWidth: 680 }}>
            Semester-based excursion passes that handle all the planning — transportation, hotels, gear lists — so the only work students have to do is block off the time. Key message: <em>Getting outside shouldn&apos;t feel like a second job.</em>
          </p>
        </div>
      </section>

      {/* ── Case Study 2: Liquid Death ───────────────────────────────── */}
      <section
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: '3rem 2rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="section-label">Case 02</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', margin: '1.5rem 0', alignItems: 'start' }}>
          <div>
            <h2 className="text-heading" style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
              Liquid Death
            </h2>
            <p className="text-body-sm" style={{ color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Experiential Marketing · Brand Extension · Event Design
            </p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              Liquid Death is the only water brand that acts like it hates water. The brief: design an experiential campaign that extends the brand without softening it. Our answer was a Valentine&apos;s Day blood drive.
            </p>
          </div>
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              padding: '1.25rem',
            }}
          >
            <p className="text-label" style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>My Role</p>
            <p className="text-body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Concept development · Brand voice · Event design · Limited edition can design · Campaign copy
            </p>
          </div>
        </div>

        <div className="grid-1px" style={{ gridTemplateColumns: '1fr 1fr 1fr', marginBottom: '1.5rem' }}>
          <div className="grid-cell" style={{ padding: '1.25rem' }}>
            <p className="text-label" style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>The Tension</p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              Valentine&apos;s Day is built on meaningless consumerism. Liquid Death is built on refusing to participate in exactly that. The brand needed an activation that weaponized the holiday instead of surrendering to it.
            </p>
          </div>
          <div className="grid-cell" style={{ padding: '1.25rem' }}>
            <p className="text-label" style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>The Insight</p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              Only Liquid Death could own a Valentine&apos;s Day blood drive — because they&apos;re a genuine bleeding-heart company that would challenge the status quo of a day built for cheap flowers.
            </p>
          </div>
          <div className="grid-cell" style={{ padding: '1.25rem' }}>
            <p className="text-label" style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>The Hook</p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              Post your pokes with <em>#bleedforacause</em> — because what&apos;s a good deed if Instagram doesn&apos;t know about it? Blood-type matched limited edition cans. Tattoo-themed band-aids. Recycled aluminum pins.
            </p>
          </div>
        </div>

        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            padding: '1.5rem',
          }}
        >
          <p className="text-label" style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>The Campaign: Bleed for a Cause</p>
          <p className="text-body" style={{ color: 'var(--text-secondary)', maxWidth: 680 }}>
            Liquid Death takes over portable blood banks in major cities on Valentine&apos;s Day. Custom blood-type cans, heart-shaped (like the organ) gummies, and a van dripping with blood that looks like it&apos;s on tour with a rockstar — but sterile.
          </p>
        </div>
      </section>

      {/* ── Case Study 3: Rold Gold ──────────────────────────────────── */}
      <section
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: '3rem 2rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="section-label">Case 03</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', margin: '1.5rem 0', alignItems: 'start' }}>
          <div>
            <h2 className="text-heading" style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.5rem' }}>
              Rold Gold
            </h2>
            <p className="text-body-sm" style={{ color: 'var(--green)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
              Subculture Research · Consumer Insight · Creative Brief
            </p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              Make Rold Gold the snack of choice for a subculture. We chose true crime — 89% of weekly podcast listeners have binged it, 77% prefer victim-centered content, and they&apos;re 3.6x more likely to donate to related causes. This audience is not who you think it is.
            </p>
          </div>
          <div
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border)',
              padding: '1.25rem',
            }}
          >
            <p className="text-label" style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>My Role</p>
            <p className="text-body-sm" style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Subculture analysis · Myth/reality audit · Target profiling · Insight development · Brief writing · Media channel strategy
            </p>
          </div>
        </div>

        <div className="grid-1px" style={{ gridTemplateColumns: '1fr 1fr 1fr', marginBottom: '1.5rem' }}>
          <div className="grid-cell" style={{ padding: '1.25rem' }}>
            <p className="text-label" style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>The Target</p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              Women 18–29 who consume true crime daily while multitasking. Driven by empathy, not morbidity. They&apos;re habitual listeners who want comfort and familiarity to balance the emotional weight of the content.
            </p>
          </div>
          <div className="grid-cell" style={{ padding: '1.25rem' }}>
            <p className="text-label" style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>The Insight</p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              People turn to true crime to make the unknown feel more understandable. Heavy stories become more digestible when the moment itself feels simple.
            </p>
          </div>
          <div className="grid-cell" style={{ padding: '1.25rem' }}>
            <p className="text-label" style={{ color: 'var(--green)', marginBottom: '0.5rem' }}>The Brief</p>
            <p className="text-body" style={{ color: 'var(--text-secondary)' }}>
              Get true crime enthusiasts to think: <em>&ldquo;Rold Gold is my ultimate comfort snack.&rdquo;</em> Do: make it part of the ritual — not just an option, but the expected part of sitting down with an episode.
            </p>
          </div>
        </div>

        <div
          style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border)',
            padding: '1.5rem',
          }}
        >
          <p className="text-label" style={{ color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Key Message</p>
          <p className="text-body" style={{ color: 'var(--text-secondary)', maxWidth: 680 }}>
            Heavy stories become more digestible when the moment feels simple. Rold Gold is bite-sized, mess-free, familiar — the snack that disappears into the background so the story can stay in the foreground.
          </p>
        </div>
      </section>

      {/* ── Footer CTA ───────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          padding: '3rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p className="text-body" style={{ color: 'var(--text-muted)' }}>
          See the data work behind the strategy →
        </p>
        <Link href="/data" className="btn btn-ghost" style={{ borderRadius: 0 }}>
          Data projects
        </Link>
      </section>
    </>
  )
}