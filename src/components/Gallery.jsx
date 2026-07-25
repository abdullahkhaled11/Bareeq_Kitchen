/**
 * Gallery.jsx
 * Homepage gallery section — each card links to its project detail page.
 * The 6 items map 1-to-1 with the 6 slugs in src/data/projects.js.
 */
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import k1 from '@/assets/kitchen-1.jpg';
import k2 from '@/assets/kitchen-2.jpg';
import k3 from '@/assets/kitchen-3.jpg';
import k4 from '@/assets/kitchen-4.jpg';
import wardrobeImg from '@/assets/wardrobe.png';
import laundryImg from '@/assets/laundry.png';

const gallery = [
  { src: k1,          title: 'مطابخ حديثة',        tag: 'مشروع مكتمل', slug: 'modern-kitchen' },
  { src: k2,          title: 'مطابخ كلاسيكية',      tag: 'مشروع مكتمل', slug: 'classic-kitchen' },
  { src: k3,          title: 'مطابخ خشب طبيعي',     tag: 'مشروع مكتمل', slug: 'natural-wood-kitchen' },
  { src: k4,          title: 'مطابخ ألومنيوم',       tag: 'مشروع مكتمل', slug: 'aluminium-kitchen' },
  { src: wardrobeImg, title: 'خزائن ملابس',          tag: 'مشروع مكتمل', slug: 'wardrobe' },
  { src: laundryImg,  title: 'غرف غسيل',             tag: 'مشروع مكتمل', slug: 'laundry-room' },
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
