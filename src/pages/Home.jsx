import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import Media from '../components/Media'
import Reveal from '../components/Reveal'
import Counter from '../components/Counter'
import ServiceCard from '../components/ServiceCard'
import QuoteCTA from '../components/QuoteCTA'
import { services } from '../data/services'
import { img } from '../data/images'
import {
  company, coreValues, whyChoose, coverage, stats, mission, vision, contact,
} from '../data/site'

export default function Home() {
  return (
    <>
      <Seo
        title="Qadosh Freight Solutions Limited | Freight Forwarding & Customs Clearing in Tanzania"
        description="Efficient customs clearance, freight forwarding, transportation, air freight and warehousing from Dar es Salaam. Reliable logistics across Tanzania and the wider African region."
        path="/"
      />

      {/* 1 — HERO */}
      <section className="hero">
        <div className="hero__media">
          <img src={img.heroHome} alt="Container terminal with cargo ships and stacked shipping containers at a busy port" fetchpriority="high" />
        </div>
        <div className="hero__scrim" />
        <div className="wrap hero__inner">
          <span className="eyebrow hero__eyebrow">Port-to-premise logistics</span>
          <h1 className="h-xl">Moving your business forward, from port to premise.</h1>
          <p className="hero__sub">
            Qadosh Freight Solutions delivers efficient customs clearance, freight forwarding,
            transportation, air freight and warehousing — so your cargo keeps moving from the
            moment it lands to the moment it reaches your door.
          </p>
          <div className="hero__actions">
            <Link to="/contact#quote" className="btn btn--primary">
              Request a Quote <Icon name="arrow" size={18} className="btn__arrow" />
            </Link>
            <Link to="/services" className="btn btn--ghost-light">Explore Our Services</Link>
          </div>
          <div className="hero__trust">
            <span className="dot" />
            Reliable logistics solutions across Tanzania and the wider African region.
          </div>
        </div>
      </section>

      {/* 2 — COMPANY INTRODUCTION */}
      <section className="section">
        <div className="wrap split">
          <Reveal>
            <span className="eyebrow">Who we are</span>
            <h2 className="h-lg">A Dar es Salaam freight partner with international reach</h2>
            <p className="lead">
              {company.name} is a growing, forward-looking logistics company, registered in
              Tanzania in {company.registeredYear} and supported by an established international
              network.
            </p>
            <p>
              From shipping lines to leading freight clearing and forwarding partners, that network
              gives us a trusted name across Southern, Central and East Africa. Our office is
              strategically located in the Dar es Salaam city centre — close to the main port,
              customs service centre and other key clearance locations — giving your cargo fast,
              convenient access at every step. We serve clients locally, regionally and
              internationally.
            </p>
            <Link to="/about" className="btn btn--outline">
              More about Qadosh <Icon name="arrow" size={18} className="btn__arrow" />
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <div className="cut cut--tl" style={{ aspectRatio: '4 / 3' }}>
              <Media src={img.aboutPort} alt="Ship-to-shore cranes loading containers onto a vessel at Dar es Salaam port" style={{ height: '100%' }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — SERVICES OVERVIEW */}
      <section className="section section--mist">
        <div className="wrap">
          <Reveal className="center measure">
            <span className="eyebrow">What we do</span>
            <h2 className="h-lg">End-to-end logistics services</h2>
            <p className="lead">Five connected services that move your goods through every stage of the journey.</p>
          </Reveal>
          <div className="grid grid--3" style={{ marginTop: 44 }}>
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3)}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
            <Reveal delay={2}>
              <Link to="/services" className="svc-card" style={{ background: 'var(--blue-deep)', color: '#fff', borderColor: 'transparent' }}>
                <span className="svc-card__icon" style={{ background: 'rgba(255,255,255,0.14)', color: '#fff' }}><Icon name="map" size={28} /></span>
                <h3 style={{ color: '#fff' }}>See all services</h3>
                <p style={{ color: 'rgba(255,255,255,0.82)' }}>Explore our full range of clearing, forwarding, transport, air freight and warehousing.</p>
                <span className="svc-card__more" style={{ color: '#ffb4b8' }}>View overview <Icon name="arrow" size={17} className="btn__arrow" /></span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4 — WHY CHOOSE */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Why Qadosh</span>
            <h2 className="h-lg">Built around reliability and reach</h2>
          </Reveal>
          <div className="grid grid--4" style={{ marginTop: 40 }}>
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4)} className="feature">
                <span className="feature__ico"><Icon name={w.icon} size={22} /></span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — REGIONAL COVERAGE */}
      <section className="section section--blue">
        <div className="wrap split">
          <Reveal>
            <span className="eyebrow">Regional coverage</span>
            <h2 className="h-lg">Clearing &amp; forwarding across the region</h2>
            <p className="lead">
              Our clearing services support trade across Tanzania and its neighbours — moving import,
              export and transit cargo to where it needs to be.
            </p>
            <div className="regions" style={{ marginTop: 22 }}>
              {coverage.map((c) => (
                <span className="region" key={c}><Icon name="pin" size={16} className="pin" /> {c}</span>
              ))}
            </div>
            <p style={{ marginTop: 22, fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
              Countries listed indicate service coverage. Our only physical office is in Dar es Salaam, Tanzania.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div className="cut cut--tr" style={{ aspectRatio: '4 / 3' }}>
              <Media src={img.truck} alt="Freight truck carrying cargo on a regional highway" style={{ height: '100%' }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 — CORE VALUES */}
      <section className="section">
        <div className="wrap">
          <Reveal className="center measure">
            <span className="eyebrow">Our core values</span>
            <h2 className="h-lg">The principles behind every shipment</h2>
          </Reveal>
          <div className="grid grid--3" style={{ marginTop: 44 }}>
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3)} className={`value value--${v.tone}`}>
                <h3><Icon name={v.icon} size={22} className="value__ico" /> {v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — MISSION & VISION */}
      <section className="section section--mist">
        <div className="wrap split">
          <Reveal>
            <div className="cut cut--slant" style={{ aspectRatio: '5 / 4' }}>
              <Media src={img.ship} alt="Fully loaded container ship sailing on the open sea" style={{ height: '100%' }} />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow">Mission &amp; vision</span>
            <h2 className="h-lg">Why we do it</h2>
            <div className="mv" style={{ marginTop: 20, borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
              <div className="mv__cell mv__cell--mission">
                <div className="mv__num">01</div>
                <h3>Our Mission</h3>
                <p>{mission}</p>
              </div>
              <div className="mv__cell mv__cell--vision">
                <div className="mv__num">02</div>
                <h3>Our Vision</h3>
                <p>{vision}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8 — CLIENT PROFILE / STATISTICS */}
      <section className="section">
        <div className="wrap split">
          <Reveal>
            <span className="eyebrow">Client profile</span>
            <h2 className="h-lg">Relationships that earn better rates</h2>
            <p>
              We draw on relationships built over many years in the industry to secure great freight
              rates for our clients — and we would love to do the same for you. For a full description
              of our freight forwarding services, or a free, no-obligation quote, simply send us an
              enquiry.
            </p>
            <Link to="/contact#quote" className="btn btn--blue">
              Send an enquiry <Icon name="arrow" size={18} className="btn__arrow" />
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <div className="stats">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <Counter value={s.value} suffix={s.suffix} />
                  <span className="stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9 — QUOTE CTA */}
      <QuoteCTA />
    </>
  )
}
