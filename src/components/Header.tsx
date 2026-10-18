import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content'
import { Icon } from './Icons'

type HeaderProps = {
  activeSection: string
}

export function Header({ activeSection }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="logo" aria-label={`${profile.fullName} — Accueil`}>
          {profile.logo}
        </a>

        <nav className="nav-desktop" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={activeSection === link.id ? 'is-active' : ''}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary header-cta">
          Me contacter
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`mobile-nav ${open ? 'is-open' : ''}`}
        hidden={!open}
      >
        <nav aria-label="Navigation mobile">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={activeSection === link.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Me contacter
          </a>
        </nav>
      </div>
    </header>
  )
}
