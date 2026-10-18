import { navLinks, profile, socials } from '../data/content'
import { Icon } from './Icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a href="#home" className="logo footer-logo">
          {profile.logo}
        </a>

        <nav className="footer-nav" aria-label="Navigation pied de page">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="social-row footer-socials" aria-label="Réseaux sociaux">
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.href}
              className="social-btn"
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={s.label}
            >
              <Icon name={s.icon} size={20} />
            </a>
          ))}
        </div>

        <div className="footer-contacts">
          <a href={`mailto:${profile.email}`} className="footer-contact">
            <Icon name="mail" size={22} />
            <span>{profile.email}</span>
          </a>
          <a href={profile.phoneHref} className="footer-contact">
            <Icon name="phone" size={22} />
            <span>{profile.phone}</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {year} {profile.fullName} — Développeur Fullstack
        </p>
      </div>
    </footer>
  )
}
