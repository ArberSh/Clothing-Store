import './FeaturedProducts.css';

const products = [
  {
    gradient: 'linear-gradient(145deg, #3a2418 0%, #1a0f0a 60%, #2d1c14 100%)',
    pattern: '✦',
    tag: 'Bestseller',
    name: 'Abaya Klasike',
    nameEn: 'Classic Abaya',
    desc: 'Abaya elegante prej pelushi të butë, e disponueshme në ngjyrë të zezë dhe navy.',
    sizes: 'S • M • L • XL',
    price: '3,500 ALL',
    oldPrice: '4,200 ALL',
  },
  {
    gradient: 'linear-gradient(145deg, #2d1c14 0%, #231510 60%, #3a2418 100%)',
    pattern: '◈',
    tag: 'I ri',
    name: 'Khimar Premium',
    nameEn: 'Premium Khimar',
    desc: 'Khimar me material të frymëmarrjes, i mbuluar plotësisht sipas sunetit.',
    sizes: 'One Size • Plus',
    price: '2,200 ALL',
    oldPrice: null,
  },
  {
    gradient: 'linear-gradient(145deg, #231510 0%, #2d1c14 50%, #1a0f0a 100%)',
    pattern: '❋',
    tag: 'Parfum',
    name: 'Oud Al Khaleeji',
    nameEn: 'Arabian Oud Perfume',
    desc: 'Erë oud e importuar nga Arabia Saudite — delikate, e qëndrueshme, Hallall.',
    sizes: '30ml • 50ml • 100ml',
    price: '1,800 ALL',
    oldPrice: '2,400 ALL',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="products section-pad" id="products">
      <div className="container">
        <div className="products__head">
          <span className="section-label">Produktet tona</span>
          <div className="gold-line" />
          <h2 className="products__title">Produktet e Zgjedhura</h2>
          <p className="products__subtitle">
            Cilësi e garantuar — çdo produkt testohet dhe certifikohet Hallall
          </p>
        </div>

        <div className="products__grid">
          {products.map((p) => (
            <article className="product-card" key={p.name}>
              {/* Image placeholder */}
              <div className="product-card__img" style={{ background: p.gradient }}>
                <div className="product-card__geo" aria-hidden="true">
                  <span className="product-card__geo-center">{p.pattern}</span>
                  {/* Corner geo lines */}
                  <svg viewBox="0 0 200 200" className="product-card__geo-svg">
                    <polygon points="100,20 130,70 180,70 140,100 155,150 100,120 45,150 60,100 20,70 70,70"
                      fill="none" stroke="rgba(201,168,76,0.15)" strokeWidth="1" />
                    <polygon points="100,35 124,78 170,78 134,103 147,148 100,125 53,148 66,103 30,78 76,78"
                      fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="0.6" />
                    <circle cx="100" cy="100" r="55" fill="none" stroke="rgba(201,168,76,0.1)" strokeWidth="0.5" />
                  </svg>
                </div>
                {p.tag && <span className="product-card__tag">{p.tag}</span>}
              </div>

              <div className="product-card__body">
                <h3 className="product-card__name">{p.name}</h3>
                <span className="product-card__name-en">{p.nameEn}</span>
                <p className="product-card__desc">{p.desc}</p>

                <div className="product-card__sizes">
                  <span className="product-card__sizes-label">Masat:</span>
                  <span>{p.sizes}</span>
                </div>

                <div className="product-card__footer">
                  <div className="product-card__price">
                    <span className="product-card__price-now">{p.price}</span>
                    {p.oldPrice && (
                      <span className="product-card__price-old">{p.oldPrice}</span>
                    )}
                  </div>
                  <a
                    href="https://wa.me/355XXXXXXXXX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="product-card__btn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.523 5.845L0 24l6.32-1.498A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.727.883.899-3.639-.234-.374A9.81 9.81 0 012.182 12C2.182 6.572 6.572 2.182 12 2.182c5.428 0 9.818 4.39 9.818 9.818 0 5.428-4.39 9.818-9.818 9.818z"/>
                    </svg>
                    Porosit Tani
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="products__more">
          <a
            href="https://wa.me/355XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="products__more-link"
          >
            Shiko të gjitha produktet
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
