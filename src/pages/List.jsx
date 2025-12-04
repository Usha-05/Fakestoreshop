import { useState, useEffect } from 'react'
import { getAllProducts, getProductsByCategory } from '../services/api'
import Card from '../components/Card'
import Loader from '../components/Loader'
import Error from '../components/Error'
import './List.css'

function List() {
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
    <div className="list-page">
      <div className="list-header">
        <h1 className="list-title">Product List</h1>
        <div className="list-controls">
          <input
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
        <div className="products-list">
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} view="list" />
          ))}
        </div>
      )}
    </div>
  )
}

export default List
