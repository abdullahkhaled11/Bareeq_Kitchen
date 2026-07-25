import { useState, useEffect } from 'react';
import { Play, X, Film } from 'lucide-react';
import SectionHeader from './SectionHeader';

export default function ProjectVideos({
  videos = [],
  title = '',
  eyebrow = 'فيديوهات المشروع',
  heading = 'فيديوهات توثيقية من موقع العمل',
}) {
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    if (activeVideo === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeVideo]);

  if (!videos || !videos.length) return null;

  return (
    <>
      <section className="gallery-section" style={{ padding: '4rem 1rem' }}>
        <div className="section-inner">
          <SectionHeader eyebrow={eyebrow} title={heading} />

          <div className="gallery-grid" style={{ marginTop: '3rem' }}>
            {videos.map((videoSrc, i) => (
              <div
                key={i}
                className="gallery-card video-card"
                role="button"
                tabIndex={0}
                aria-label={`تشغيل فيديو ${i + 1}`}
                onClick={() => setActiveVideo(videoSrc)}
                onKeyDown={(e) => e.key === 'Enter' && setActiveVideo(videoSrc)}
                style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
              >
                <video
                  src={videoSrc}
                  muted
                  preload="metadata"
                  style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }}
                />
                <div className="gallery-overlay" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.4) 100%)' }} />
                
                <div className="video-play-badge">
                  <Play size={24} fill="#ffffff" color="#ffffff" style={{ marginLeft: '-2px' }} />
                </div>

                <div className="gallery-caption">
                  <div className="gallery-caption-tag">{title}</div>
                  <div className="gallery-caption-title d-flex align-items-center gap-2">
                    <Film size={16} />
                    تشغيل التوثيق المرئي {i + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Lightbox Modal ── */}
      {activeVideo && (
        <div
          className="lightbox-backdrop"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label="مشغل الفيديو"
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '850px', width: '92%' }}>
            <button
              className="lightbox-btn lightbox-close"
              onClick={() => setActiveVideo(null)}
              aria-label="إغلاق"
            >
              <X size={22} />
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              style={{ width: '100%', maxHeight: '80vh', borderRadius: '1rem', background: '#000' }}
            />
          </div>
        </div>
      )}
    </>
  );
}
