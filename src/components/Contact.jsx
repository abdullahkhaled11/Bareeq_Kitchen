import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import SectionHeader from './SectionHeader';

const contactInfo = [
  {
    icon: Phone,
    label: 'اتصل بنا',
    value: '0561911054',
    href: 'tel:0561911054',
  },
  {
    icon: Mail,
    label: 'راسلنا',
    value: 'alsawadalraqia@gmail.com',
    href: 'mailto:alsawadalraqia@gmail.com',
  },
  {
    icon: MapPin,
    label: 'موقعنا',
    value: 'الرياض، منفوحة، شارع المزرع',
    href: 'https://maps.app.goo.gl/rQvAMG2yH35SPbvK9?g_st=ic',
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('تم إرسال طلبك بنجاح! سنتواصل معك خلال 24 ساعة.');
      e.target.reset();
    }, 800);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="تواصل معنا"
          title="ابدأ مشروع مطبخك اليوم"
          desc="فريقنا جاهز للإجابة على استفساراتك وتقديم عرض سعر مجاني."
        />

        <div className="contact-grid">
          {/* Contact form */}
          <form onSubmit={onSubmit} className="contact-form-card">
            <div className="contact-form-grid">
              <div>
                <label className="form-label-custom">الاسم الكامل</label>
                <input
                  required
                  placeholder="اكتب اسمك"
                  className="form-control-custom"
                />
              </div>

              <div>
                <label className="form-label-custom">رقم الهاتف</label>
                <input
                  required
                  type="tel"
                  placeholder="05xxxxxxxx"
                  className="form-control-custom"
                />
              </div>

              <div className="contact-full-col">
                <label className="form-label-custom">الموضوع</label>
                <input
                  required
                  placeholder="نوع الخدمة المطلوبة"
                  className="form-control-custom"
                />
              </div>

              <div className="contact-full-col">
                <label className="form-label-custom">رسالتك</label>
                <textarea
                  required
                  rows={5}
                  placeholder="اكتب تفاصيل مشروعك..."
                  className="form-control-custom"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-accent w-100 mt-4"
              style={{ height: '3.5rem', fontSize: '1rem' }}
            >
              {loading ? 'جاري الإرسال...' : 'إرسال الطلب'}
            </button>
          </form>

          {/* Contact info + map */}
          <div className="contact-info-stack">
            {contactInfo.map((c) => {
              const Icon = c.icon;
              const El = c.href ? 'a' : 'div';
              const isExternal = c.href && c.href.startsWith('http');
              return (
                <El
                  key={c.label}
                  href={c.href}
                  className="contact-info-card"
                  {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <div className="icon-box icon-box-lg">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="contact-info-label">{c.label}</div>
                    <div className="contact-info-value">{c.value}</div>
                  </div>
                </El>
              );
            })}

            <div className="contact-map">
              <iframe
                title="موقعنا على الخريطة"
                src="https://www.google.com/maps?q=السواعد+الراقية+للتجارة،+الرياض&output=embed"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
