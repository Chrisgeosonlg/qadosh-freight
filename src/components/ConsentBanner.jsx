import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const storageKey = 'qadosh_cookie_consent'

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(!window.localStorage.getItem(storageKey))
    const reopen = () => setVisible(true)
    window.addEventListener('qadosh:consent-settings', reopen)
    return () => window.removeEventListener('qadosh:consent-settings', reopen)
  }, [])
  const save = (choice) => {
    window.localStorage.setItem(storageKey, choice)
    setVisible(false)
  }
  if (!visible) return null
  return (
    <section className="consent-banner" role="dialog" aria-label="Privacy and cookie preferences" aria-live="polite">
      <div className="consent-banner__copy">
        <strong>Your privacy matters</strong>
        <p>We use essential browser storage to remember your preferences. Optional cookies will only be used with your permission. <Link to="/privacy">Read our Privacy Policy</Link>.</p>
      </div>
      <div className="consent-banner__actions">
        <button type="button" className="btn btn--outline btn--sm" onClick={() => save('essential')}>Essential only</button>
        <button type="button" className="btn btn--primary btn--sm" onClick={() => save('accepted')}>Accept all</button>
      </div>
    </section>
  )
}
