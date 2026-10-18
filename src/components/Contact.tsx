import { useState, type ChangeEvent, type FormEvent } from 'react'
import { profile, serviceOptions } from '../data/content'
import { Icon } from './Icons'

type FormState = {
  name: string
  email: string
  phone: string
  service: string
  timeline: string
  details: string
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  timeline: '',
  details: '',
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.details.trim()) {
      setStatus('error')
      return
    }

    const subject = encodeURIComponent(
      `Contact portfolio — ${form.service || 'Demande'} — ${form.name}`,
    )
    const body = encodeURIComponent(
      [
        `Nom : ${form.name}`,
        `Adresse e-mail : ${form.email}`,
        `Téléphone : ${form.phone || '—'}`,
        `Service : ${form.service || '—'}`,
        `Délai : ${form.timeline || '—'}`,
        '',
        'Détails du projet :',
        form.details,
      ].join('\n'),
    )

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('sent')
    setForm(initial)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-wrap">
        <header className="section-head">
          <h2>Contact</h2>
          <p>Entrons en contact pour discuter de votre projet</p>
        </header>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="form-row">
            <label className="field">
              <span className="sr-only">Nom</span>
              <input
                name="name"
                type="text"
                placeholder="Nom"
                autoComplete="name"
                value={form.name}
                onChange={onChange}
                required
              />
            </label>
            <label className="field">
              <span className="sr-only">Email</span>
              <input
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                value={form.email}
                onChange={onChange}
                required
              />
            </label>
          </div>

          <div className="form-row">
            <label className="field">
              <span className="sr-only">Numéro de téléphone</span>
              <input
                name="phone"
                type="tel"
                placeholder="Numéro de téléphone"
                autoComplete="tel"
                value={form.phone}
                onChange={onChange}
              />
            </label>
            <label className="field field-select">
              <span className="sr-only">Service souhaité</span>
              <select
                name="service"
                value={form.service}
                onChange={onChange}
                aria-label="Service souhaité"
              >
                <option value="">Service souhaité</option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <Icon name="chevron" size={20} className="select-chevron" />
            </label>
          </div>

          <div className="form-row form-row-split">
            <label className="field">
              <span className="sr-only">Délai</span>
              <input
                name="timeline"
                type="text"
                placeholder="Délai"
                value={form.timeline}
                onChange={onChange}
              />
            </label>
            <label className="field field-textarea">
              <span className="sr-only">Détails du projet</span>
              <textarea
                name="details"
                placeholder="Détails du projet..."
                rows={5}
                value={form.details}
                onChange={onChange}
                required
              />
            </label>
          </div>

          <div className="form-actions">
            {status === 'error' && (
              <p className="form-feedback is-error" role="alert">
                Merci de renseigner au minimum le nom, l’email et les détails du projet.
              </p>
            )}
            {status === 'sent' && (
              <p className="form-feedback is-ok" role="status">
                Votre client e-mail va s’ouvrir pour finaliser l’envoi.
              </p>
            )}
            <button type="submit" className="btn btn-outline btn-lg">
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
