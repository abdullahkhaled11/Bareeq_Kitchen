/**
 * ProjectGallery.jsx
 * Image gallery grid with a lightbox modal for the Project Details page.
 * Inherits .gallery-grid, .gallery-card, .gallery-overlay, .gallery-caption styles.
 *
 * Props:
 *   images   {string[]}  – array of image src strings
 *   title    {string}    – project title (used in alt text)
 *   eyebrow  {string}    – optional eyebrow text (default: 'معرض الصور')
 *   heading  {string}    – optional heading (default: 'صور المشروع')
 */
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function ProjectGallery({
  images = [],
  title = '',
  eyebrow = 'معرض الصور',
  heading = 'صور المشروع',
}) {
  const [lightbox, setLightbox] = useState(null); // null or index

  const openAt = (i) => setLightbox(i);
  const close   = () => setLightbox(null);
  const prev    = () => setLightbox((i) => (i - 1 + images.length) % images.length);
  const next    = () => setLightbox((i) => (i + 1) % images.length);

  /* Keyboard navigation */
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape')      close();
      if (e.key === 'ArrowLeft')   next();
      if (e.key === 'ArrowRight')  prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  if (!images.length) return null;

  return (
    <>
      <section className="gallery-section">
        <div className="section-inner">
          <SectionHeader eyebrow={eyebrow} title={heading} />

          <div className="gallery-grid" style={{ marginTop: '3rem' }}>
            {images.map((src, i) => (
              <div
                key={i}
                className="gallery-card"
                role="button"
                tabIndex={0}
                aria-label={`عرض صورة ${i + 1}`}
                onClick={() => openAt(i)}
                onKeyDown={(e) => e.key === 'Enter' && openAt(i)}
                style={{ cursor: 'pointer' }}
              >
                <img src={src} alt={`${title} – صورة ${i + 1}`} loading="lazy" />
                <div className="gallery-overlay" />
                <div className="gallery-caption">
                  <div className="gallery-caption-tag">{title}</div>
                  <div className="gallery-caption-title d-flex align-items-center gap-2">
                    <ZoomIn size={16} />
                    عرض الصورة
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox modal ── */}
      {lightbox !== null && (
        <div
          className="lightbox-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="عارض الصور"
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button className="lightbox-btn lightbox-close" onClick={close} aria-label="إغلاق">
              <X size={22} />
            </button>

            {/* Prev */}
            {images.length > 1 && (
              <button className="lightbox-btn lightbox-prev" onClick={prev} aria-label="السابق">
                <ChevronRight size={26} />
              </button>
            )}

            <img
              src={images[lightbox]}
              alt={`${title} – صورة ${lightbox + 1}`}
              className="lightbox-img"
            />

            {/* Next */}
            {images.length > 1 && (
              <button className="lightbox-btn lightbox-next" onClick={next} aria-label="التالي">
                <ChevronLeft size={26} />
              </button>
            )}

            {/* Counter */}
            <div className="lightbox-counter">
              {lightbox + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
