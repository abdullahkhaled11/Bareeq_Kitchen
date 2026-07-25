/**
 * ProjectDetails.jsx
 * ──────────────────────────────────────────────────────────────────────────
 * Dynamic project detail page — route: /projects/:slug
 *
 * Reads the :slug param, finds the matching project in projects.js, and
 * renders all sections.  Shows a branded 404 state for unknown slugs.
 * ──────────────────────────────────────────────────────────────────────────
 */
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Toaster } from 'sonner';
import { Home, ArrowLeft } from 'lucide-react';

import projects from '@/data/projects';

import Navbar        from '@/components/Navbar';
import Footer        from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Contact       from '@/components/Contact';
import ProjectHero   from '@/components/ProjectHero';
import ProjectGallery from '@/components/ProjectGallery';
import ProjectVideos  from '@/components/ProjectVideos';
import ProjectFeatures from '@/components/ProjectFeatures';
import ProjectCTA    from '@/components/ProjectCTA';
import SectionHeader from '@/components/SectionHeader';
import workshopImg   from '@/assets/workshop.jpg';

export default function ProjectDetails() {
  const { slug } = useParams();
  const contactRef = useRef(null);
  const navigate   = useNavigate();

  const project = projects.find((p) => p.slug === slug);

  /* Scroll to top on mount / slug change */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  /* ── 404 State ── */
  if (!project) {
    return (
      <div className="min-h-screen d-flex flex-column">
        <Navbar />
        <div
          className="d-flex flex-column align-items-center justify-content-center text-center"
          style={{ flex: 1, padding: '8rem 1rem' }}
        >
          <span className="section-eyebrow mb-3">404 – غير موجود</span>
          <h1 className="text-brand-dark" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900 }}>
            المشروع غير موجود
          </h1>
          <p className="text-muted-custom mt-3" style={{ maxWidth: '32rem', fontSize: '1.0625rem' }}>
            لم نتمكن من العثور على المشروع المطلوب. ربما تم تغيير الرابط أو حذف المشروع.
          </p>
          <Link
            to="/"
            className="btn-brand mt-4 d-inline-flex align-items-center gap-2"
            style={{ textDecoration: 'none', borderRadius: 'var(--radius-xl)', padding: '0.75rem 1.5rem' }}
          >
            <Home size={16} />
            العودة للرئيسية
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* ── 1. Hero Banner ── */}
      <ProjectHero project={project} />

      {/* ── 2. Project Overview ── */}
      <section className="about-section">
        <div className="about-inner">
          {/* Image column */}
          <div className="about-img-wrap">
            <img src={project.heroImage} alt={project.title} loading="lazy" />
            <div className="about-badge">
              <div className="about-badge-number">{project.stats?.[0]?.value ?? '+98'}</div>
              <div className="about-badge-label">{project.stats?.[0]?.label ?? 'مشروع'}</div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <span className="section-eyebrow">{project.category}</span>
            <h2
              className="mt-3 text-brand-dark"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900 }}
            >
              {project.title}
            </h2>
            <p className="mt-3 text-muted-custom" style={{ fontSize: '1rem', lineHeight: 1.85 }}>
              {project.description}
            </p>

            {/* Quick stat highlights */}
            {project.stats && (
              <div className="mt-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {project.stats.map((s, i) => (
                  <div key={i} className="stat-item" style={{ flex: '1 1 120px' }}>
                    <div>
                      <div className="stat-value">{s.value}</div>
                      <div className="stat-label">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 d-flex flex-wrap gap-3">
              <button
                className="btn-brand d-inline-flex align-items-center gap-2"
                onClick={scrollToContact}
              >
                احصل على عرض سعر
                <ArrowLeft size={16} />
              </button>
              <button
                className="btn-outline-brand d-inline-flex align-items-center gap-2"
                onClick={() => navigate('/#gallery')}
              >
                <Home size={16} />
                مشاريع أخرى
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Main Gallery ── */}
      <ProjectGallery
        images={project.gallery}
        title={project.title}
        eyebrow="معرض الصور"
        heading="صور المشروع"
      />

      {/* ── 3.5 Project Videos ── */}
      {project.videos?.length > 0 && (
        <ProjectVideos
          videos={project.videos}
          title={project.title}
          eyebrow="فيديوهات توثيقية"
          heading="فيديوهات من موقع العمل"
        />
      )}

      {/* ── 4. Features + Specifications ── */}
      <ProjectFeatures
        features={project.features}
        specifications={project.specifications}
      />

      {/* ── 5. Additional Gallery ── */}
      {project.additionalGallery?.length > 0 && (
        <ProjectGallery
          images={project.additionalGallery}
          title={project.title}
          eyebrow="أعمال إضافية"
          heading="لقطات أخرى من المشروع"
        />
      )}

      {/* ── 6. CTA Banner ── */}
      <ProjectCTA cta={project.cta} onCtaClick={scrollToContact} />

      {/* ── 7. Other Projects (mini grid) ── */}
      <section className="services-section">
        <div className="section-inner">
          <SectionHeader
            eyebrow="مشاريع أخرى"
            title="استكشف المزيد من أعمالنا"
          />
          <div className="gallery-grid" style={{ marginTop: '3rem' }}>
            {projects
              .filter((p) => p.slug !== project.slug)
              .slice(0, 3)
              .map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.slug}`}
                  className="gallery-card"
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <img src={p.heroImage} alt={p.title} loading="lazy" />
                  <div className="gallery-overlay" />
                  <div className="gallery-caption">
                    <div className="gallery-caption-tag">{p.category}</div>
                    <h3 className="gallery-caption-title">{p.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── 8. Contact Section ── */}
      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
      <WhatsAppFloat />
      <Toaster position="top-center" richColors />
    </div>
  );
}
