'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/data',     label: 'Data projects' },
  { href: '/ux',       label: 'UX / Product'  },
  { href: '/strategy', label: 'Strategy'       },
  { href: '/writing',  label: 'Writing'        },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  /* close on outside click */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  /* close on route change */
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <nav
      style={{
        position:     'sticky',
        top:          0,
        zIndex:       100,
        height:       'var(--nav-height)',
        display:      'flex',
        alignItems:   'center',
        justifyContent: 'space-between',
        padding:      '0 2rem',
        background:   'var(--bg-primary)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Wordmark */}
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize:   '0.875rem',
          fontWeight: 400,
          color:      'var(--text-primary)',
          letterSpacing: '0.01em',
        }}
      >
        Morgan{' '}
        <span style={{ color: 'var(--green)', fontWeight: 500 }}>Walsh</span>
      </Link>

      {/* Star nav */}
      <div ref={menuRef} style={{ position: 'relative' }}>
        <button
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(prev => !prev)}
          style={{
            width:           36,
            height:          36,
            borderRadius:    '50%',
            background:      'var(--green)',
            border:          `1.5px solid var(--gilt)`,
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            cursor:          'pointer',
            transition:      'background 0.15s ease',
            color:           'var(--gilt)',
            fontSize:        '0.9rem',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--green-hover)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--green)')}
        >
          ✦
        </button>

        {/* Dropdown */}
        {open && (
          <div
            role="menu"
            style={{
              position:   'absolute',
              top:        44,
              right:      0,
              background: 'var(--bg-secondary)',
              border:     '1px solid var(--border)',
              minWidth:   168,
              zIndex:     200,
            }}
          >
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                style={{
                  display:       'block',
                  padding:       '0.625rem 1rem',
                  fontSize:      '0.75rem',
                  fontWeight:    300,
                  letterSpacing: '0.04em',
                  color: pathname === link.href
                    ? 'var(--text-primary)'
                    : 'var(--text-secondary)',
                  borderBottom:
                    i < links.length - 1
                      ? '1px solid var(--border)'
                      : 'none',
                  background: pathname === link.href
                    ? 'var(--green-subtle)'
                    : 'transparent',
                  transition: 'background 0.1s ease, color 0.1s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--green)'
                  e.currentTarget.style.color = 'var(--text-primary)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background =
                    pathname === link.href ? 'var(--green-subtle)' : 'transparent'
                  e.currentTarget.style.color =
                    pathname === link.href
                      ? 'var(--text-primary)'
                      : 'var(--text-secondary)'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
