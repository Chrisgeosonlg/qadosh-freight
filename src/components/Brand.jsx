import { Link } from 'react-router-dom'

// Company logo mark (extracted from the profile) paired with a cleanly
// typeset wordmark. Swap /images/logo-mark.png for the official asset.
export default function Brand({ onClick, footer = false }) {
  return (
    <Link
      to="/"
      className={`brand ${footer ? 'footer__brand' : ''}`}
      onClick={onClick}
      aria-label="Qadosh Freight Solutions Limited — home"
    >
      <img className="brand__mark" src="/images/logo-mark.png" alt="Qadosh Freight Solutions logo" width="44" height="41" />
      <span className="brand__name">
        <b>Qadosh Freight</b>
        <span>Solutions Limited</span>
      </span>
    </Link>
  )
}
