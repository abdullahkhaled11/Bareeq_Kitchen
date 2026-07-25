import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{ minHeight: '100vh', padding: '2rem', background: 'var(--color-secondary)' }}
    >
      <div className="icon-box icon-box-xl mb-4" style={{ width: '5rem', height: '5rem' }}>
        <ChefHat size={36} />
      </div>

      <h1
        className="text-brand-dark"
        style={{ fontSize: 'clamp(4rem, 15vw, 8rem)', fontWeight: 900, lineHeight: 1 }}
      >
        404
      </h1>

      <h2 className="mt-2 text-brand-dark fw-bold" style={{ fontSize: '1.5rem' }}>
        الصفحة غير موجودة
      </h2>

      <p className="mt-2 text-muted-custom" style={{ maxWidth: '26rem' }}>
        الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
      </p>

      <Link
        to="/"
        className="btn-brand mt-4 text-decoration-none d-inline-flex align-items-center gap-2"
        style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}
