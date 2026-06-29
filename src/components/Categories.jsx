import { useEffect, useRef } from 'react';
import './Categories.css';

const cats = [
  {
    icon: '🧕',
    name: 'Veshje Islame',
    sub: 'Islamic Clothing',
    desc: 'Jilbabe, Abaya, Khimar & Nikabe të cilësisë së lartë',
  },
  {
    icon: '🌙',
    name: 'Parfume Arabe',
    sub: 'Arabian Perfumes',
    desc: 'Erëra lindore të importuara nga Arabia Saudite',
  },
  {
    icon: '🌿',
    name: 'Produkte Bio',
    sub: 'Organic Products',
    desc: 'Produkte natyrale Hallall për kujdesin e trupit',
  },
  {
    icon: '🤲',
    name: 'Veshje Namazi',
    sub: 'Prayer Clothing',
    desc: 'Çarçafë namazi, tesbih & aksesorë falje',
  },
];

export default function Categories() {
  const ref = useRef(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll('.cat-card');
    if (!cards) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('cat-card--visible'), i * 100);
        }
      }),
      { threshold: 0.15 }
    );
    cards.forEach(c => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="categories section-pad" id="categories">
      <div className="container">
        <div className="categories__head">
          <span className="section-label">Koleksioni ynë</span>
          <div className="gold-line" />
          <h2 className="categories__title">Kategoritë Tona</h2>
          <p className="categories__subtitle">
            Gjithçka që nevojitet për një jetesë Islame elegante
          </p>
        </div>

        <div className="cat-grid" ref={ref}>
          {cats.map((c) => (
            <a href="#products" key={c.name} className="cat-card">
              <div className="cat-card__border" />
              <span className="cat-card__icon">{c.icon}</span>
              <h3 className="cat-card__name">{c.name}</h3>
              <span className="cat-card__sub">{c.sub}</span>
              <p className="cat-card__desc">{c.desc}</p>
              <span className="cat-card__arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
