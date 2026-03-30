import Link from 'next/link'

interface ProjectCardProps {
  tag:   string
  title: string
  desc:  string
  href:  string
}

export default function ProjectCard({ tag, title, desc, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="grid-cell"
      style={{
        display:       'flex',
        flexDirection: 'column',
        gap:           '0.5rem',
        padding:       '1.25rem',
        textDecoration: 'none',
        cursor:        'pointer',
      }}
    >
      <span
        style={{
          fontSize:      '0.625rem',
          fontWeight:    500,
          color:         'var(--green)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {tag}
      </span>

      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize:   '1rem',
          fontWeight: 400,
          color:      'var(--text-primary)',
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>

      <p
        className="text-body-sm"
        style={{ flex: 1, color: 'var(--text-muted)' }}
      >
        {desc}
      </p>

      <span
        style={{
          fontSize:      '0.6875rem',
          color:         'var(--green)',
          letterSpacing: '0.06em',
          marginTop:     'auto',
        }}
      >
        View project →
      </span>
    </Link>
  )
}
