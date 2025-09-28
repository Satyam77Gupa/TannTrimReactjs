import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductGrid.css';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookmarkedProducts, setBookmarkedProducts] = useState(new Set());
  const [cartItems, setCartItems] = useState(new Set());

  // Mock product data based on Figma design
  const mockProducts = [
    {
      id: 1,
      title: "The Brown Metro Movers",
      currentPrice: 4899,
      originalPrice: 8999,
      discount: "50% Off",
      image: "/images/product1.png",
      category: "backpack"
    },
    {
      id: 2,
      title: "The Metro Movers Black",
      currentPrice: 4899,
      originalPrice: 8999,
      discount: "50% Off",
      image: "/images/product2.png",
      category: "backpack"
    },
    {
      id: 3,
      title: "The Metro Movers Black",
      currentPrice: 4899,
      originalPrice: 8999,
      discount: "50% Off",
      image: "/images/product3.png",
      category: "backpack"
    },
    {
      id: 4,
      title: "The Metro Movers Black",
      currentPrice: 4899,
      originalPrice: 8999,
      discount: "50% Off",
      image: "/images/product4.png",
      category: "backpack"
    },
    {
      id: 5,
      title: "The Brown Metro Movers",
      currentPrice: 4899,
      originalPrice: 8999,
      discount: "50% Off",
      image: "/images/product1.png",
      category: "backpack"
    },
    {
      id: 6,
      title: "The Metro Movers Black",
      currentPrice: 4899,
      originalPrice: 8999,
      discount: "50% Off",
      image: "/images/product2.png",
      category: "backpack"
    },
    {
      id: 7,
      title: "The Metro Movers Black",
      currentPrice: 4899,
      originalPrice: 8999,
      discount: "50% Off",
      image: "/images/product3.png",
      category: "backpack"
    },
    {
      id: 8,
      title: "The Metro Movers Black",
      currentPrice: 4899,
      originalPrice: 8999,
      discount: "50% Off",
      image: "/images/product4.png",
      category: "backpack"
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // In a real app, you would make an API call here
        // const response = await axios.get('/api/products');
        // setProducts(response.data);
        
        // For now, use mock data
        setTimeout(() => {
          setProducts(mockProducts);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts(mockProducts);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleBookmark = (productId) => {
    setBookmarkedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const toggleCart = (productId) => {
    setCartItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="product-grid loading">
        <div className="loading-spinner">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image-container">
            <img 
              src={product.image} 
              alt={product.title}
              className="product-image"
            />
          </div>
          
          <div className="product-actions">
            <button 
              className={`bookmark-btn ${bookmarkedProducts.has(product.id) ? 'bookmarked' : ''}`}
              onClick={() => toggleBookmark(product.id)}
            >
              <i className="far fa-bookmark"></i>
            </button>
            
            <button 
              className={`add-to-cart ${cartItems.has(product.id) ? 'in-cart' : ''}`}
              onClick={() => toggleCart(product.id)}
            >
              <i className="fas fa-shopping-bag cart-icon"></i>
              <div className="cart-circle">
                <i className="fas fa-plus plus-icon"></i>
              </div>
            </button>
          </div>
          
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            
            <div className="product-price">
              <span className="rupee-icon">₹</span>
              <div className="price-container">
                <span className="price-current">{formatPrice(product.currentPrice)}</span>
                <span className="price-original">{formatPrice(product.originalPrice)}</span>
                <span className="discount">({product.discount})</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
