import { Hammer, Sparkles, Wrench, DoorClosed, Droplets } from 'lucide-react';
import SectionHeader from './SectionHeader';

const services = [
  {
    icon: Hammer,
    title: 'تفصيل مطابخ خشب وألومنيوم',
    desc: 'تصنيع وتفصيل مطابخ بأجود خامات الخشب والألومنيوم بأيدي حرفيين محترفين.',
  },
  {
    icon: Sparkles,
    title: 'تجديد المطابخ',
    desc: 'إعادة إحياء وتحديث مطبخك القديم بلمسات عصرية مبهرة وأقل تكلفة.',
  },
  {
    icon: Wrench,
    title: 'التركيب والصيانة',
    desc: 'خدمات تركيب دقيقة وصيانة دورية بضمان شامل يضمن استدامة مطبخك.',
  },
  {
    icon: DoorClosed,
    title: 'خزائن ملابس',
    desc: 'تصميم وتفصيل خزائن ملابس عصرية تناسب مساحتك وتوفر أعلى درجات التنظيم.',
  },
  {
    icon: Droplets,
    title: 'غرف غسيل',
    desc: 'حلول تنظيم وتفصيل غرف غسيل متكاملة تجمع بين العملية والأناقة.',
  },
];

export { services };

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="خدماتنا"
          title="حلول متكاملة لمطبخك ومنزلك"
          desc="من الفكرة الأولى إلى التركيب النهائي، نقدم لك خدمات شاملة بأعلى معايير الجودة."
        />

        <div className="services-grid">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="service-card">
                <div className="service-icon">
                  <Icon size={28} />
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
