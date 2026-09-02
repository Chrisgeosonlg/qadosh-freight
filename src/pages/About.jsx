import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import Media from '../components/Media'
import Reveal from '../components/Reveal'
import PageHero from '../components/PageHero'
import QuoteCTA from '../components/QuoteCTA'
import { img } from '../data/images'
import { company, coreValues, whyChoose, coverage, mission, vision } from '../data/site'

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Qadosh Freight Solutions Limited"
        description="Registered in Tanzania in 2019 and based in Dar es Salaam, Qadosh Freight Solutions is a customs clearing and freight forwarding company serving East and Central Africa."
        path="/about"
      />

      <PageHero
        eyebrow="About us"
        title="A trusted logistics partner, from port to premise"
        subtitle="Registered in Tanzania in 2019 and rooted in Dar es Salaam, we help businesses move goods efficiently across the region and beyond."
        image={img.aboutPort}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      {/* Overview */}
      <section className="section">
        <div className="wrap split">
          <Reveal>
            <span className="eyebrow">Company overview</span>
            <h2 className="h-lg">Growing, well-connected and close to the port</h2>
            <p>
              {company.name} is a growing and forward-looking logistics company, registered in
              accordance with the regulations of Tanzania in {company.registeredYear}. We are
              supported by a well-established international network — from shipping lines to leading
              freight clearing and forwarding partners — which has earned us a trusted name across
              Southern, Central and East Africa, and beyond.
            </p>
            <p>
              Our office is strategically located in the Dar es Salaam city centre, close to the
              main port and customs service centre, as well as the other locations involved in the
              customs clearance of goods. That position lets us move quickly on your behalf and keep
              your cargo flowing without unnecessary delay.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div className="cut cut--tl" style={{ aspectRatio: '4 / 3' }}>
              <Media src={img.aboutTruck} alt="Aerial view of a container yard with cargo handling equipment" style={{ height: '100%' }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* History / registration timeline */}
      <section className="section section--mist section--tight">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="h-lg">How we got here</h2>
          </Reveal>
          <div className="steps" style={{ marginTop: 34, maxWidth: 820 }}>
            <Reveal className="step">
              <div className="step__n">2019</div>
              <div>
                <h3>Registered in Tanzania</h3>
                <p>Qadosh Freight Solutions Limited is established and registered under the regulations of Tanzania.</p>
              </div>
            </Reveal>
            <Reveal className="step" delay={1}>
              <div className="step__n"><Icon name="globe" size={22} /></div>
              <div>
                <h3>Backed by an international network</h3>
                <p>We build on a well-established network of shipping lines and forwarding partners spanning Southern, Central and East Africa.</p>
              </div>
            </Reveal>
            <Reveal className="step" delay={2}>
              <div className="step__n"><Icon name="pin" size={22} /></div>
              <div>
                <h3>Positioned in Dar es Salaam city centre</h3>
                <p>Our office sits close to the main port and customs service centre, giving clients fast, convenient clearance access.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section">
        <div className="wrap">
          <Reveal className="center measure">
            <span className="eyebrow">Mission &amp; vision</span>
            <h2 className="h-lg">What drives us forward</h2>
          </Reveal>
          <div className="mv" style={{ marginTop: 40, borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            <Reveal className="mv__cell mv__cell--mission">
              <div className="mv__num">01</div>
              <h3>Our Mission</h3>
              <p>{mission}</p>
            </Reveal>
            <Reveal className="mv__cell mv__cell--vision" delay={1}>
              <div className="mv__num">02</div>
              <h3>Our Vision</h3>
              <p>{vision}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="section section--mist">
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

      {/* Why clients choose */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Why clients choose Qadosh</span>
            <h2 className="h-lg">Reasons to work with us</h2>
          </Reveal>
          <div className="grid grid--2" style={{ marginTop: 40 }}>
            <div className="checklist" style={{ gap: 18 }}>
              {whyChoose.slice(0, 4).map((w) => (
                <Reveal as="div" key={w.title} className="feature">
                  <span className="feature__ico"><Icon name={w.icon} size={22} /></span>
                  <div><h3>{w.title}</h3><p>{w.text}</p></div>
                </Reveal>
              ))}
            </div>
            <div className="checklist" style={{ gap: 18 }}>
              {whyChoose.slice(4).map((w, i) => (
                <Reveal as="div" key={w.title} delay={1} className="feature">
                  <span className="feature__ico"><Icon name={w.icon} size={22} /></span>
                  <div><h3>{w.title}</h3><p>{w.text}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional coverage */}
      <section className="section section--blue section--tight">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Regional service coverage</span>
            <h2 className="h-lg">Where we support your trade</h2>
            <p className="lead" style={{ maxWidth: '62ch' }}>
              We clear and forward import, export and transit cargo across Tanzania and neighbouring
              markets. Coverage reflects where we provide services — our only office is in Dar es Salaam.
            </p>
          </Reveal>
          <div className="regions" style={{ marginTop: 26 }}>
            {coverage.map((c) => (
              <span className="region" key={c}><Icon name="pin" size={16} className="pin" /> {c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Talk to our team CTA */}
      <QuoteCTA
        title="Talk to our team"
        text="Have a shipment in mind or a question about clearing and forwarding? Our Dar es Salaam team is ready to help."
        primaryLabel="Talk to Our Team"
      />
    </>
  )
}
