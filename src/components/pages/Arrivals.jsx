import React, { useState } from 'react';
import Productpage from '../Productpage';

const Arrivals = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('men');

  const filteredProducts = products.filter(product =>
    selectedCategory === 'men'
      ? product.category === 'men tees'
      : product.category === 'women tees'
  );

  const shoes = products.filter(
    product =>
      product['sub-category'] === 'Slip-Ons' &&
      product.category === selectedCategory
  );

  const bags = products.filter(product => product.category === 'bag');
  const hats = products.filter(product => product.category === 'hats');

  const ProductGrid = ({ title, description, items }) => (
    <div className="product-section">
      {title && (
        <div className="socks-category-heading">
          <h4>{title}</h4>
          {description && <p>{description}</p>}
        </div>
      )}
      <div className="product-grid-container-socks">
        {items.map(product => (
          <Productpage key={product.id} product={product} />
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <div className="category-toggle-buttons mt-5 pt-4 me-4">
        <button
          className="toggle-button merged"
          onClick={() => setSelectedCategory('men')}
        >
          <span className={selectedCategory === 'men' ? 'active' : ''}>MEN</span>
        </button>
        <button
          className="toggle-button merged"
          onClick={() => setSelectedCategory('women')}
        >
          <span className={selectedCategory === 'women' ? 'active' : ''}>WOMEN</span>
        </button>
      </div>

      <ProductGrid
        title="Short Sleeve Tees"
        description="Breathable classic tees for everyday wear and light workouts"
        items={filteredProducts}
      />

      <ProductGrid
        title="Shoes"
        description={`Comfortable and stylish footwear for ${selectedCategory}.`}
        items={shoes}
      />

      <ProductGrid
        title="Bags"
        description="Explore our range of stylish and durable bags."
        items={bags}
      />

      <ProductGrid
        title="Hats"
        description="Add a finishing touch to your outfit with our hats."
        items={hats}
      />
    </div>
  );
};

export default Arrivals;
