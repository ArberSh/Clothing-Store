import './InstagramFeed.css';

const posts = [
  { emoji: '🧕', caption: 'Abaya e re / New collection', likes: '247', gradient: 'linear-gradient(135deg,#3a2418,#2d1c14)' },
  { emoji: '🌙', caption: 'Parfum Oud arabik', likes: '183', gradient: 'linear-gradient(135deg,#231510,#3a2418)' },
  { emoji: '🤲', caption: 'Veshje namazi premium', likes: '312', gradient: 'linear-gradient(135deg,#2d1c14,#1a0f0a)' },
  { emoji: '🌿', caption: 'Produkte bio Hallall', likes: '195', gradient: 'linear-gradient(135deg,#1a0f0a,#2d1c14)' },
  { emoji: '✨', caption: 'Koleksioni Ramadan 2025', likes: '428', gradient: 'linear-gradient(135deg,#3a2418,#231510)' },
  { emoji: '🕌', caption: 'Besimi ynë, bukuria jonë', likes: '356', gradient: 'linear-gradient(135deg,#2d1c14,#3a2418)' },
];

export default function InstagramFeed() {
  return (
    <section className="insta section-pad" id="instagram">
      <div className="insta__head container">
        <span className="section-label">Social Media</span>
        <div className="gold-line" />
        <h2 className="insta__title">Na ndiqni në Instagram</h2>
        <a
          href="https://instagram.com/muslim_brand_albania"
          target="_blank"
          rel="noopener noreferrer"
          className="insta__handle"
        >
          @muslim_brand_albania
        </a>
      </div>

      <div className="insta__scroll">
        <div className="insta__track">
          {posts.map((p, i) => (
            <a
              key={i}
              href="https://instagram.com/muslim_brand_albania"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-post"
              style={{ background: p.gradient }}
            >
              {/* Islamic geo overlay */}
              <div className="insta-post__geo" aria-hidden="true">
                <svg viewBox="0 0 100 100">
                  <polygon points="50,5 61,35 90,35 67,54 76,84 50,65 24,84 33,54 10,35 39,35"
                    fill="none" stroke="rgba(201,168,76,0.2)" strokeWidth="0.8" />
                  <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(201,168,76,0.1)" strokeWidth="0.5" />
                </svg>
              </div>

              <span className="insta-post__emoji">{p.emoji}</span>

              <div className="insta-post__overlay">
                <p className="insta-post__caption">{p.caption}</p>
                <span className="insta-post__likes">♡ {p.likes}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="insta__cta container">
        <a
          href="https://instagram.com/muslim_brand_albania"
          target="_blank"
          rel="noopener noreferrer"
          className="insta__follow-btn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Na ndiqni — Follow Us
        </a>
      </div>
    </section>
  );
}
