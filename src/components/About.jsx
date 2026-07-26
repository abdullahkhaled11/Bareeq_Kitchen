import { ArrowLeft } from 'lucide-react';
import { scrollTo } from '@/utils/scrollTo';
import workshopImg from '@/assets/workshop.jpg';

const values = [
  {
    t: 'رؤيتنا',
    d: 'أن نكون الخيار الأول لكل بيت يبحث عن الأناقة والجودة.',
  },
  {
    t: 'قيمنا',
    d: 'الحرفية، الأمانة، الالتزام بالمواعيد، وضمان رضا العميل.',
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">

        {/* Image column */}
        <div className="about-img-wrap">
          <img src={workshopImg} alt="ورشة العمل" loading="lazy" />
          <div className="about-badge">
            <div className="about-badge-number">15+</div>
            <div className="about-badge-label">سنة من الإبداع</div>
          </div>
        </div>

        {/* Text column */}
        <div>
          <span className="section-eyebrow">من نحن</span>

          <h2
            className="mt-3 text-brand-dark"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900 }}
          >
            حرفية أصيلة، تصاميم عصرية
          </h2>

          <p className="mt-3 text-muted-custom" style={{ fontSize: '1rem', lineHeight: 1.8 }}>
            في <b className="text-brand-dark">بريق المطابخ</b>، نجمع بين خبرة أكثر من 15 عامًا
            وأحدث تقنيات التصميم لنقدّم لك مطبخًا يعكس ذوقك ويلبي احتياجاتك اليومية.
            فريقنا من المصممين والحرفيين المتخصصين يهتم بأدق التفاصيل.
          </p>

          <div className="about-values-grid">
            {values.map((b) => (
              <div key={b.t} className="about-value-card">
                <h3 className="about-value-title">{b.t}</h3>
                <p className="about-value-desc">{b.d}</p>
              </div>
            ))}
          </div>

          <button
            className="btn-brand about-action-btn d-inline-flex align-items-center gap-2"
            onClick={() => scrollTo('#gallery')}
          >
            شاهد أعمالنا
            <ArrowLeft size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
