/**
 * ProjectHero.jsx
 * Full-viewport hero banner for the Project Details page.
 * Inherits the site's hero design system (.hero-section, .hero-overlay, .hero-badge).
 *
 * Props:
 *   project  {object}  – single project object from projects.js
 */
import Breadcrumb from './Breadcrumb';

export default function ProjectHero({ project }) {
  return (
    <section className="project-hero-section">
      {/* Background image + overlay */}
      <div className="hero-bg">
        <img src={project.heroImage} alt={project.title} />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="project-hero-inner">
        {/* Breadcrumb row */}
        <div className="project-hero-breadcrumb animate-fade-in">
          <Breadcrumb
            items={[
              { label: 'الرئيسية', to: '/' },
              { label: 'مشاريعنا', to: '/#gallery' },
              { label: project.title },
            ]}
          />
        </div>

        {/* Category pill */}
        <span className="hero-badge animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="hero-badge-dot" />
          {project.category}
        </span>

        {/* Title + Subtitle */}
        <h1
          className="hero-title mt-3 animate-fade-in"
          style={{ animationDelay: '0.2s', maxWidth: '52rem' }}
        >
          {project.title}
        </h1>

        <p
          className="hero-desc animate-fade-in"
          style={{ animationDelay: '0.3s', maxWidth: '40rem' }}
        >
          {project.subtitle}
        </p>

        {/* Stats row */}
        {project.stats && (
          <div className="project-hero-stats animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {project.stats.map((s, i) => (
              <div key={i} className="project-hero-stat">
                <span className="project-hero-stat-value">{s.value}</span>
                <span className="project-hero-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
