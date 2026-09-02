import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Brand from './Brand'
import Icon from './Icon'
import { services } from '../data/services'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)
  const location = useLocation()
  const servicesRef = useRef(null)

  // header shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menus on navigation
  useEffect(() => {
    setDrawerOpen(false)
    setMobileServicesOpen(false)
    setDesktopServicesOpen(false)
  }, [location.pathname])

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  // close desktop dropdown on outside click / Escape
  useEffect(() => {
    const onClick = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setDesktopServicesOpen(false)
    }
    const onKey = (e) => { if (e.key === 'Escape') { setDesktopServicesOpen(false); setDrawerOpen(false) } }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onClick); document.removeEventListener('keydown', onKey) }
  }, [])

  const servicesActive = location.pathname.startsWith('/services')

  return (
    <>
      <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="wrap header__bar">
        <Brand />

        {/* Desktop navigation */}
        <nav className="nav" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>About Us</NavLink>

          <div
            className="nav__item"
            ref={servicesRef}
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <button
              className={`nav__toggle ${servicesActive ? 'is-active' : ''}`}
              aria-haspopup="true"
              aria-expanded={desktopServicesOpen}
              onClick={() => setDesktopServicesOpen((v) => !v)}
            >
              Services <Icon name="chevron" size={16} className="chev" />
            </button>
            <div className={`dropdown ${desktopServicesOpen ? 'is-open' : ''}`} role="menu">
              <Link to="/services" className="dropdown__link" role="menuitem">
                <Icon name="map" size={18} /> All Services
              </Link>
              {services.map((s) => (
                <NavLink
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  role="menuitem"
                  className={({ isActive }) => `dropdown__link ${isActive ? 'is-active' : ''}`}
                >
                  <Icon name={s.icon} size={18} /> {s.title}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/contact" className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>Contact Us</NavLink>
        </nav>

        <div className="header__cta">
          <Link to="/contact#quote" className="btn btn--primary btn--sm">Request a Quote</Link>
          <button
            className={`hamburger ${drawerOpen ? 'is-open' : ''}`}
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={drawerOpen}
            aria-controls="mobile-drawer"
            onClick={() => setDrawerOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
        </div>
      </header>

      {/* Kept outside the filtered header so fixed positioning uses the viewport. */}
      <div id="mobile-drawer" className={`drawer ${drawerOpen ? 'is-open' : ''}`} aria-hidden={!drawerOpen}>
        <NavLink to="/" end className={({ isActive }) => `drawer__link ${isActive ? 'is-active' : ''}`}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => `drawer__link ${isActive ? 'is-active' : ''}`}>About Us</NavLink>

        <button
          className="drawer__acc"
          aria-expanded={mobileServicesOpen}
          onClick={() => setMobileServicesOpen((v) => !v)}
        >
          Services <Icon name="chevron" size={20} className="chev" />
        </button>
        <div className={`drawer__sub ${mobileServicesOpen ? 'is-open' : ''}`}>
          <NavLink to="/services" end className="drawer__sublink"><Icon name="map" size={18} /> All Services</NavLink>
          {services.map((s) => (
            <NavLink key={s.slug} to={`/services/${s.slug}`} className="drawer__sublink">
              <Icon name={s.icon} size={18} /> {s.title}
            </NavLink>
          ))}
        </div>

        <NavLink to="/contact" className={({ isActive }) => `drawer__link ${isActive ? 'is-active' : ''}`}>Contact Us</NavLink>

        <div className="drawer__cta">
          <Link to="/contact#quote" className="btn btn--primary">Request a Quote</Link>
        </div>
      </div>
    </>
  )
}
