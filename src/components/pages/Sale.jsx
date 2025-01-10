import React, { useState } from 'react';
import Productpage from '../Productpage';
import './style/Sale.css';

const Sale = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('men');

  const toggleCategory = () => {
    setSelectedCategory((prevCategory) => (prevCategory === 'men' ? 'women' : 'men'));
  };

  const filteredProducts = products.filter((product) => {
    const isSaleShoe = product['sub-category'] === 'Sale Shoes'; 
    return isSaleShoe && product.category === selectedCategory;
  });

  return (
    <div className="sale-main">
      <div className="category-toggle-buttons">
        <button
          className="toggle-button merged"
          onClick={toggleCategory}
        >
          <span className={selectedCategory === 'men' ? 'active' : ''}>MEN</span> {' '}
          <span className={selectedCategory === 'women' ? 'active' : ''}>WOMEN</span>
        </button>
      </div>

      <div className="sale-sub">
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <Productpage key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;
