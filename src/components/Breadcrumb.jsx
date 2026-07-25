/**
 * Breadcrumb.jsx
 * Reusable breadcrumb navigation strip that inherits the site design system.
 *
 * Props:
 *   items  {Array<{ label: string, to?: string }>}  – breadcrumb trail
 */
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="breadcrumb-nav" aria-label="مسار التنقل">
      <ol className="breadcrumb-list">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className={`breadcrumb-item${isLast ? ' breadcrumb-item-active' : ''}`}>
              {!isLast && item.to ? (
                <>
                  <Link to={item.to} className="breadcrumb-link">{item.label}</Link>
                  <ChevronLeft size={14} className="breadcrumb-sep" aria-hidden="true" />
                </>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
