import { useEffect, useState } from 'react'

const DISPLAY_TIME = 1100
const EXIT_TIME = 380

export default function Preloader() {
  const [phase, setPhase] = useState('visible')

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const startedAt = performance.now()
    let hideTimer
    let removeTimer

    const beginExit = () => {
      const remaining = Math.max(0, DISPLAY_TIME - (performance.now() - startedAt))
      hideTimer = window.setTimeout(() => {
        setPhase('leaving')
        document.body.style.overflow = previousOverflow
        removeTimer = window.setTimeout(() => setPhase('hidden'), EXIT_TIME)
      }, remaining)
    }

    if (document.readyState === 'complete') beginExit()
    else window.addEventListener('load', beginExit, { once: true })

    return () => {
      window.removeEventListener('load', beginExit)
      window.clearTimeout(hideTimer)
      window.clearTimeout(removeTimer)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  if (phase === 'hidden') return null

  return (
    <div className={`preloader ${phase === 'leaving' ? 'preloader--leaving' : ''}`} role="status" aria-live="polite" aria-label="Loading Qadosh Freight website">
      <div className="preloader__content">
        <div className="preloader__name">
          <strong>Qadosh Freight</strong>
          <span>Solutions Limited</span>
        </div>
        <div className="preloader__route" aria-hidden="true">
          <span className="preloader__line" />
          <span className="preloader__cargo" />
        </div>
        <small>Moving your business forward</small>
      </div>
    </div>
  )
}
