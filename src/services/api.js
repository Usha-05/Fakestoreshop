import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com'

const api = axios.create({
  baseURL: BASE_URL,
})

export const getAllProducts = async () => {
  try {
    const response = await api.get('/products')
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch products')
  }
}

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`)
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch product details')
  }
}

export const getProductsByCategory = async (category) => {
  try {
    const response = await api.get(`/products/category/${category}`)
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch products by category')
  }
}

export const getAllCategories = async () => {
  try {
    const response = await api.get('/products/categories')
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch categories')
  }
}

export default api
