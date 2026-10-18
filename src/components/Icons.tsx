type IconProps = {
  name: string
  className?: string
  size?: number
}

export function Icon({ name, className = '', size = 24 }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    className,
    'aria-hidden': true as const,
  }

  switch (name) {
    case 'linkedin':
      return (
        <svg {...common}>
          <path
            d="M6.5 9.5v8M6.5 6.5v.01M10.5 17.5v-5.2c0-1.8 1.4-2.3 2.5-2.3 1.2 0 2.5.7 2.5 2.5v5M10.5 10v7.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="3.5"
            y="3.5"
            width="17"
            height="17"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      )
    case 'github':
      return (
        <svg {...common}>
          <path
            d="M9 19c-4 1.5-4-2-6-2m12 4v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6A4.6 4.6 0 0 0 18 6.2 4.3 4.3 0 0 0 18 3s-1-.3-3.2 1.2a11 11 0 0 0-5.6 0C7 2.7 6 3 6 3a4.3 4.3 0 0 0 .1 3.2A4.6 4.6 0 0 0 4.8 9.3c0 4.6 2.8 5.7 5.5 6a3 3 0 0 0-.9 2.3V21"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'mail':
      return (
        <svg {...common}>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="m4 7 8 6 8-6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path
            d="M8.5 4.5h2l1 4-1.8 1.2a12 12 0 0 0 5.6 5.6L16.5 13.5l4 1v2a2 2 0 0 1-2.2 2 16 16 0 0 1-14-14A2 2 0 0 1 8.5 4.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'download':
      return (
        <svg {...common}>
          <path
            d="M12 4v10m0 0 4-4m-4 4-4-4M5 18h14"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'frontend':
      return (
        <svg {...common} viewBox="0 0 70 70">
          <path
            d="M18 22h34v26H18z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="m26 32 6 6-6 6M36 44h10"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'mobile':
      return (
        <svg {...common} viewBox="0 0 70 70">
          <rect
            x="24"
            y="12"
            width="22"
            height="46"
            rx="4"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle cx="35" cy="50" r="2" fill="currentColor" />
        </svg>
      )
    case 'design':
      return (
        <svg {...common} viewBox="0 0 70 70">
          <circle cx="35" cy="35" r="18" stroke="currentColor" strokeWidth="3" />
          <circle cx="35" cy="35" r="6" fill="currentColor" />
          <path
            d="M35 17v6M35 47v6M17 35h6M47 35h6"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'fullstack':
      return (
        <svg {...common} viewBox="0 0 70 70">
          <path
            d="M18 28h34M18 35h34M18 42h34"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <rect
            x="16"
            y="18"
            width="38"
            height="34"
            rx="4"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      )
    case 'prototype':
      return (
        <svg {...common} viewBox="0 0 70 70">
          <rect
            x="14"
            y="18"
            width="20"
            height="28"
            rx="3"
            stroke="currentColor"
            strokeWidth="3"
          />
          <rect
            x="36"
            y="24"
            width="20"
            height="28"
            rx="3"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            d="M34 32h2"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'api':
      return (
        <svg {...common} viewBox="0 0 70 70">
          <path
            d="M22 35h26M28 28l-8 7 8 7M42 28l8 7-8 7"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'react':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            stroke="currentColor"
            strokeWidth="1.4"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.5"
            stroke="currentColor"
            strokeWidth="1.4"
            transform="rotate(120 12 12)"
          />
        </svg>
      )
    case 'angular':
      return (
        <svg {...common}>
          <path
            d="M12 3 21 7l-1.5 10.5L12 21l-7.5-3.5L3 7 12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="m8.5 14 3.5-8 3.5 8M9.5 12h5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'flutter':
      return (
        <svg {...common}>
          <path
            d="m6 14 6-6 8 8-4 4-4-4 4-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="m10 18 4-4 4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'figma':
      return (
        <svg {...common}>
          <path
            d="M9 3h3v6H9a3 3 0 0 1 0-6ZM12 3h3a3 3 0 1 1 0 6h-3V3ZM12 9h3a3 3 0 1 1 0 6h-3V9ZM9 15h3v3a3 3 0 1 1-3-3ZM9 9h3v6H9a3 3 0 0 1 0-6Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'spring':
      return (
        <svg {...common}>
          <path
            d="M6 14c2-6 10-8 12-3 1 3-1 6-4 7-4 1-7-1-8-4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M14 8c1.5-2 4-2.5 5.5-1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'menu':
      return (
        <svg {...common}>
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'close':
      return (
        <svg {...common}>
          <path
            d="M6 6l12 12M18 6 6 18"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'chevron':
      return (
        <svg {...common}>
          <path
            d="m7 10 5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
  }
}
