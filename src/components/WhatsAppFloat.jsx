import { MessageCircle, Phone } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <>
      {/* WhatsApp Floating Button (Right) */}
      <a
        href="https://wa.me/966561911054"
        target="_blank"
        rel="noreferrer"
        aria-label="تواصل عبر الواتساب"
        className="whatsapp-float"
      >
        <MessageCircle size={28} />
        <span className="whatsapp-ping" />
      </a>

      {/* Phone Call Floating Button (Left) */}
      <a
        href="tel:0561911054"
        aria-label="اتصال هاتفي"
        className="phone-float"
      >
        <Phone size={26} />
        <span className="phone-ping" />
      </a>
    </>
  );
}
