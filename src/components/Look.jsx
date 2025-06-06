import { useState, useEffect, useRef } from 'react';
import './Look.css';
import MediaItem from './MediaItem';

const Look = ({ look, isLastLook, isFirstLook, onNext, onPrevious }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const timerRef = useRef(null);
  
  // Auto-rotate image media items every 5 seconds
  useEffect(() => {
    if (look.media[currentMediaIndex].type === 'image') {
      timerRef.current = setTimeout(() => {
        navigateToNextMedia();
      }, 5000);
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentMediaIndex]);

  const navigateToPreviousMedia = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    if (currentMediaIndex > 0) {
      setCurrentMediaIndex(currentMediaIndex - 1);
    }
  };

  const navigateToNextMedia = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    if (currentMediaIndex < look.media.length - 1) {
      setCurrentMediaIndex(currentMediaIndex + 1);
    } else if (!isLastLook) {
      // If we're at the last media item and not the last look, go to next look
      onNext();
    }
  };

  // Handle video completion
  const handleVideoEnded = () => {
    navigateToNextMedia();
  };

  return (
    <div className="look">
      <div className="look-header">
        <h2>{look.title}</h2>
        <p>{look.description}</p>
      </div>
      
      <div className="media-container">
        <MediaItem 
          media={look.media[currentMediaIndex]} 
          onVideoEnded={handleVideoEnded} 
          onNextMedia={navigateToNextMedia}
          onPreviousMedia={navigateToPreviousMedia}
        />
        
        {/* Media navigation dots */}
        <div className="media-navigation">
          {look.media.map((_, index) => (
            <span
              key={index}
              className={`media-dot ${index === currentMediaIndex ? 'active' : ''}`}
              onClick={() => {
                if (timerRef.current) {
                  clearTimeout(timerRef.current);
                }
                setCurrentMediaIndex(index);
              }}
            />
          ))}
        </div>
      </div>

      {/* Look navigation hints */}
      <div className="look-navigation-hints">
        {!isFirstLook && (
          <div className="navigation-hint up" onClick={onPrevious}>
            <span>↑ Previous Look</span>
          </div>
        )}
        {!isLastLook && (
          <div className="navigation-hint down" onClick={onNext}>
            <span>Next Look ↓</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Look;
