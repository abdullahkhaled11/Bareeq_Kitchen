/**
 * SectionHeader – reusable eyebrow + title + optional description block
 * used by Services, Gallery, Testimonials, and Contact sections.
 *
 * Props:
 *   eyebrow {string} – small uppercase label above the title
 *   title   {string} – main heading
 *   desc    {string} – optional paragraph below the title
 */
export default function SectionHeader({ eyebrow, title, desc }) {
  return (
    <div className="text-center mx-auto" style={{ maxWidth: '42rem' }}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2
        className="mt-3 fw-black text-brand-dark"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900 }}
      >
        {title}
      </h2>
      {desc && (
        <p className="mt-3 text-muted-custom" style={{ fontSize: '1.0625rem' }}>
          {desc}
        </p>
      )}
    </div>
  );
}
