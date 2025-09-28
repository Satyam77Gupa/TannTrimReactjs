import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const productAPI = {
  // Get all products
  getProducts: (params = {}) => {
    return api.get('/products', { params });
  },

  // Get product by ID
  getProductById: (id) => {
    return api.get(`/products/${id}`);
  },

  // Get products by category
  getProductsByCategory: (category, params = {}) => {
    return api.get(`/products/category/${category}`, { params });
  },

  // Search products
  searchProducts: (query, params = {}) => {
    return api.get('/products/search', { 
      params: { q: query, ...params } 
    });
  },

  // Get product categories
  getCategories: () => {
    return api.get('/categories');
  },

  // Get featured products
  getFeaturedProducts: (limit = 8) => {
    return api.get('/products/featured', { 
      params: { limit } 
    });
  }
};

export const cartAPI = {
  // Get cart items
  getCart: () => {
    return api.get('/cart');
  },

  // Add item to cart
  addToCart: (productId, quantity = 1) => {
    return api.post('/cart', { productId, quantity });
  },

  // Update cart item quantity
  updateCartItem: (itemId, quantity) => {
    return api.put(`/cart/${itemId}`, { quantity });
  },

  // Remove item from cart
  removeFromCart: (itemId) => {
    return api.delete(`/cart/${itemId}`);
  },

  // Clear cart
  clearCart: () => {
    return api.delete('/cart');
  }
};

export const wishlistAPI = {
  // Get wishlist
  getWishlist: () => {
    return api.get('/wishlist');
  },

  // Add to wishlist
  addToWishlist: (productId) => {
    return api.post('/wishlist', { productId });
  },

  // Remove from wishlist
  removeFromWishlist: (productId) => {
    return api.delete(`/wishlist/${productId}`);
  }
};

export const userAPI = {
  // Get user profile
  getProfile: () => {
    return api.get('/user/profile');
  },

  // Update user profile
  updateProfile: (data) => {
    return api.put('/user/profile', data);
  },

  // Get user orders
  getOrders: () => {
    return api.get('/user/orders');
  },

  // Get order by ID
  getOrderById: (orderId) => {
    return api.get(`/user/orders/${orderId}`);
  }
};

export default api;
