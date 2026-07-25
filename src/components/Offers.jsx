import { ArrowLeft, Sparkles } from 'lucide-react';
import { scrollTo } from '@/utils/scrollTo';

const offerStats = [
  { value: '3D', label: 'تصميم مجاني' },
  { value: '0%', label: 'تقسيط بدون فوائد' },
  { value: '15', label: 'يوم تسليم' },
  { value: '10', label: 'سنوات ضمان' },
];

export default function Offers() {
  return (
    <section id="offers" className="offers-section">
      <div className="offers-card">
        <div className="offers-inner">

          {/* Left column – text */}
          <div>
            <span className="offers-badge">
              <Sparkles size={14} />
              عرض حصري لفترة محدودة
            </span>

            <h2 className="offers-title">
              خصم{' '}
              <span className="offers-title-big">30%</span>
              <br />
              على تصميم مطبخك الجديد
            </h2>

            <p className="mt-3" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.0625rem' }}>
              احجز استشارة مجانية اليوم واحصل على تصميم ثلاثي الأبعاد + خصم فوري على
              كامل المشروع.
            </p>

            <button
              className="btn-white-accent btn-lg-custom mt-4 d-inline-flex align-items-center gap-2"
              onClick={() => scrollTo('#contact')}
            >
              احجز الاستشارة المجانية
              <ArrowLeft size={20} />
            </button>
          </div>

          {/* Right column – stats grid */}
          <div className="offers-stats">
            {offerStats.map((s) => (
              <div key={s.label} className="offers-stat-card">
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
