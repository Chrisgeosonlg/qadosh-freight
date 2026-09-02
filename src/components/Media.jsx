import { useState } from 'react'

// Image wrapper: lazy-loaded, always sits on a branded blue gradient so a
// missing/blocked photo still reads as an intentional panel rather than a
// broken image. `alt` is required for accessibility.
export default function Media({ src, alt, className = '', style, eager = false }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`media ${className}`} style={style}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
      <span className="media__tint" />
    </div>
  )
}
