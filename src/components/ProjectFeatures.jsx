/**
 * ProjectFeatures.jsx
 * Renders the features list and the specifications table for the detail page.
 * Inherits .services-grid, .service-card, .service-icon, .service-title,
 *           .service-desc, .stat-item, .icon-box CSS from the design system.
 *
 * Props:
 *   features        {Array<{ iconName, title, desc }>}
 *   specifications  {Array<{ label, value }>}
 */
import {
  Sparkles, Shield, Settings, Clock, Gem, Paintbrush, Layout, Award,
  Leaf, Palette, Hammer, Recycle, Zap, DollarSign, LayoutGrid,
  Lightbulb, Lock, Sliders, Package, Layers, Wind,
  CheckCircle, Star,
} from 'lucide-react';
import SectionHeader from './SectionHeader';

/* Map icon name strings to Lucide components */
const ICON_MAP = {
  Sparkles, Shield, Settings, Clock, Gem, Paintbrush, Layout, Award,
  Leaf, Palette, Hammer, Recycle, Zap, DollarSign, LayoutGrid,
  Lightbulb, Lock, Sliders, Package, Layers, Wind,
  CheckCircle, Star,
};

export default function ProjectFeatures({ features = [], specifications = [] }) {
  return (
    <>
      {/* ── Features ── */}
      {features.length > 0 && (
        <section className="services-section">
          <div className="section-inner">
            <SectionHeader
              eyebrow="مميزات المشروع"
              title="لماذا تختارنا؟"
              desc="نقدم لك أفضل المميزات مع ضمان الجودة والالتزام."
            />

            <div className="services-grid" style={{ marginTop: '3rem' }}>
              {features.map((f, i) => {
                const Icon = ICON_MAP[f.iconName] || CheckCircle;
                return (
                  <div key={i} className="service-card">
                    <div className="service-icon">
                      <Icon size={26} />
                    </div>
                    <h3 className="service-title">{f.title}</h3>
                    <p className="service-desc">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── Specifications ── */}
      {specifications.length > 0 && (
        <section className="about-section" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
          <div className="section-inner">
            <SectionHeader
              eyebrow="المواصفات الفنية"
              title="تفاصيل المشروع"
            />

            <div className="project-specs-grid" style={{ marginTop: '2.5rem' }}>
              {specifications.map((s, i) => (
                <div key={i} className="project-spec-item">
                  <span className="project-spec-label">{s.label}</span>
                  <span className="project-spec-value">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
