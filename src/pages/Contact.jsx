import Seo from '../components/Seo'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import { img } from '../data/images'
import { contact } from '../data/site'

export default function Contact() {
  const mapQuery = encodeURIComponent('Samora Avenue, Dar es Salaam, Tanzania')
  return (
    <>
      <Seo
        title="Contact Us | Qadosh Freight Solutions Limited, Dar es Salaam"
        description="Contact Qadosh Freight Solutions in Dar es Salaam for customs clearing, freight forwarding, transportation, air freight and warehousing. Request a free quotation today."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact us"
        title="Let's move your cargo"
        subtitle="Reach our Dar es Salaam team for customs clearing, forwarding, transport, air freight and warehousing — or request a free, no-obligation quotation."
        image={img.contactHero}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
      />

      {/* Contact info cards */}
      <section className="section section--tight">
        <div className="wrap">
          <div className="grid grid--3">
            <Reveal className="contact-card">
              <span className="contact-card__ico"><Icon name="phone" size={22} /></span>
              <div>
                <h3>Call us</h3>
                {contact.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`}>{p.display}</a>
                ))}
              </div>
            </Reveal>
            <Reveal className="contact-card" delay={1}>
              <span className="contact-card__ico"><Icon name="mail" size={22} /></span>
              <div>
                <h3>Email us</h3>
                {contact.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`}>{e}</a>
                ))}
              </div>
            </Reveal>
            <Reveal className="contact-card" delay={2}>
              <span className="contact-card__ico"><Icon name="location" size={22} /></span>
              <div>
                <h3>Visit us</h3>
                {contact.address.lines.map((l) => <p key={l}>{l}</p>)}
                <p>{contact.address.city}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Form + response note */}
      <section className="section section--tight" id="quote" style={{ scrollMarginTop: '90px' }}>
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <Reveal>
            <span className="eyebrow">Request a quote</span>
            <h2 className="h-lg">Tell us about your shipment</h2>
            <p className="lead">
              Share a few details and our team will respond with the right logistics solution.
              Fields marked with <span style={{ color: 'var(--red)' }}>*</span> are required.
            </p>
            <div className="feature" style={{ marginTop: 20, background: 'var(--mist)', border: '1px solid var(--line)' }}>
              <span className="feature__ico"><Icon name="clock" size={22} /></span>
              <div>
                <h3>Response times</h3>
                <p>We aim to reply to enquiries as quickly as possible during business hours. For urgent shipments, calling us directly is the fastest way to reach the team.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="section section--tight">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Find us</span>
            <h2 className="h-lg">Our office in Dar es Salaam</h2>
            <p className="lead" style={{ marginBottom: 24 }}>
              {contact.address.lines.join(', ')}, {contact.address.city}
            </p>
          </Reveal>
          <Reveal delay={1} className="map-wrap">
            <iframe
              className="map-embed"
              title="Map showing Qadosh Freight Solutions on Samora Avenue, Dar es Salaam"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
