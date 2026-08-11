import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import SectionHeader from './SectionHeader';

const contactInfo = [
  {
    icon: Phone,
    label: 'اتصل بنا',
    value: '0564118346',
    href: 'tel:0564118346',
  },
  {
    icon: Mail,
    label: 'راسلنا',
    value: 'ebdaasedar@gmail.com',
    href: 'mailto:ebdaasedar@gmail.com',
  },
  {
    icon: MapPin,
    label: 'موقعنا',
    value: 'الرياض، حي منفوحة الجديدة، شارع المزرع، بالقرب من مسجد الإمام مسلم',
    href: 'https://maps.app.goo.gl/3u1eKFm5uU9J8TTw7?g_st=iw',
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
              className="btn-accent w-100 contact-submit-btn"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.0!2d46.72!3d24.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
