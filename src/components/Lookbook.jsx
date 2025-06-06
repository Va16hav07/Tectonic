import { useState, useEffect, useRef } from 'react';
import './Lookbook.css';
import Look from './Look';
import { mockLooks } from '../data/mockData';

const Lookbook = () => {
  const [currentLookIndex, setCurrentLookIndex] = useState(0);
  const lookbookRef = useRef(null);

  // Handle swipe navigation between looks
  useEffect(() => {
    const lookbookElement = lookbookRef.current;
    if (!lookbookElement) return;

    let touchStartY = 0;
    
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      
      // Detect swipe direction and navigate accordingly
      if (Math.abs(deltaY) > 50) {  // Threshold for swipe detection
        if (deltaY > 0) {
          // Swipe up - go to next Look
          navigateToLook(currentLookIndex + 1);
        } else {
          // Swipe down - go to previous Look
          navigateToLook(currentLookIndex - 1);
        }
      }
    };

    lookbookElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    lookbookElement.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      lookbookElement.removeEventListener('touchstart', handleTouchStart);
      lookbookElement.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentLookIndex]);

  const navigateToLook = (index) => {
    if (index >= 0 && index < mockLooks.length) {
      setCurrentLookIndex(index);
    }
  };

  return (
    <div className="lookbook-container" ref={lookbookRef}>
      {mockLooks[currentLookIndex] && (
        <Look 
          look={mockLooks[currentLookIndex]} 
          isLastLook={currentLookIndex === mockLooks.length - 1}
          isFirstLook={currentLookIndex === 0}
          onNext={() => navigateToLook(currentLookIndex + 1)}
          onPrevious={() => navigateToLook(currentLookIndex - 1)}
        />
      )}
      <div className="look-navigation">
        <div className="look-navigation-indicator">
          {mockLooks.map((_, index) => (
            <span 
              key={index} 
              className={`nav-dot ${index === currentLookIndex ? 'active' : ''}`}
              onClick={() => navigateToLook(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lookbook;
