import { useState, useRef } from 'react';
import './MediaItem.css';
import ProductCard from './ProductCard';

const MediaItem = ({ media, onVideoEnded, onNextMedia, onPreviousMedia }) => {
  const [activeAnnotation, setActiveAnnotation] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleAnnotationClick = (annotation) => {
    if (activeAnnotation && activeAnnotation.id === annotation.id) {
      setActiveAnnotation(null);
    } else {
      setActiveAnnotation(annotation);
    }
  };

  const closeAnnotation = () => {
    setActiveAnnotation(null);
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
        
        {/* Product card */}
        {activeAnnotation && (
          <ProductCard 
            product={activeAnnotation.product} 
            onClose={closeAnnotation}
            position={{
              x: activeAnnotation.xPercent,
              y: activeAnnotation.yPercent
            }}
          />
        )}
        
        {/* Navigation hints */}
        <div className="media-nav-hint left-hint">‹</div>
        <div className="media-nav-hint right-hint">›</div>
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
      </div>
    );
  }
  
  return null;
};

export default MediaItem;
