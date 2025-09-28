import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">TANN TRIM</div>
      
      <nav className="nav-menu">
        <a href="#bags" className="nav-item">Bags</a>
        <a href="#travel" className="nav-item">Travel</a>
        <a href="#accessories" className="nav-item">Accesories</a>
        <a href="#gifting" className="nav-item">Gifting</a>
        <a href="#jewelry" className="nav-item">Jewelery</a>
      </nav>
      
      <div className="header-actions">
        <div className="action-icon">
          <i className="fas fa-search"></i>
        </div>
        <div className="action-icon">
          <i className="far fa-user"></i>
        </div>
        <div className="action-icon">
          <i className="far fa-bookmark"></i>
        </div>
        <div className="action-icon">
          <i className="fas fa-shopping-bag"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
