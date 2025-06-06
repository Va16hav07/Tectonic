import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockLooks } from '../data/mockData';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the product in our mock data
    const findProduct = () => {
      let foundProduct = null;
      
      mockLooks.forEach(look => {
        look.media.forEach(mediaItem => {
          if (mediaItem.type === 'image' && mediaItem.annotations) {
            mediaItem.annotations.forEach(annotation => {
              if (annotation.product.id === productId) {
                foundProduct = annotation.product;
              }
            });
          }
        });
      });
      
      return foundProduct;
    };

    const product = findProduct();
    setProduct(product);
    setLoading(false);
  }, [productId]);

  if (loading) {
    return (
      <div className="product-detail-container loading">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-container not-found">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <Link to="/" className="back-button">Back to Lookbook</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <div className="product-price">${product.price.toFixed(2)}</div>
          
          <div className="product-description">
            <p>This is a premium product that combines style and comfort. Perfect for any occasion, it offers both functionality and elegance.</p>
          </div>
          
          <div className="product-actions">
            <button className="add-to-cart-button">Add to Cart</button>
            <button className="wishlist-button">Add to Wishlist</button>
          </div>
          
          <div className="product-details">
            <h3>Product Details</h3>
            <ul>
              <li>High-quality materials</li>
              <li>Designed for comfort</li>
              <li>Modern and stylish look</li>
              <li>Durable construction</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="back-link-container">
        <Link to="/" className="back-button">Back to Lookbook</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
