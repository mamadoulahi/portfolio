import { useMemo, useState } from 'react'
import {
  projectFilters,
  projects,
  type ProjectCategory,
} from '../data/content'

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <section id="portfolio" className="section projects">
      <div className="container">
        <header className="section-head">
          <h2>Projets</h2>
        </header>

        <div className="project-filters" role="tablist" aria-label="Filtrer les projets">
          {projectFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              className={`filter-btn ${filter === item.id ? 'is-active' : ''}`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-top">
                {project.featured && <span className="project-badge">Projet phare</span>}
                <span className="project-category">
                  {projectFilters.find((f) => f.id === project.category)?.label}
                </span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-problem">{project.problem}</p>
              <ul className="project-features">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="project-role">
                <strong>Rôle :</strong> {project.role}
              </p>
              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {(project.demoUrl || project.repoUrl) && (
                <div className="project-links">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Démo
                    </a>
                  )}
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      Code
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="projects-empty">Aucun projet dans cette catégorie.</p>
        )}
      </div>
    </section>
  )
}
