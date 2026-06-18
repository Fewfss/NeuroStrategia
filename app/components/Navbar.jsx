import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const links = [
  { label: 'Quem nós somos', href: '#sobre' },
  { label: 'Missão, visão e valores', href: '#missao-visao-valores' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (!e.target.closest('.navbar')) setSidebarOpen(false);
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  function smoothScroll(e, href) {
    e.preventDefault();
    setSidebarOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
  }

  return (
    <header>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#topo" className="logo-link" onClick={(e) => smoothScroll(e, '#topo')}>
            <div className="logo-mark">
              <span className="logo-infinity">∞</span>
            </div>
            <span className="logo-text">
              Neuro<strong>Strategia</strong>
            </span>
          </a>

          <div className="nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={(e) => smoothScroll(e, l.href)}>
                {l.label}
              </a>
            ))}
          </div>

          <button
            className={`hamburger ${sidebarOpen ? 'open' : ''}`}
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="sidebar-link" onClick={(e) => smoothScroll(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}