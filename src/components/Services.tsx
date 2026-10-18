import { services } from '../data/content'
import { Icon } from './Icons'

export function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <header className="section-head">
          <h2>Services</h2>
          <p>
            Des prestations concrètes, alignées sur mon parcours en développement
            web, mobile et intégration d’interfaces.
          </p>
        </header>

        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-icon">
                <Icon name={service.icon} size={70} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
