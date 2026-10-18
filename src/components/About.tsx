import profileImg from '../assets/profile.jpg'
import { experiences, profile, skills } from '../data/content'
import { Icon } from './Icons'
import { SkillRing } from './SkillRing'

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <header className="section-head">
          <h2>À propos</h2>
          <p>{profile.aboutSubtitle}</p>
        </header>

        <div className="about-grid">
          <div className="about-visual">
            <div className="about-panel" aria-hidden="true" />
            <div className="portrait-frame about-portrait">
              <img
                src={profileImg}
                alt={`Portrait de ${profile.fullName}`}
                width={520}
                height={781}
              />
            </div>
          </div>

          <div className="about-copy">
            <p>{profile.about}</p>
            <a href={profile.cvPath} className="btn btn-primary btn-lg" download>
              <Icon name="download" size={22} />
              Télécharger le CV
            </a>
          </div>
        </div>

        <div className="skills-row" aria-label="Compétences principales">
          {skills.map((skill) => (
            <SkillRing key={skill.name} skill={skill} />
          ))}
        </div>

        <div className="experience-block">
          <h3 className="experience-title">Parcours professionnel</h3>
          <ol className="experience-list">
            {experiences.map((exp) => (
              <li key={`${exp.company}-${exp.period}`} className="experience-item">
                <div className="experience-meta">
                  <h4>{exp.title}</h4>
                  <p className="experience-company">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="experience-period">{exp.period}</p>
                </div>
                <ul>
                  {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
