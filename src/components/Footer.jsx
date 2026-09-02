import { Link } from 'react-router-dom'
import Brand from './Brand'
import Icon from './Icon'
import { services } from '../data/services'
import { company, contact } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap footer__top">
        <div>
          <Brand footer />
          <p>{company.description}</p>
          <div className="footer__social" aria-label="Social media">
            {contact.social.map((s) => (
              <a key={s.name} href={s.href} aria-label={s.name} rel="noopener noreferrer">
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h4>Company</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/contact#quote">Request a Quote</Link></li>
          </ul>
        </nav>

        <nav aria-label="Services">
          <h4>Services</h4>
          <ul className="footer__links">
            {services.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h4>Get in touch</h4>
          <ul className="footer__contact">
            <li>
              <Icon name="location" size={18} />
              <span>{contact.address.lines.join(', ')}, {contact.address.city}</span>
            </li>
            <li>
              <Icon name="phone" size={18} />
              <span>{contact.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} style={{ display: 'block' }}>{p.display}</a>
              ))}</span>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <span>{contact.emails.map((e) => (
                <a key={e} href={`mailto:${e}`} style={{ display: 'block' }}>{e}</a>
              ))}</span>
            </li>
            <li>
              <Icon name="globe" size={18} />
              <a href={company.websiteUrl} rel="noopener noreferrer">{company.website}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer__bar">
        <p style={{ margin: 0 }}>© {year} {company.name}. All rights reserved.</p>
        <p style={{ margin: 0 }}>Freight forwarding, customs clearing &amp; logistics in Dar es Salaam, Tanzania.</p>
      </div>
    </footer>
  )
}
