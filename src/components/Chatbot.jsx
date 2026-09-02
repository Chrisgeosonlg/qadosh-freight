import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { chatbotFaqs, chatbotSuggestions } from '../data/faqs'

const whatsappNumber = '255786460379'

function createWhatsappUrl(message = '') {
  const note = message
    ? `Hello Qadosh Freight, I asked your website assistant: "${message}". Please help me with this.`
    : 'Hello Qadosh Freight, I need assistance with a shipment.'
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(note)}`
}

function getReply(message) {
  const text = message.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim()

  if (['hello', 'hi', 'hey'].some((greeting) => text === greeting || text.startsWith(`${greeting} `))) {
    return { text: 'Hello! How can I help with your freight or customs-clearing needs today?' }
  }

  const faq = chatbotFaqs.find((item) => item.keywords.some((keyword) => text.includes(keyword)))
  if (faq) {
    return {
      text: faq.answer,
      action: faq.handoff ? { label: 'Continue on WhatsApp', href: createWhatsappUrl(message) } : undefined,
    }
  }

  return {
    text: "I don't have a reliable answer for that question yet. Please ask our team on WhatsApp for fast assistance.",
    action: { label: 'Ask on WhatsApp', href: createWhatsappUrl(message) },
  }
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
      { from: 'bot', ...getReply(clean) },
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
            <button className="chatbot__close" type="button" onClick={() => setOpen(false)} aria-label="Close chat">&times;</button>
          </header>

          <div className="chatbot__messages" aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${message.from}-${index}`} className={`chatbot__message chatbot__message--${message.from}`}>
                {message.text}
                {message.action && (
                  <a className="chatbot__handoff" href={message.action.href} target="_blank" rel="noopener noreferrer">
                    {message.action.label} <Icon name="arrow" size={15} />
                  </a>
                )}
              </div>
            ))}

            {messages.length === 1 && (
              <div className="chatbot__quick" aria-label="Frequently asked questions">
                {chatbotSuggestions.map((reply) => (
                  <button type="button" key={reply} onClick={() => sendMessage(reply)}>{reply}</button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="chatbot__actions">
            <Link to="/contact#quote" onClick={() => setOpen(false)}>Open quote form</Link>
            <a href={createWhatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>

          <form className="chatbot__form" onSubmit={(event) => { event.preventDefault(); sendMessage(input) }}>
            <label className="sr-only" htmlFor="qadosh-message">Type your message</label>
            <input ref={inputRef} id="qadosh-message" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Type your message..." autoComplete="off" />
            <button type="submit" aria-label="Send message"><Icon name="arrow" size={20} /></button>
          </form>
        </section>
      )}

      <button className="chatbot__launcher" type="button" onClick={() => setOpen((current) => !current)} aria-expanded={open} aria-label={open ? 'Close Qadosh chat' : 'Chat with Qadosh'}>
        <Icon name="chat" size={25} />
        <span>Chat with Qadosh</span>
      </button>
    </aside>
  )
}
