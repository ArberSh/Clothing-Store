import { useEffect, useRef } from 'react';
import './WhyUs.css';

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="24" cy="24" r="20" />
        <path d="M14 24l7 7 13-14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: '100% Hallall',
    titleEn: 'Certified Halal',
    desc: 'Çdo produkt i verifikuar sipas standardeve Islame. Pa alkool, pa ingredients të ndaluara.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M24 4l4 12h12L30 24l4 12-10-7-10 7 4-12L8 16h12z" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Cilësi e Lartë',
    titleEn: 'Premium Quality',
    desc: 'Materiale premium të importuara. Qepje precize, ngjyra rezistente, bukuri që zgjat.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="8" y="16" width="32" height="24" rx="2" />
        <path d="M16 16v-4a8 8 0 0116 0v4" />
        <circle cx="24" cy="28" r="3" />
        <path d="M24 31v3" strokeLinecap="round" />
      </svg>
    ),
    title: 'Dërgesa Shqipëri',
    titleEn: 'Nationwide Delivery',
    desc: 'Dërgojmë në çdo qytet të Shqipërisë. Paketim diskret, i sigurt, brenda 2-3 ditëve.',
  },
];

export default function WhyUs() {
  const ref = useRef(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll('.why-item');
    if (!items) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('why-item--visible'), i * 150);
        }
      }),
      { threshold: 0.2 }
    );
    items.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-us section-pad" id="why-us">
      {/* Decorative top border */}
      <div className="why-us__border-top" aria-hidden="true" />

      <div className="container">
        <div className="why-us__head">
          <span className="section-label">Pse ne?</span>
          <div className="gold-line" />
          <h2 className="why-us__title">Besimi Juaj, Prioriteti Ynë</h2>
          <p className="why-us__sub">
            Your Trust, Our Priority
          </p>
        </div>

        <div className="why-grid" ref={ref}>
          {pillars.map((p) => (
            <div className="why-item" key={p.title}>
              <div className="why-item__icon">{p.icon}</div>
              <h3 className="why-item__title">{p.title}</h3>
              <span className="why-item__title-en">{p.titleEn}</span>
              <p className="why-item__desc">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="why-us__quote">
          <span className="why-us__quote-mark">❝</span>
          <p>
            "Veshja e mirë është shenjë e kujdesit ndaj vetes dhe ndaj Allahut"
          </p>
          <cite>— Muslim Brand Albania</cite>
        </blockquote>
      </div>

      <div className="why-us__border-bottom" aria-hidden="true" />
    </section>
  );
}
