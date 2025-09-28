import React from 'react';
import './ProductFilter.css';

const ProductFilter = () => {
  return (
    <div className="product-filter">
      <div className="filter-left">
        <div className="filter-dot"></div>
        <span className="filter-text">Bags</span>
        <div className="filter-dot"></div>
        <span className="filter-text">Backpacks</span>
      </div>
      
      <div className="product-count">13 products</div>
      
      <div className="filter-icon">
        <svg width="16.67" height="20" viewBox="0 0 16.67 20" fill="none">
          <path d="M1 1H15.67L10.33 8.33H6.33L1 1Z" stroke="#E5DFD9" strokeWidth="2"/>
          <path d="M1 19H15.67L10.33 11.67H6.33L1 19Z" stroke="#E5DFD9" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
};

export default ProductFilter;
