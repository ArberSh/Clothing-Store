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

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-mb">MB</span>
          <span className="navbar__logo-text">Muslim Brand<br /><em>Albania</em></span>
        </a>

        <ul className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
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
  );
}
