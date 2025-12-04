import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../services/api'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Button from '../components/Button'
import './Detail.css'

function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await getProductById(id)
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const isFavorite = favorites.includes(parseInt(id))

  const toggleFavorite = () => {
    const productId = parseInt(id)
    let updatedFavorites
    
    if (isFavorite) {
      updatedFavorites = favorites.filter(favId => favId !== productId)
    } else {
      updatedFavorites = [...favorites, productId]
    }
    
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  if (loading) {
    return <Loader />
  }

  if (error || !product) {
    return (
      <Error
        message={error || 'Product not found'}
        onRetry={() => navigate('/products')}
      />
    )
  }

  return (
    <div className="detail-page">
      <Button
        variant="secondary"
        onClick={() => navigate(-1)}
        className="back-button"
      >
        ← Back
      </Button>

      <div className="detail-content">
        <div className="detail-poster">
          <img
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="detail-info">
          <div className="detail-header">
            <h1 className="detail-title">{product.title}</h1>
            <button
              className={`favorite-button ${isFavorite ? 'active' : ''}`}
              onClick={toggleFavorite}
              aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              {isFavorite ? '❤️' : '🤍'}
            </button>
          </div>

          <div className="detail-meta">
            <span className="detail-price">
              💰 ${product.price}
            </span>
            <span className="detail-rating">
              ⭐ {product.rating?.rate?.toFixed(1) || 'N/A'} / 5.0
            </span>
            <span className="detail-reviews">
              👥 {product.rating?.count || 0} reviews
            </span>
          </div>

          <div className="detail-category">
            <span className="category-tag">
              {product.category?.charAt(0).toUpperCase() + product.category?.slice(1)}
            </span>
          </div>

          <div className="detail-section">
            <h2 className="detail-section-title">Description</h2>
            <p className="detail-overview">{product.description}</p>
          </div>

          <div className="detail-stats">
            <div className="stat-item">
              <span className="stat-label">Price</span>
              <span className="stat-value">
                ${product.price}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Rating</span>
              <span className="stat-value">
                {product.rating?.rate?.toFixed(1) || 'N/A'} / 5.0
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Reviews</span>
              <span className="stat-value">{product.rating?.count || 0}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Category</span>
              <span className="stat-value">
                {product.category?.charAt(0).toUpperCase() + product.category?.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
