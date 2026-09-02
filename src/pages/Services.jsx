import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import Media from '../components/Media'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import QuoteCTA from '../components/QuoteCTA'
import { services } from '../data/services'
import { serviceImages, img } from '../data/images'

export default function Services() {
  return (
    <>
      <Seo
        title="Our Services | Freight Forwarding, Customs Clearing & Logistics in Tanzania"
        description="Customs clearing, transportation, freight forwarding, air freight and warehousing from Qadosh Freight Solutions — end-to-end logistics across Tanzania and the region."
        path="/services"
      />

      <PageHero
        eyebrow="Our services"
        title="End-to-end logistics, handled by one team"
        subtitle="From customs clearance to warehousing, our connected services move your cargo through every stage — by land, sea and air."
        image={img.heroHome}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      {/* Intro */}
      <section className="section section--tight">
        <div className="wrap center measure">
          <Reveal>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Complete supply-chain capabilities</span>
            <h2 className="h-lg">One partner, from port to premise</h2>
            <p className="lead">
              Each service works on its own or as part of a seamless whole — so your goods move
              smoothly from arrival at the port right through to your door.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Alternating service rows */}
      {services.map((s, i) => {
        const flip = i % 2 === 1
        return (
          <section key={s.slug} className={`section section--tight ${flip ? 'section--mist' : ''}`}>
            <div className="wrap split" style={flip ? { direction: 'rtl' } : undefined}>
              <Reveal style={{ direction: 'ltr' }}>
                <span className="svc-card__icon" style={{ marginBottom: 18 }}><Icon name={s.icon} size={28} /></span>
                <h2 className="h-md" style={{ fontSize: '1.7rem' }}>{s.title}</h2>
                <p style={{ color: 'var(--ink-soft)' }}>{s.intro}</p>
                <ul className="checklist" style={{ margin: '18px 0 24px' }}>
                  {s.features.slice(0, 3).map((f) => (
                    <li key={f.title}><span className="tick"><Icon name="check" size={15} /></span> <span><strong>{f.title}.</strong> {f.text}</span></li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <Link to={`/services/${s.slug}`} className="btn btn--blue">
                    Explore {s.title.split(' ')[0]} <Icon name="arrow" size={18} className="btn__arrow" />
                  </Link>
                  <Link to="/contact#quote" className="btn btn--outline">Request a Quote</Link>
                </div>
              </Reveal>
              <Reveal delay={1} style={{ direction: 'ltr' }}>
                <div className={`cut ${flip ? 'cut--tr' : 'cut--tl'}`} style={{ aspectRatio: '4 / 3' }}>
                  <Media src={serviceImages[s.slug]} alt={`${s.title} — Qadosh Freight Solutions`} style={{ height: '100%' }} />
                </div>
              </Reveal>
            </div>
          </section>
        )
      })}

      <QuoteCTA />
    </>
  )
}
