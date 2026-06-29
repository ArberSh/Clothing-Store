import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      {/* Gold geometric border decoration */}
      <div className="footer__border-deco" aria-hidden="true">
        <svg viewBox="0 0 1200 24" preserveAspectRatio="none" fill="none">
          <path d="M0 12 L40 4 L80 12 L120 4 L160 12 L200 4 L240 12 L280 4 L320 12 L360 4 L400 12 L440 4 L480 12 L520 4 L560 12 L600 4 L640 12 L680 4 L720 12 L760 4 L800 12 L840 4 L880 12 L920 4 L960 12 L1000 4 L1040 12 L1080 4 L1120 12 L1160 4 L1200 12"
            stroke="rgba(201,168,76,0.45)" strokeWidth="1" />
          <path d="M0 18 L60 10 L120 18 L180 10 L240 18 L300 10 L360 18 L420 10 L480 18 L540 10 L600 18 L660 10 L720 18 L780 10 L840 18 L900 10 L960 18 L1020 10 L1080 18 L1140 10 L1200 18"
            stroke="rgba(201,168,76,0.2)" strokeWidth="0.6" />
        </svg>
      </div>

      <div className="footer__main container">
        {/* Brand column */}
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-mb">MB</span>
            <div className="footer__logo-text">
              <strong>Muslim Brand</strong>
              <em>Albania</em>
            </div>
          </div>
          <p className="footer__tagline">
            Veshje Islame sipas Sunetit.<br />
            <span>Islamic Clothing &amp; Lifestyle</span>
          </p>
          <div className="footer__social">
            <a
              href="https://instagram.com/muslim_brand_albania"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/355XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.523 5.845L0 24l6.32-1.498A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.727.883.899-3.639-.234-.374A9.81 9.81 0 012.182 12C2.182 6.572 6.572 2.182 12 2.182c5.428 0 9.818 4.39 9.818 9.818 0 5.428-4.39 9.818-9.818 9.818z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Navigim</h4>
          <ul className="footer__links">
            <li><a href="#categories">Koleksioni</a></li>
            <li><a href="#products">Produktet</a></li>
            <li><a href="#why-us">Rreth Nesh</a></li>
            <li><a href="#instagram">Instagram</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="footer__col">
          <h4 className="footer__col-title">Kategoritë</h4>
          <ul className="footer__links">
            <li><a href="#categories">Veshje Islame</a></li>
            <li><a href="#categories">Parfume Arabe</a></li>
            <li><a href="#categories">Produkte Bio</a></li>
            <li><a href="#categories">Veshje Namazi</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__col-title">Kontakt</h4>
          <address className="footer__address">
            <p>📍 Tirana, Shqipëri</p>
            <p>🕐 E Hënë – E Shtunë</p>
            <p>⏰ 09:00 – 20:00</p>
          </address>
          <a
            href="https://wa.me/355XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__wa-btn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.523 5.845L0 24l6.32-1.498A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.727.883.899-3.639-.234-.374A9.81 9.81 0 012.182 12C2.182 6.572 6.572 2.182 12 2.182c5.428 0 9.818 4.39 9.818 9.818 0 5.428-4.39 9.818-9.818 9.818z"/>
            </svg>
            Na shkruani tani
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <p>© {year} Muslim Brand Albania. Të gjitha të drejtat të rezervuara.</p>
          <p className="footer__bottom-right">
            Dizajnuar me ♡ për komunitetin Musliman Shqiptar
          </p>
        </div>
      </div>
    </footer>
  );
}
