import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { scrollTo } from '@/utils/scrollTo';
import logo from "../assets/logo.jpg";

const navLinks = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#about', label: 'من نحن' },
  { href: '#services', label: 'الخدمات' },
  { href: '#gallery', label: 'معرض الأعمال' },
  { href: '#offers', label: 'العروض' },
  { href: '#contact', label: 'تواصل معنا' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // After navigating to home with a hash, scroll to that section
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      // Small delay to let the page render first
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [location]);

  const handleNav = (href) => {
    const isHome = location.pathname === '/';
    if (isHome) {
      scrollTo(href);
    } else {
      // Navigate to homepage then scroll
      navigate('/' + href);
    }
    setOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollTo('#home');
    } else {
      navigate('/');
    }
    setOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">

        {/* Logo */}
        <a
          href="/"
          className="brand-logo"
          onClick={handleLogoClick}
        >
          <div className="brand-logo-img-wrapper">
            <img
              src={logo}
              alt="إبداع سيدار - Sedar Kitchens"
              className="brand-logo-img"
            />
          </div>
          <div className="brand-logo-text">
            <span className="brand-logo-title">إبداع سيدار</span>
            <span className="brand-logo-sub">تصميم وتصنيع</span>
          </div>
        </a>

        {/* Desktop nav links */}
        <nav>
          <ul className="nav-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="nav-link-item"
                  onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="nav-cta-wrapper">
          <button
            className="btn-accent"
            onClick={() => handleNav('#contact')}
          >
            احصل على عرض سعر
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="القائمة"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="nav-mobile-menu">
          <div className="nav-mobile-inner">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-mobile-link"
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
              >
                {l.label}
              </a>
            ))}
            <button
              className="btn-accent mt-2 w-100"
              onClick={() => handleNav('#contact')}
            >
              احصل على عرض سعر
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
