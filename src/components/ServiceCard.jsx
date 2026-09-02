import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function ServiceCard({ service }) {
  return (
    <article className="svc-card">
      <span className="svc-card__icon"><Icon name={service.icon} size={28} /></span>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link to={`/services/${service.slug}`} className="svc-card__more">
        Learn more <Icon name="arrow" size={17} className="btn__arrow" />
      </Link>
    </article>
  )
}
