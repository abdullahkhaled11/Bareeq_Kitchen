/**
 * Gallery.jsx
 * Homepage gallery section — each card links to its project detail page.
 * The 6 items map 1-to-1 with the 6 slugs in src/data/projects.js.
 */
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import alumImg from '@/assets/kitchen-4.jpg';
import classicImg from '@/assets/kitchen-2.jpg';
import woodImg from '@/assets/kitchen-3.jpg';
import wardrobeImg from '@/assets/wardrobe.png';
import laundryImg from '@/assets/laundry.png';
import washbasinsImg from '@/assets/washbasins.png';

const gallery = [
  { src: alumImg,       title: 'مطابخ ألومنيوم', tag: 'تصاميم عصرية',  slug: 'aluminium-kitchen' },
  { src: classicImg,    title: 'مطابخ كلاسيك',   tag: 'أناقة لا تنتهي', slug: 'classic-kitchen' },
  { src: woodImg,       title: 'مطابخ خشب',     tag: 'خشب طبيعي',   slug: 'natural-wood-kitchen' },
  { src: wardrobeImg,   title: 'خزائن ملابس',    tag: 'تنظيم راقي',   slug: 'wardrobe' },
  { src: laundryImg,    title: 'غرف غسيل',       tag: 'حلول متكاملة', slug: 'laundry-room' },
  { src: washbasinsImg, title: 'مغاسل',          tag: 'رخام ومرايا',  slug: 'washbasins' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="section-inner">
        <SectionHeader
          eyebrow="معرض الأعمال"
          title="مشاريع نفخر بها"
          desc="مجموعة مختارة من أعمالنا المنفذة لعملائنا الكرام — انقر على أي كارت لرؤية التفاصيل."
        />

        <div className="gallery-grid">
          {gallery.map((g) => (
            <Link
              key={g.slug}
              to={`/projects/${g.slug}`}
              className="gallery-card"
              aria-label={`عرض تفاصيل ${g.title}`}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <img src={g.src} alt={g.title} loading="lazy" />
              <div className="gallery-overlay" />
              <div className="gallery-caption">
                <div className="gallery-caption-tag">{g.tag}</div>
                <h3 className="gallery-caption-title">{g.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
