import { useState, useEffect } from 'react';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import SectionHeader from './SectionHeader';

const testimonials = [
  {
    name: 'أحمد المصري',
    role: 'الرياض',
    text: 'تجربة رائعة من التصميم للتركيب. الفريق محترف والجودة فوق التوقعات، أنصح بالتعامل معهم بكل ثقة.',
  },
  {
    name: 'سارة عبدالله',
    role: 'جدة',
    text: 'مطبخي تحول لتحفة فنية! دقة في المواعيد، أسعار مناسبة، وخامات ممتازة. شكرًا للفريق الرائع.',
  },
  {
    name: 'خالد الحربي',
    role: 'الدمام',
    text: 'خدمة راقية جدًا ومتابعة مستمرة حتى بعد التسليم. الضمان الشامل يعطي راحة بال حقيقية.',
  },
  {
    name: 'أميرة العتيبي',
    role: 'مكة المكرمة',
    text: 'تعاملت معهم لتصميم مطبخ مودرن ألومنيوم، والنتيجة كانت مبهرة جداً. استغلال رائع للمساحات وسرعة بالتركيب.',
  },
  {
    name: 'محمد الشمري',
    role: 'حائل',
    text: 'أشكر المهندس المسؤول عن المشروع على صدره الرحب واقتراحاته الممتازة التي وفرت علينا الكثير. جودة الخشب ممتازة.',
  },
  {
    name: 'فاطمة الدوسري',
    role: 'الخبر',
    text: 'التصميم ثلاثي الأبعاد كان مطابق تماماً للمطبخ الواقعي بعد التركيب. اهتمام مذهل بالتفاصيل الصغيرة والإكسسوارات.',
  },
  {
    name: 'عمر القحطاني',
    role: 'أبها',
    text: 'توصية من صديق جعلتني أختارهم، ولم أندم أبداً. الالتزام بالوقت وجودة المفصلات والخامات تجعلهم الأفضل.',
  },
  {
    name: 'هدى السديري',
    role: 'الرياض',
    text: 'تصميم المطبخ الكلاسيكي لديهم يفوق الوصف. جودة الدهانات والخشب الطبيعي ممتازة والخدمة سريعة ومميزة.',
  },
  {
    name: 'فيصل الرشيد',
    role: 'المدينة المنورة',
    text: 'خدمة عملاء متميزة وتجاوب سريع. قاموا بتركيب المطبخ بأعلى درجات الاحترافية والنظافة بعد العمل.',
  },
  {
    name: 'ليلى الشريف',
    role: 'تبوك',
    text: 'أعجبني جداً تنوع الألوان والخامات والمساعدة في اختيار الأنسب لاحتياجاتي. المطبخ مريح جداً وعملي.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 992) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const gap = 24; // 1.5rem = 24px
  const cardWidth = `calc((100% - ${gap * (visibleCards - 1)}px) / ${visibleCards})`;

  const maxIndex = testimonials.length - visibleCards;

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Adjust current index if it exceeds maxIndex due to window resizing
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(Math.max(0, maxIndex));
    }
  }, [visibleCards, maxIndex, currentIndex]);

  return (
    <section className="testimonials-section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="آراء عملائنا"
          title="ثقة عملائنا هي رأس مالنا"
          desc="نفخر بكل تعليق إيجابي وكل بيت أدخلنا إليه البهجة."
        />

        <div className="testimonials-slider-container">
          <div className="testimonials-viewport">
            <div
              className="testimonials-track"
              style={{
                transform: `translateX(calc(${currentIndex} * (${cardWidth} + ${gap}px)))`,
              }}
            >
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="testimonial-card-wrapper"
                  style={{ width: cardWidth }}
                >
                  <div className="testimonial-card">
                    {/* Stars */}
                    <div className="testimonial-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="testimonial-text">"{t.text}"</p>

                    {/* Author */}
                    <div className="testimonial-footer">
                      <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                      <div>
                        <div className="testimonial-name">{t.name}</div>
                        <div className="testimonial-role">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="testimonials-controls">
            <button
              className="btn-slider-control"
              onClick={prev}
              disabled={currentIndex === 0}
              aria-label="السابق"
            >
              <ChevronRight size={20} />
            </button>

            <div className="testimonials-dots">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`testimonial-dot${currentIndex === idx ? ' active' : ''}`}
                  aria-label={`الذهاب للرأي ${idx + 1}`}
                />
              ))}
            </div>

            <button
              className="btn-slider-control"
              onClick={next}
              disabled={currentIndex >= maxIndex}
              aria-label="التالي"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
