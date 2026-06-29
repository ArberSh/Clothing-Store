import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Islamic geometric SVG pattern background */}
      <div className="hero__pattern" aria-hidden="true">
        <svg className="hero__geo" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-tile" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              {/* 8-pointed star */}
              <polygon points="50,10 61,38 90,38 67,56 76,84 50,68 24,84 33,56 10,38 39,38"
                fill="none" stroke="rgba(201,168,76,0.18)" strokeWidth="0.6" />
              <polygon points="50,20 56,40 80,40 62,53 68,73 50,62 32,73 38,53 20,40 44,40"
                fill="none" stroke="rgba(201,168,76,0.10)" strokeWidth="0.4" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(201,168,76,0.06)" strokeWidth="0.4" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(201,168,76,0.06)" strokeWidth="0.4" />
              <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(201,168,76,0.04)" strokeWidth="0.4" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="rgba(201,168,76,0.04)" strokeWidth="0.4" />
              <circle cx="50" cy="50" r="4" fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="0.5" />
              <circle cx="0" cy="0" r="4" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />
              <circle cx="100" cy="0" r="4" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />
              <circle cx="0" cy="100" r="4" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="4" fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="400" height="400" fill="url(#islamic-tile)" />
        </svg>
      </div>

      {/* Animated crescent */}
      <div className="hero__crescent" aria-hidden="true">
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="44" fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="1" />
          <circle cx="60" cy="60" r="36" fill="none" stroke="rgba(201,168,76,0.12)" strokeWidth="0.5" />
          <path
            d="M60 18 A42 42 0 1 0 60 102 A30 30 0 1 1 60 18 Z"
            fill="rgba(201,168,76,0.08)"
            stroke="rgba(201,168,76,0.4)"
            strokeWidth="0.8"
          />
          <circle cx="75" cy="30" r="3" fill="rgba(201,168,76,0.6)" />
        </svg>
      </div>

      <div className="hero__content container">
        <span className="section-label">Tirana • Shqipëri • Est. 2024</span>

        <h1 className="hero__title">
          Veshje Islame<br />
          <em>sipas Sunetit</em>
        </h1>

        <p className="hero__subtitle">
          Jilbabe &nbsp;•&nbsp; Abaya &nbsp;•&nbsp; Khimar &nbsp;•&nbsp; Nikabe &nbsp;•&nbsp; Parfume Arabe
        </p>
        <p className="hero__subtitle-en">
          Islamic Clothing &amp; Lifestyle — Modesty meets Elegance
        </p>

        <div className="hero__actions">
          <a href="#categories" className="hero__btn-primary">
            Shiko Koleksionin
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://wa.me/355XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn-secondary"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.523 5.845L0 24l6.32-1.498A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.727.883.899-3.639-.234-.374A9.81 9.81 0 012.182 12C2.182 6.572 6.572 2.182 12 2.182c5.428 0 9.818 4.39 9.818 9.818 0 5.428-4.39 9.818-9.818 9.818z"/>
            </svg>
            Kontakto WhatsApp
          </a>
        </div>

        <div className="hero__trust">
          <span>✦ 100% Hallall</span>
          <span className="hero__trust-sep">|</span>
          <span>✦ Tirana, Shqipëri</span>
          <span className="hero__trust-sep">|</span>
          <span>✦ Dërgesa në gjithë vendin</span>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span></span>
      </div>
    </section>
  );
}
