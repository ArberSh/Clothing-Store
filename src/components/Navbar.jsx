import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { label: 'Koleksioni', href: '#categories' },
  { label: 'Produktet', href: '#products' },
  { label: 'Rreth Nesh', href: '#why-us' },
  { label: 'Kontakt', href: '#footer' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${open ? ' navbar--open' : ''}`}>
        <div className="navbar__inner container">
          <a href="#" className="navbar__logo" onClick={() => setOpen(false)}>
            <span className="navbar__logo-mb">MB</span>
            <span className="navbar__logo-text">Muslim Brand<br /><em>Albania</em></span>
          </a>

          {/* Desktop links — hidden on mobile */}
          <ul className="navbar__links navbar__links--desktop">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/355XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__cta"
              >
                Porosit ☎
              </a>
            </li>
          </ul>

          <button
            className={`navbar__burger${open ? ' open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay — rendered at root level, outside navbar */}
      <div className={`mobile-menu${open ? ' mobile-menu--open' : ''}`} aria-hidden={!open}>
        <ul className="mobile-menu__links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li className="mobile-menu__cta-item">
            <a
              href="https://wa.me/355XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu__cta"
              onClick={() => setOpen(false)}
            >
              Porosit ☎
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
