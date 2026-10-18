import type { skills } from '../data/content'
import { Icon } from './Icons'

type Skill = (typeof skills)[number]

type SkillRingProps = {
  skill: Skill
}

/** Circular skill indicator — fill is visual hierarchy only; no percentage label. */
export function SkillRing({ skill }: SkillRingProps) {
  const size = 130
  const stroke = 6
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (skill.level / 100) * circumference

  return (
    <div className="skill-ring">
      <div className="skill-ring-visual" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={stroke}
          />
          <circle
            className="skill-ring-progress"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={`url(#skillGradient-${skill.name})`}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
          <defs>
            <linearGradient
              id={`skillGradient-${skill.name}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FD6F00" />
              <stop offset="100%" stopColor="#E46400" />
            </linearGradient>
          </defs>
        </svg>
        <span className="skill-ring-icon">
          <Icon name={skill.icon} size={36} />
        </span>
      </div>
      <p className="skill-name">{skill.name}</p>
    </div>
  )
}
