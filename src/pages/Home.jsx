import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from '../components/Button'
import Modal from '../components/Modal'
import './Home.css'

function Home({ toggleTheme }) {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProductCatalogClick = () => {
    navigate('/products')
  }

  const handleSearchFilterClick = () => {
    navigate('/products', { state: { scrollToSearch: true } })
  }

  const handleResponsiveDesignClick = () => {
    setIsModalOpen(true)
  }

  const handleDarkModeClick = () => {
    toggleTheme()
  }

  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      action()
    }
  }

  return (
    <div className="home">
      <div className="home-hero">
        <h1 className="home-title">Welcome to FakeStore Shop</h1>
        <p className="home-subtitle">
          Discover amazing products from our curated collection
        </p>
        <p className="home-description">
          Browse through our extensive product catalog, search for your favorites, and explore
          detailed information about each item. This Single Page Application
          demonstrates modern React development with routing, API integration,
          and responsive design.
        </p>
        <div className="home-actions">
          <Link to="/products">
            <Button variant="primary">View Products</Button>
          </Link>
          <Link to="/list">
            <Button variant="secondary">View List</Button>
          </Link>
        </div>
      </div>

      <div className="home-features">
        <div 
          className="feature-card"
          onClick={handleProductCatalogClick}
          onKeyDown={(e) => handleKeyDown(e, handleProductCatalogClick)}
          role="button"
          tabIndex={0}
          aria-label="Navigate to Product Catalog"
        >
          <div className="feature-icon">🛍️</div>
          <h3 className="feature-title">Product Catalog</h3>
          <p className="feature-description">
            Browse through a wide range of products in grid or list view
          </p>
        </div>
        
        <div 
          className="feature-card"
          onClick={handleSearchFilterClick}
          onKeyDown={(e) => handleKeyDown(e, handleSearchFilterClick)}
          role="button"
          tabIndex={0}
          aria-label="Navigate to Products and focus search bar"
        >
          <div className="feature-icon">🔍</div>
          <h3 className="feature-title">Search & Filter</h3>
          <p className="feature-description">
            Find products quickly with our search and category filter functionality
          </p>
        </div>
        
        <div 
          className="feature-card"
          onClick={handleResponsiveDesignClick}
          onKeyDown={(e) => handleKeyDown(e, handleResponsiveDesignClick)}
          role="button"
          tabIndex={0}
          aria-label="Show responsive design information"
        >
          <div className="feature-icon">📱</div>
          <h3 className="feature-title">Responsive Design</h3>
          <p className="feature-description">
            Enjoy a seamless experience on any device - mobile, tablet, or desktop
          </p>
        </div>
        
        <div 
          className="feature-card"
          onClick={handleDarkModeClick}
          onKeyDown={(e) => handleKeyDown(e, handleDarkModeClick)}
          role="button"
          tabIndex={0}
          aria-label="Toggle dark mode"
        >
          <div className="feature-icon">🌙</div>
          <h3 className="feature-title">Dark Mode</h3>
          <p className="feature-description">
            Toggle between light and dark themes for comfortable viewing
          </p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Responsive Design"
      >
        <p>Our UI adapts to any device — mobile, tablet, or desktop</p>
      </Modal>
    </div>
  )
}

export default Home
