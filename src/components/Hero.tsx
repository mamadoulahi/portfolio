import profileImg from '../assets/profile.jpg'
import glowSvg from '../assets/glow.svg'
import { profile, socials, stats } from '../data/content'
import { Icon } from './Icons'

export function Hero() {
  return (
    <section id="home" className="hero section">
      <img src={glowSvg} alt="" className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-intro">
            <p className="hero-hi">Bonjour, je suis</p>
            <h1 className="hero-name">{profile.fullName}</h1>
            <p className="hero-role">{profile.role}</p>
          </div>

          <div className="social-row" aria-label="Réseaux sociaux">
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

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg">
              Me contacter
            </a>
            <a href={profile.cvPath} className="btn btn-outline btn-lg" download>
              Télécharger le CV
            </a>
          </div>

          <div className="stats-card" role="list">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`stat-item ${i < stats.length - 1 ? 'has-divider' : ''}`}
                role="listitem"
              >
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="false">
          <div className="portrait-ring" />
          <div className="portrait-frame">
            <img
              src={profileImg}
              alt={`Portrait de ${profile.fullName}`}
              width={520}
              height={781}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
