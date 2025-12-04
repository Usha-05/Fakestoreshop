import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getAllProducts, getProductsByCategory, getAllCategories } from '../services/api'
import Card from '../components/Card'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Button from '../components/Button'
import './Products.css'

function Products() {
  const location = useLocation()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const [productsData, categoriesData] = await Promise.all([
          getAllProducts(),
          getAllCategories()
        ])
        
        setProducts(productsData)
        setCategories(categoriesData)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchByCategory = async () => {
      if (selectedCategory === 'all') {
        try {
          setLoading(true)
          const data = await getAllProducts()
          setProducts(data)
        } catch (err) {
          setError(err.message)
        } finally {
          setLoading(false)
        }
      } else {
        try {
          setLoading(true)
          const data = await getProductsByCategory(selectedCategory)
          setProducts(data)
        } catch (err) {
          setError(err.message)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchByCategory()
  }, [selectedCategory])

  // Handle scroll to search when navigating from Search & Filter card
  useEffect(() => {
    if (location.state?.scrollToSearch) {
      // Wait for component to render and data to load
      const timer = setTimeout(() => {
        const searchInput = document.getElementById('products-search-input')
        if (searchInput) {
          searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' })
          setTimeout(() => {
            searchInput.focus()
          }, 400)
        }
        // Clear the state to prevent re-scrolling on re-renders
        window.history.replaceState({}, document.title)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [location.state])

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (loading && products.length === 0) {
    return <Loader />
  }

  if (error && products.length === 0) {
    return <Error message={error} onRetry={() => window.location.reload()} />
  }

  return (
    <div className="products-page">
      <div className="products-header">
        <h1 className="products-title">Our Products</h1>
        <div className="products-controls">
          <input
            id="products-search-input"
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="empty-state">
          <p>No products found. Try a different search term or category.</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} view="grid" />
          ))}
        </div>
      )}
    </div>
  )
}

export default Products

