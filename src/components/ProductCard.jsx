import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, onClose, position }) => {
  const cardRef = useRef(null);
  
  // Calculate the position of the product card
  useEffect(() => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    
    // Position the card based on the position of the annotation dot
    let xPosition = `${position.x}%`;
    let yPosition = `${position.y}%`;
    
    // Check if the card would extend beyond screen edges and adjust if needed
    const rect = card.getBoundingClientRect();
    const parentRect = card.parentElement.getBoundingClientRect();
    
    // Check horizontal overflow
    if (rect.right > parentRect.right) {
      xPosition = `calc(${position.x}% - ${cardWidth}px)`;
    }
    
    // Check vertical overflow
    if (rect.bottom > parentRect.bottom) {
      yPosition = `calc(${position.y}% - ${cardHeight}px)`;
    }
    
    // Apply the calculated position
    card.style.left = xPosition;
    card.style.top = yPosition;
  }, [position]);
  
  return (
    <div className="product-card" ref={cardRef}>
      <button className="close-button" onClick={onClose}>×</button>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <Link to={`/${product.id}`} className="shop-now-button">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
