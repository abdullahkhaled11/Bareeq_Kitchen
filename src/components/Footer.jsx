import { Link } from 'react-router-dom';
import { ChefHat, Phone, Mail, MapPin, Instagram, MessageCircle, X } from 'lucide-react';
import { scrollTo } from '@/utils/scrollTo';
import { services } from './Services';
import logo from "../assets/logo.jpg";

const galleryLinks = [
  { slug: 'aluminium-kitchen', label: 'مطابخ ألومنيوم' },
  { slug: 'classic-kitchen', label: 'مطابخ كلاسيك' },
  { slug: 'natural-wood-kitchen', label: 'مطابخ خشب' },
  { slug: 'wardrobe', label: 'خزائن ملابس' },
  { slug: 'laundry-room', label: 'غرف غسيل' },
  { slug: 'washbasins', label: 'مغاسل' },
];


// TikTok Icon SVG Component
const TiktokIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill="currentColor"
    width={props.size || 16}
    height={props.size || 16}
    {...props}
  >
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a72.58,72.58,0,1,0,50.72,69.62V0h89.54a117.4,117.4,0,0,0,81.33,77.73v89.55A209.87,209.87,0,0,1,448,209.91Z" />
  </svg>
);

const navLinks = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#about', label: 'من نحن' },
  { href: '#services', label: 'الخدمات' },
  { href: '#gallery', label: 'معرض الأعمال' },
  { href: '#offers', label: 'العروض' },
  { href: '#contact', label: 'تواصل معنا' },
];

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/dream_kitchen129?igsh=ZWo4dWYweW1tajYy',
    label: 'إنستقرام',
  },
  {
    icon: X,
    href: 'https://x.com/baykermahmoud1?s=11&t=XzTDHXZ_bx4oSiWYT0rcuQ',
    label: 'تويتر',
  },
  {
    icon: TiktokIcon,
    href: 'https://www.tiktok.com/@sidarkitchene?_r=1&_t=ZS-98lmpEyCkWl',
    label: 'تيك توك',
  },
  {
    icon: MessageCircle,
    href: 'https://wa.me/966564118346',
    label: 'واتساب',
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* Brand column */}
        <div>
          <div className="d-flex align-items-center gap-3">
            <div className="footer-logo-img-wrapper">
              <img
                src={logo}
                alt="إبداع سيدار - Sedar Kitchens"
                className="footer-logo-img"
              />
            </div>
            <span className="footer-brand-name">إبداع سيدار</span>
          </div>
          <p className="footer-desc">
            رواد تصميم وتصنيع المطابخ العصرية في المملكة، نصنع لك مطبخًا يليق
            ببيتك ويعكس ذوقك.
          </p>
          <div className="footer-social">
            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-btn"
                  aria-label={link.label}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="footer-heading">روابط سريعة</h4>
          <ul className="footer-link-list">
            {navLinks.map((l) => (
              <li key={l.href}>
                <button
                  onClick={() => scrollTo(l.href)}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services list */}
        <div>
          <h4 className="footer-heading">خدماتنا</h4>
          <ul className="footer-link-list">
            {services.map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>

        {/* Gallery / معرض الأعمال */}
        <div>
          <h4 className="footer-heading">معرض الأعمال</h4>
          <ul className="footer-link-list">
            {galleryLinks.map((g) => (
              <li key={g.slug}>
                <Link to={`/projects/${g.slug}`}>
                  {g.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="footer-heading">تواصل معنا</h4>
          <ul className="footer-contact-list">
            <li className="footer-contact-item">
              <a href="tel:0564118346" className="d-flex align-items-center gap-2 text-decoration-none text-white">
                <Phone size={16} color="var(--color-accent-red)" style={{ flexShrink: 0 }} />
                0564118346
              </a>
            </li>
            <li className="footer-contact-item">
              <a href="mailto:ebdaasedar@gmail.com" className="d-flex align-items-center gap-2 text-decoration-none text-white">
                <Mail size={16} color="var(--color-accent-red)" style={{ flexShrink: 0 }} />
                ebdaasedar@gmail.com
              </a>
            </li>
            <li className="footer-contact-item">
              <a
                href="https://maps.app.goo.gl/3u1eKFm5uU9J8TTw7?g_st=iw"
                target="_blank"
                rel="noreferrer"
                className="d-flex align-items-center gap-2 text-decoration-none text-white"
              >
                <MapPin size={16} color="var(--color-accent-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                الرياض، حي منفوحة الجديدة، شارع المزرع
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} إبداع سيدار. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
