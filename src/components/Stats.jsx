import { ChefHat, Award, Users, ShieldCheck } from 'lucide-react';

const stats = [
  { value: '+1500', label: 'مطبخ منفذ',  icon: ChefHat },
  { value: '+15',   label: 'سنة خبرة',   icon: Award },
  { value: '+1200', label: 'عميل سعيد',  icon: Users },
  { value: '10',    label: 'سنوات ضمان', icon: ShieldCheck },
];

export default function Stats() {
  return (
    <section className="stats-band">
      <div className="stats-grid">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="stat-item">
              <div className="icon-box icon-box-lg">
                <Icon size={24} />
              </div>
              <div>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
