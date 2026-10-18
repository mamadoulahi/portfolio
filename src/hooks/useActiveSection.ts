import { useEffect, useState } from 'react'
import { navLinks } from '../data/content'

type SectionId = (typeof navLinks)[number]['id']

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>('home')

  useEffect(() => {
    const elements = navLinks
      .map((link) => document.getElementById(link.id === 'portfolio' ? 'portfolio' : link.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const id = visible[0]?.target.id as SectionId | undefined
        if (id && navLinks.some((link) => link.id === id)) {
          setActive(id)
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.3, 0.6] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return active
}
