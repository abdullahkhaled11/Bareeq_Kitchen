/**
 * ProjectCTA.jsx
 * Call-to-action banner for the Project Details page.
 * Inherits .offers-card, .offers-inner, .offers-badge, .offers-title,
 *           .btn-white-accent CSS from the design system.
 *
 * Props:
 *   cta      { title, desc, buttonText }  – CTA content from project data
 *   onCtaClick  {function}                – scrolls to contact section
 */
import { ArrowLeft, MessageCircle } from 'lucide-react';

export default function ProjectCTA({ cta, onCtaClick }) {
  if (!cta) return null;
  return (
    <section className="offers-section">
      <div className="offers-card">
        <div className="offers-inner">
          {/* Left / Text side */}
          <div>
            <span className="offers-badge">
              <MessageCircle size={14} />
              ابدأ مشروعك الآن
            </span>

            <h2 className="offers-title mt-3">{cta.title}</h2>
            <p style={{ marginTop: '1rem', opacity: 0.9, fontSize: '1rem', lineHeight: 1.7 }}>
              {cta.desc}
            </p>

            <button
              className="btn-white-accent project-cta-btn mt-4 d-inline-flex align-items-center gap-2"
              onClick={onCtaClick}
            >
              {cta.buttonText}
              <ArrowLeft size={16} />
            </button>
          </div>

          {/* Right / Stats side */}
          <div className="offers-stats">
            {[
              { value: 'مجاني', label: 'استشارة التصميم' },
              { value: '24hr', label: 'الرد على طلبك' },
              { value: '10', label: 'سنوات ضمان' },
              { value: '100%', label: 'رضا العملاء' },
            ].map((s, i) => (
              <div key={i} className="offers-stat-card">
                <div className="offers-stat-value">{s.value}</div>
                <div className="offers-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
