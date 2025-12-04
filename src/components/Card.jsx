import { Link } from 'react-router-dom'
import './Card.css'

function Card({ product, view = 'grid' }) {
  if (view === 'list') {
    return (
      <Link to={`/products/${product.id}`} className="product-card product-card-list">
        <div className="product-card-image">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
          />
        </div>
        <div className="product-card-content">
          <h3 className="product-card-title">{product.title}</h3>
          <p className="product-card-category">{product.category}</p>
          <div className="product-card-footer">
            <span className="product-card-price">${product.price}</span>
            <span className="product-card-rating">⭐ {product.rating?.rate || 'N/A'} ({product.rating?.count || 0})</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <div className="product-card-image">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
        <div className="product-card-overlay">
          <span className="product-rating">⭐ {product.rating?.rate?.toFixed(1) || 'N/A'}</span>
        </div>
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{product.title}</h3>
        <div className="product-card-footer">
          <span className="product-card-price">${product.price}</span>
          <span className="product-card-category">{product.category}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card
