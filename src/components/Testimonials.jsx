import { useState, useEffect } from 'react';
import { Star, ChevronRight, ChevronLeft } from 'lucide-react';
import SectionHeader from './SectionHeader';

const testimonials = [
  {
    name: 'عبدالرحمن السبيعي',
    role: 'الرياض',
    text: 'من أفضل التجارب اللي مريت فيها! المطبخ طلع تحفة والتركيب كان نظيف جداً. ما توقعت النتيجة تكون بهالجمال.',
  },
  {
    name: 'نورة الغامدي',
    role: 'جدة',
    text: 'صراحة الشغل يتكلم عن نفسه. اهتمامهم بأدق التفاصيل والخامات اللي استخدموها خلتني أحس إني في مطبخ فندق خمس نجوم.',
  },
  {
    name: 'ماجد العنزي',
    role: 'الدمام',
    text: 'تعاملت مع أكثر من شركة قبل كذا، بس هالمرة الفرق واضح. التزام بالمواعيد وجودة عالية وسعر منافس جداً.',
  },
  {
    name: 'ريم الزهراني',
    role: 'مكة المكرمة',
    text: 'اخترت مطبخ ألومنيوم وكانت النتيجة مذهلة! التصميم عصري والألوان بالضبط اللي كنت أبيها. أنصح فيهم بقوة.',
  },
  {
    name: 'تركي المالكي',
    role: 'حائل',
    text: 'المهندس اللي صمم المطبخ كان عنده ذوق رفيع واقتراحات ذكية وفرت علينا مساحة ومصاريف. شغل احترافي بكل معنى الكلمة.',
  },
  {
    name: 'منيرة القرني',
    role: 'الخبر',
    text: 'طلبت خزانة ملابس مخصصة وجات بالضبط على المقاس. الإضاءة الداخلية والتنظيم الذكي خلاني أحب أرتب ملابسي كل يوم!',
  },
  {
    name: 'سلطان الدوسري',
    role: 'أبها',
    text: 'صديقي نصحني فيهم وما ندمت أبداً. غرفة الغسيل اللي سووها لي حولت المكان من فوضى لنظام مرتب وعملي.',
  },
  {
    name: 'لمياء الشهري',
    role: 'الرياض',
    text: 'تصميم المطبخ الكلاسيكي عندهم شي ثاني! الخشب الطبيعي والدهان اليدوي يعطي إحساس بالفخامة والدفء. ممتنة لهم.',
  },
  {
    name: 'بندر الحارثي',
    role: 'المدينة المنورة',
    text: 'سرعة التنفيذ كانت مفاجأة حلوة. خلصوا المطبخ قبل الموعد المتفق عليه وبجودة ممتازة. خدمة عملاء من الطراز الأول.',
  },
  {
    name: 'أسماء المطيري',
    role: 'تبوك',
    text: 'المغسلة الرخامية اللي صمموها لي للمجلس كانت قطعة فنية! كل الضيوف يسألون عنها. شكراً إبداع سيدار على الذوق الراقي.',
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
