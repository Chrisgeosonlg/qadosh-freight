import { Link } from 'react-router-dom'
import Icon from './Icon'

// Bold call-to-action band used across pages.
export default function QuoteCTA({
  title = 'Ready to move your cargo?',
  text = 'Request a free, no-obligation quotation and our team will get back to you with the right logistics solution.',
  primaryLabel = 'Request a Quote',
}) {
  return (
    <section className="ctaband">
      <div className="wrap ctaband__inner">
        <div>
          <h2 className="h-lg">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="ctaband__actions">
          <Link to="/contact#quote" className="btn btn--primary">
            {primaryLabel} <Icon name="arrow" size={18} className="btn__arrow" />
          </Link>
          <Link to="/services" className="btn btn--ghost-light">Explore Services</Link>
        </div>
      </div>
    </section>
  )
}
