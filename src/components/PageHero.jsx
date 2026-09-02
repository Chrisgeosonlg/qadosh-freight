import { Link } from 'react-router-dom'

// Internal-page hero with an image background, blue scrim and breadcrumbs.
export default function PageHero({ eyebrow, title, subtitle, image, crumbs = [] }) {
  return (
    <section className="pagehero">
      <div className="pagehero__media">
        <img src={image} alt="" loading="eager" decoding="async" />
      </div>
      <div className="pagehero__scrim" />
      <div className="wrap pagehero__inner">
        {crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Breadcrumb">
            {crumbs.map((c, i) =>
              c.to ? (
                <span key={i}><Link to={c.to}>{c.label}</Link> {' / '}</span>
              ) : (
                <span key={i}>{c.label}</span>
              )
            )}
          </nav>
        )}
        {eyebrow && <span className="eyebrow" style={{ color: '#ffb4b8' }}>{eyebrow}</span>}
        <h1>{title}</h1>
        {subtitle && <p className="pagehero__sub">{subtitle}</p>}
      </div>
    </section>
  )
}
