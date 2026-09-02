import { useMemo, useState } from 'react'
import Icon from './Icon'
import { services } from '../data/services'
import { contact } from '../data/site'

// -----------------------------------------------------------------------------
// INTEGRATION POINT
// Paste a Formspree endpoint (https://formspree.io/f/xxxx) or your own API URL
// below to make the form send real messages. While it is empty, the form
// validates and then hands off to the visitor's email client via mailto — it
// never pretends to deliver a message it hasn't sent.
// EmailJS: swap the submit() body for emailjs.send(...) instead.
// -----------------------------------------------------------------------------
const FORM_ENDPOINT = ''

const initial = {
  fullName: '', company: '', email: '', phone: '', service: '',
  origin: '', destination: '', cargo: '', contactMethod: 'Email', message: '', consent: false,
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // 'loading' | 'success' | 'error' | 'unconnected'

  const update = (e) => {
    const { name, value, type, checked } = e.target
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const err = {}
    if (!values.fullName.trim()) err.fullName = 'Please enter your full name.'
    if (!values.email.trim()) err.email = 'Please enter your email address.'
    else if (!emailRe.test(values.email)) err.email = 'Please enter a valid email address.'
    if (values.phone && !/^[+()\d\s-]{7,}$/.test(values.phone)) err.phone = 'Please enter a valid phone number.'
    if (!values.service) err.service = 'Please choose the service you need.'
    if (!values.message.trim()) err.message = 'Please tell us a little about your shipment.'
    if (!values.consent) err.consent = 'Please give consent so we can respond to you.'
    setErrors(err)
    return Object.keys(err).length === 0
  }

  const mailtoHref = useMemo(() => {
    const body = [
      `Full Name: ${values.fullName}`,
      `Company: ${values.company}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Service Required: ${values.service}`,
      `Origin: ${values.origin}`,
      `Destination: ${values.destination}`,
      `Cargo / Shipment Details: ${values.cargo}`,
      `Preferred Contact Method: ${values.contactMethod}`,
      '',
      values.message,
    ].join('\n')
    return `mailto:${contact.emails[0]}?subject=${encodeURIComponent(
      `Quote request — ${values.service || 'General enquiry'}`
    )}&body=${encodeURIComponent(body)}`
  }, [values])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) {
      setStatus(null)
      return
    }
    setStatus('loading')

    if (!FORM_ENDPOINT) {
      // No backend connected — hand off honestly rather than fake a send.
      await new Promise((r) => setTimeout(r, 500))
      setStatus('unconnected')
      return
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setValues(initial)
    } catch {
      setStatus('error')
    }
  }

  const invalid = (name) => (errors[name] ? 'invalid' : '')

  if (status === 'success') {
    return (
      <div className="form__status form__status--ok" role="status" style={{ padding: '28px' }}>
        <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: 6 }}>Thank you — your enquiry is on its way.</strong>
        We have received your request and will get back to you as soon as possible during business hours.
        <div style={{ marginTop: 16 }}>
          <button className="btn btn--blue btn--sm" onClick={() => setStatus(null)}>Send another enquiry</button>
        </div>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="form__row">
        <div className="field">
          <label htmlFor="fullName">Full Name <span className="req">*</span></label>
          <input id="fullName" name="fullName" className={invalid('fullName')} value={values.fullName}
            onChange={update} autoComplete="name" aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'err-fullName' : undefined} />
          {errors.fullName && <span className="field__err" id="err-fullName">{errors.fullName}</span>}
        </div>
        <div className="field">
          <label htmlFor="company">Company Name</label>
          <input id="company" name="company" value={values.company} onChange={update} autoComplete="organization" />
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="email">Email Address <span className="req">*</span></label>
          <input id="email" name="email" type="email" className={invalid('email')} value={values.email}
            onChange={update} autoComplete="email" aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'err-email' : undefined} />
          {errors.email && <span className="field__err" id="err-email">{errors.email}</span>}
        </div>
        <div className="field">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" name="phone" type="tel" className={invalid('phone')} value={values.phone}
            onChange={update} autoComplete="tel" placeholder="+255 ..." aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'err-phone' : undefined} />
          {errors.phone && <span className="field__err" id="err-phone">{errors.phone}</span>}
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="service">Service Required <span className="req">*</span></label>
          <select id="service" name="service" className={invalid('service')} value={values.service}
            onChange={update} aria-invalid={!!errors.service}
            aria-describedby={errors.service ? 'err-service' : undefined}>
            <option value="">Select a service…</option>
            {services.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            <option value="Multiple / Not sure">Multiple / Not sure</option>
          </select>
          {errors.service && <span className="field__err" id="err-service">{errors.service}</span>}
        </div>
        <div className="field">
          <label htmlFor="contactMethod">Preferred Contact Method</label>
          <select id="contactMethod" name="contactMethod" value={values.contactMethod} onChange={update}>
            <option>Email</option>
            <option>Phone call</option>
            <option>WhatsApp</option>
          </select>
        </div>
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="origin">Origin</label>
          <input id="origin" name="origin" value={values.origin} onChange={update} placeholder="e.g. Shanghai, China" />
        </div>
        <div className="field">
          <label htmlFor="destination">Destination</label>
          <input id="destination" name="destination" value={values.destination} onChange={update} placeholder="e.g. Dar es Salaam, Tanzania" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="cargo">Cargo / Shipment Details</label>
        <input id="cargo" name="cargo" value={values.cargo} onChange={update}
          placeholder="Type of goods, weight, volume, containers…" />
      </div>

      <div className="field">
        <label htmlFor="message">Message <span className="req">*</span></label>
        <textarea id="message" name="message" className={invalid('message')} value={values.message}
          onChange={update} aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'err-message' : undefined}
          placeholder="How can we help with your shipment?" />
        {errors.message && <span className="field__err" id="err-message">{errors.message}</span>}
      </div>

      <label className={`consent ${errors.consent ? 'invalid' : ''}`}>
        <input type="checkbox" name="consent" checked={values.consent} onChange={update}
          aria-invalid={!!errors.consent} />
        <span>
          I consent to Qadosh Freight Solutions contacting me about this enquiry. <span className="req">*</span>
          {errors.consent && <span className="field__err" style={{ display: 'block' }}>{errors.consent}</span>}
        </span>
      </label>

      {status === 'error' && (
        <div className="form__status form__status--err" role="alert">
          Something went wrong sending your enquiry. Please try again, or email us directly at{' '}
          <a href={`mailto:${contact.emails[0]}`}>{contact.emails[0]}</a>.
        </div>
      )}

      {status === 'unconnected' && (
        <div className="form__status form__status--ok" role="status">
          <strong style={{ display: 'block', marginBottom: 6 }}>Your details are ready to send.</strong>
          This form isn't connected to a mail service yet, so nothing has been transmitted. Use the
          button below to send your enquiry from your own email app, or connect a backend (see README).
          <div style={{ marginTop: 12 }}>
            <a className="btn btn--primary btn--sm" href={mailtoHref}>
              Open in email app <Icon name="mail" size={16} />
            </a>
          </div>
        </div>
      )}

      <p className="form__note">
        <strong>Note for developers:</strong> set <code>FORM_ENDPOINT</code> in{' '}
        <code>src/components/ContactForm.jsx</code> to a Formspree or API URL to enable live sending.
      </p>

      <button type="submit" className="btn btn--primary" disabled={status === 'loading'} style={{ justifySelf: 'start' }}>
        {status === 'loading' ? (<><span className="spinner" /> Sending…</>) : (<>Submit enquiry <Icon name="arrow" size={18} className="btn__arrow" /></>)}
      </button>
    </form>
  )
}
