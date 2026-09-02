import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { contact } from '../data/site'

const quickReplies = ['Our services', 'Request a quote', 'Track a shipment', 'Contact Qadosh']

function getReply(message) {
  const text = message.toLowerCase()

  if (text.includes('service')) {
    return 'We help with customs clearing, transportation, freight forwarding, air freight and warehousing. Visit our Services page to explore each option.'
  }
  if (text.includes('quote') || text.includes('price') || text.includes('cost')) {
    return 'For an accurate quotation, tell us the cargo type, origin, destination, weight or volume, and preferred shipping date. You can send these details through our quote form.'
  }
  if (text.includes('track') || text.includes('shipment')) {
    return 'Online shipment tracking is coming soon. For a current update, please contact our team with your shipment or reference number.'
  }
  if (text.includes('contact') || text.includes('phone') || text.includes('call')) {
    return `You can call us on ${contact.phones[1].display} or email ${contact.emails[0]}. Our office is in Dar es Salaam.`
  }
  if (text.includes('hello') || text.includes('hi') || text.includes('hey')) {
    return 'Hello! How can I help with your freight or customs-clearing needs today?'
  }

  return 'Thanks for your message. I can help you explore our services, request a quote, check how to track a shipment, or contact the Qadosh team.'
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi, I'm Qadosh. How can I help move your business forward today?" },
  ])
  const endRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
      endRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [open, messages])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const sendMessage = (text) => {
    const clean = text.trim()
    if (!clean) return
    setMessages((current) => [
      ...current,
      { from: 'user', text: clean },
      { from: 'bot', text: getReply(clean) },
    ])
    setInput('')
  }

  return (
    <aside className={`chatbot ${open ? 'chatbot--open' : ''}`} aria-label="Qadosh virtual assistant">
      {open && (
        <section className="chatbot__panel" role="dialog" aria-modal="false" aria-labelledby="chatbot-title">
          <header className="chatbot__header">
            <span className="chatbot__avatar"><Icon name="chat" size={21} /></span>
            <span>
              <strong id="chatbot-title">Qadosh</strong>
              <small><i aria-hidden="true" /> Virtual assistant</small>
            </span>
            <button className="chatbot__close" type="button" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
          </header>

          <div className="chatbot__messages" aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${message.from}-${index}`} className={`chatbot__message chatbot__message--${message.from}`}>
                {message.text}
              </div>
            ))}

            {messages.length === 1 && (
              <div className="chatbot__quick" aria-label="Suggested questions">
                {quickReplies.map((reply) => (
                  <button type="button" key={reply} onClick={() => sendMessage(reply)}>{reply}</button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="chatbot__actions">
            <Link to="/contact#quote" onClick={() => setOpen(false)}>Open quote form</Link>
            <a href={`tel:${contact.phones[1].tel}`}>Call us</a>
          </div>

          <form className="chatbot__form" onSubmit={(event) => { event.preventDefault(); sendMessage(input) }}>
            <label className="sr-only" htmlFor="qadosh-message">Type your message</label>
            <input
              ref={inputRef}
              id="qadosh-message"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your message..."
              autoComplete="off"
            />
            <button type="submit" aria-label="Send message"><Icon name="arrow" size={20} /></button>
          </form>
        </section>
      )}

      <button
        className="chatbot__launcher"
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? 'Close Qadosh chat' : 'Chat with Qadosh'}
      >
        <Icon name="chat" size={25} />
        <span>Chat with Qadosh</span>
      </button>
    </aside>
  )
}
