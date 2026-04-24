import { useMemo, useState } from 'react'

function LogoBadge({ name, logoUrl, className = '', alt }) {
  const [hasError, setHasError] = useState(false)

  const shortName = useMemo(() => {
    const text = String(name || '').trim()
    if (!text) return '?'

    const words = text.split(/\s+/).filter(Boolean)
    if (words.length === 1) {
      return words[0].slice(0, 2).toUpperCase()
    }

    return `${words[0][0] || ''}${words[1][0] || ''}`.toUpperCase()
  }, [name])

  if (!logoUrl || hasError) {
    return <span className={`logo-fallback ${className}`.trim()}>{shortName}</span>
  }

  return (
    <img
      src={logoUrl}
      alt={alt || `${name} logo`}
      className={className}
      loading="lazy"
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
    />
  )
}

export default LogoBadge
