import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './MediaItem.css';

const MediaItem = ({ media, onVideoEnded, onNextMedia, onPreviousMedia }) => {
  const [activeAnnotation, setActiveAnnotation] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const [showProducts, setShowProducts] = useState(false);

  const handleAnnotationClick = (annotation) => {
    if (activeAnnotation && activeAnnotation.id === annotation.id) {
      setActiveAnnotation(null);
    } else {
      setActiveAnnotation(annotation);
      setShowProducts(true);
    }
  };

  const toggleProductsDisplay = () => {
    setShowProducts(!showProducts);
  };

  const handleMediaClick = (e) => {
    // Calculate click position within the media item
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    // If clicked on the left third, go to previous media
    if (x < width / 3) {
      onPreviousMedia();
    }
    // If clicked on the right third, go to next media
    else if (x > (width * 2) / 3) {
      onNextMedia();
    }
    // Clicks in the middle area don't navigate
  };

  const toggleMute = (e) => {
    e.stopPropagation();  // Prevent triggering parent click handlers
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  if (media.type === 'image') {
    return (
      <div className="media-item image" onClick={handleMediaClick}>
        <img src={media.url} alt="Look" />
        
        {/* Annotation dots */}
        {media.annotations && media.annotations.map(annotation => (
          <div 
            key={annotation.id}
            className={`annotation-dot ${activeAnnotation?.id === annotation.id ? 'active' : ''}`}
            style={{ 
              left: `${annotation.xPercent}%`, 
              top: `${annotation.yPercent}%` 
            }}
            onClick={(e) => {
              e.stopPropagation();  // Prevent triggering media click
              handleAnnotationClick(annotation);
            }}
          >
            <span>+</span>
          </div>
        ))}
        
        {/* Horizontal Products Carousel */}
        {media.annotations && media.annotations.length > 0 && showProducts && (
          <div className="products-carousel">
            {media.annotations.map(annotation => (
              <div key={annotation.id} className="carousel-product-card">
                <div className="carousel-product-image">
                  <img src={annotation.product.image} alt={annotation.product.name} />
                </div>
                <div className="carousel-product-info">
                  <h4>{annotation.product.name}</h4>
                  <p className="carousel-product-price">${annotation.product.price.toFixed(2)}</p>
                  <Link to={`/${annotation.product.id}`} className="shop-link">
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Navigation hints */}
        <div className="media-nav-hint left-hint">‹</div>
        <div className="media-nav-hint right-hint">›</div>
        
        {/* Products toggle button */}
        {media.annotations && media.annotations.length > 0 && (
          <button 
            className="products-toggle" 
            onClick={(e) => {
              e.stopPropagation();
              toggleProductsDisplay();
            }}
            style={{
              position: 'absolute',
              bottom: showProducts ? '120px' : '15px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '5px 10px',
              cursor: 'pointer',
              fontSize: '12px',
              zIndex: '6'
            }}
          >
            {showProducts ? 'Hide Products' : 'Show Products'}
          </button>
        )}
      </div>
    );
  } else if (media.type === 'video') {
    return (
      <div className="media-item video">
        <video
          ref={videoRef}
          src={media.url}
          poster={media.thumbnail}
          autoPlay
          muted={isMuted}
          playsInline
          loop={false}
          onEnded={onVideoEnded}
        />
        <div className="video-controls">
          <button className="mute-button" onClick={toggleMute}>
            {isMuted ? '🔇' : '🔊'}
          </button>
        </div>
        
        {/* Annotation dots for videos */}
        {media.annotations && media.annotations.map(annotation => (
          <div 
            key={annotation.id}
            className={`annotation-dot ${activeAnnotation?.id === annotation.id ? 'active' : ''}`}
            style={{ 
              left: `${annotation.xPercent}%`, 
              top: `${annotation.yPercent}%` 
            }}
            onClick={(e) => {
              e.stopPropagation();
              handleAnnotationClick(annotation);
            }}
          >
            <span>+</span>
          </div>
        ))}
        
        {/* Horizontal Products Carousel for videos */}
        {media.annotations && media.annotations.length > 0 && showProducts && (
          <div className="products-carousel">
            {media.annotations.map(annotation => (
              <div key={annotation.id} className="carousel-product-card">
                <div className="carousel-product-image">
                  <img src={annotation.product.image} alt={annotation.product.name} />
                </div>
                <div className="carousel-product-info">
                  <h4>{annotation.product.name}</h4>
                  <p className="carousel-product-price">${annotation.product.price.toFixed(2)}</p>
                  <Link to={`/${annotation.product.id}`} className="shop-link">
                    Shop Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Products toggle button for videos */}
        {media.annotations && media.annotations.length > 0 && (
          <button 
            className="products-toggle" 
            onClick={toggleProductsDisplay}
            style={{
              position: 'absolute',
              bottom: showProducts ? '120px' : '15px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '5px 10px',
              cursor: 'pointer',
              fontSize: '12px',
              zIndex: '6'
            }}
          >
            {showProducts ? 'Hide Products' : 'Show Products'}
          </button>
        )}
      </div>
    );
  }
  
  return null;
};

export default MediaItem;
