import { useEffect, useState } from 'react';
import { ChefHat, Menu, X } from 'lucide-react';
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    scrollTo(href);
    setOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">

        {/* Logo */}
        <a
          href="#home"
          className="brand-logo"
          onClick={(e) => { e.preventDefault(); handleNav('#home'); }}
        >
          <div className="brand-logo-img-wrapper">
            <img
              src={logo}
              alt="بريق المطابخ - Bareeq Kitchens"
              className="brand-logo-img"
            />
          </div>
          <div className="brand-logo-text">
            <span className="brand-logo-title">بريق المطابخ</span>
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
