import { ArrowLeft, ShieldCheck, Clock, Award, Tag } from 'lucide-react';
import { scrollTo } from '@/utils/scrollTo';
import heroImg from '@/assets/hero-kitchen.jpg';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background image + overlay */}
      <div className="hero-bg">
        <img src={heroImg} alt="مطبخ عصري فاخر" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-inner">
        <div className="animate-fade-in hero-content-wrapper" style={{ color: '#fff' }}>

          {/* Badge */}
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            أكثر من 15 عامًا من الخبرة والحرفية
          </span>

          {/* Heading + Discount Badge */}
          <div className="hero-title-row">
            <h1 className="hero-title">
              صمّم{' '}
              <span className="hero-title-accent">مطبخ أحلامك</span>
              <br />
              بلمسة عصرية وأناقة لا تُقاوم
            </h1>
            <div className="hero-discount-badge">
              <div className="hero-discount-pulse" />
              <Tag size={16} className="hero-discount-icon" />
              <div className="hero-discount-text">
                <span className="hero-discount-label">خصومات تصل إلى</span>
                <span className="hero-discount-value">30%</span>
              </div>
            </div>
          </div>

          {/* Sub-text */}
          <p className="hero-desc">
            نحوّل رؤيتك إلى واقع بتصاميم مطابخ فاخرة، خامات عالمية، وحرفية
            استثنائية. جودة تدوم، خدمة تُذكر.
          </p>

          {/* Action buttons */}
          <div className="hero-actions">
            <button
              className="btn-accent btn-lg-custom d-flex align-items-center gap-2"
              onClick={() => scrollTo('#contact')}
            >
              احصل على عرض سعر مجاني
              <ArrowLeft size={20} />
            </button>
            <button
              className="btn-outline-white btn-lg-custom"
              onClick={() => scrollTo('#contact')}
            >
              تواصل معنا
            </button>
          </div>

          {/* Trust badges */}
          <div className="hero-trust">
            <div className="hero-trust-item">
              <ShieldCheck size={20} color="var(--color-accent-red)" />
              <span>ضمان 10 سنوات</span>
            </div>
            <div className="hero-trust-item">
              <Clock size={20} color="var(--color-accent-red)" />
              <span>تسليم في الموعد</span>
            </div>
            <div className="hero-trust-item">
              <Award size={20} color="var(--color-accent-red)" />
              <span>خامات معتمدة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
