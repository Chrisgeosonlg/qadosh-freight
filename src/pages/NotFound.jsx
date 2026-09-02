import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Icon from '../components/Icon'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found | Qadosh Freight Solutions" description="The page you were looking for could not be found." path="/404" />
      <section className="section" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}>
        <div className="wrap center measure">
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Error 404</span>
          <h1 className="h-xl" style={{ fontSize: 'clamp(3rem,10vw,6rem)', color: 'var(--blue)' }}>404</h1>
          <h2 className="h-md" style={{ margin: '8px 0 14px' }}>This route has gone off course</h2>
          <p className="lead">The page you were looking for doesn't exist or may have moved. Let's get you back on track.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 22 }}>
            <Link to="/" className="btn btn--primary">Back to home <Icon name="arrow" size={18} className="btn__arrow" /></Link>
            <Link to="/services" className="btn btn--outline">View services</Link>
          </div>
        </div>
      </section>
    </>
  )
}
