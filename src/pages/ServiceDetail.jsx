import { useParams, Navigate, Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import Media from '../components/Media'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import QuoteCTA from '../components/QuoteCTA'
import { getService, relatedServices } from '../data/services'
import { serviceImages } from '../data/images'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) return <Navigate to="/services" replace />

  const related = relatedServices(slug)

  return (
    <>
      <Seo title={service.seo.title} description={service.seo.description} path={`/services/${slug}`} />

      <PageHero
        eyebrow="Service"
        title={service.title}
        subtitle={service.summary}
        image={serviceImages[slug]}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.title }]}
      />

      {/* Intro + how it supports */}
      <section className="section">
        <div className="wrap split">
          <Reveal>
            <span className="eyebrow">Overview</span>
            <h2 className="h-lg">What we offer</h2>
            <p className="lead">{service.intro}</p>
            <h3 className="h-md" style={{ margin: '26px 0 10px', fontSize: '1.3rem' }}>How this supports your business</h3>
            <p style={{ color: 'var(--ink-soft)' }}>{service.supports}</p>
            <Link to="/contact#quote" className="btn btn--primary" style={{ marginTop: 8 }}>
              Request a Quote <Icon name="arrow" size={18} className="btn__arrow" />
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <div className="cut cut--tl" style={{ aspectRatio: '4 / 5' }}>
              <Media src={serviceImages[slug]} alt={`${service.title} in action`} style={{ height: '100%' }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Key features */}
      <section className="section section--mist">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Key features</span>
            <h2 className="h-lg">What's included</h2>
          </Reveal>
          <div className="grid grid--3" style={{ marginTop: 40 }}>
            {service.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3)} className="feature" style={{ background: '#fff' }}>
                <span className="feature__ico"><Icon name="check" size={20} /></span>
                <div><h3>{f.title}</h3><p>{f.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process (only where a real sequence exists) */}
      {service.process && (
        <section className="section">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">How it works</span>
              <h2 className="h-lg">A simple, transparent process</h2>
            </Reveal>
            <div className="grid grid--2" style={{ marginTop: 40 }}>
              {service.process.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2)} className="step">
                  <div className="step__n">{i + 1}</div>
                  <div><h3>{p.title}</h3><p>{p.text}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      <section className={`section section--tight ${service.process ? 'section--mist' : ''}`}>
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Related services</span>
            <h2 className="h-lg">Complete the journey</h2>
          </Reveal>
          <div className="related" style={{ marginTop: 32 }}>
            {related.map((r) => (
              <Link key={r.slug} to={`/services/${r.slug}`}>
                <Icon name={r.icon} size={22} /> {r.title}
                <Icon name="arrow" size={17} className="btn__arrow" style={{ marginLeft: 'auto' }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteCTA
        title={`Need ${service.title.toLowerCase()}?`}
        text="Send us your shipment details for a free, no-obligation quotation. Our team will respond with the right solution for your cargo."
      />
    </>
  )
}
