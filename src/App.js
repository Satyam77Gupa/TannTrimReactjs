import React from 'react';
import './App.css';
import Header from './components/Header';
import CategoryNavigation from './components/CategoryNavigation';
import ProductGrid from './components/ProductGrid';
import ProductFilter from './components/ProductFilter';

function App() {
  return (
    <div className="App">
      <Header />
      <CategoryNavigation />
      <ProductFilter />
      <ProductGrid />
    </div>
  );
}

export default App;
