import React, { useState , useEffect } from 'react';

export default function Gallery(){
    const modules = import.meta.glob('/src/4gallery/IMG_*.JPG', { eager: true, import: 'default' });
    const images = Object.entries(modules).map(([path, src]) => ({
      src,
      alt: path.split('/').pop(),
    }));
    // console.log('images found:', images.length, images);

    const [selectedSrc, setSelectedSrc] = useState(null);
 
    // Close on Escape
    useEffect(() => {
      if (!selectedSrc) return;
      const onKeyDown = (e) => {
        if (e.key === 'Escape') setSelectedSrc(null);
      };
      window.addEventListener('keydown', onKeyDown);
      return () => window.removeEventListener('keydown', onKeyDown);
    }, [selectedSrc]);
   
    return (
      <div style={styles.wrapper}>
        <div style={styles.grid}>
          {images.map((img) => (
            <div key={img.src} style={styles.cell} onClick={() => setSelectedSrc(img.src)}>
              {/* Thumbnail: simple in-place hover feedback, same as the
                  original version — small scale + lift, no cropping tricks. */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                style={styles.image}
                className="gallery-thumb"
              />
            </div>
          ))}
        </div>
   
        {/* Expanded view: click-triggered, not hover-triggered.
            Sits behind a backdrop; clicking the backdrop (or Escape) closes it.
            Sized with width/height: auto so the browser preserves the image's
            real aspect ratio — no cropping. Only transform/opacity animate,
            so the "expand" motion stays smooth. */}
        <div
          className={`gallery-backdrop ${selectedSrc ? 'is-active' : ''}`}
          onClick={() => setSelectedSrc(null)}
        >
          {selectedSrc && (
            <img
              src={selectedSrc}
              alt=""
              className="gallery-expanded"
              onClick={(e) => e.stopPropagation()} // clicking the image itself shouldn't close it
            />
          )}
        </div>
   
        <style>{`
          .gallery-cell {
            position: relative;
          }
          .gallery-thumb {
            transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
                        box-shadow 0.25s ease;
          }
          .gallery-thumb:hover {
            transform: scale(1.06);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
          }
   
          .gallery-backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0);
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
            transition: background 0.25s ease;
            z-index: 1000;
          }
          .gallery-backdrop.is-active {
            background: rgba(0, 0, 0, 0.85);
            pointer-events: auto;
          }
   
          .gallery-expanded {
            width: auto;
            height: auto;
            max-width: 85vw;
            max-height: 85vh;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
            opacity: 0;
            transform: scale(0.85);
            transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
                        opacity 0.3s ease;
            cursor: default;
          }
          .gallery-backdrop.is-active .gallery-expanded {
            opacity: 1;
            transform: scale(1);
          }
   
          @media (prefers-reduced-motion: reduce) {
            .gallery-thumb,
            .gallery-backdrop,
            .gallery-expanded {
              transition: none;
            }
          }
        `}</style>
      </div>
    );
  }
   
  const styles = {
    wrapper: {
      paddingTop: '80px',
      paddingRight: '24px',
      paddingBottom: '24px',
      paddingLeft: '24px',
      background: '#111',
      minHeight: '100vh',
      boxSizing: 'border-box',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '16px',
    },
    cell: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '8px',
      aspectRatio: '1 / 1',
      cursor: 'pointer',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
  };