import React, { useState } from 'react';
import Productpage from '../Productpage';

const Women = ({ products }) => {
  const [priceRange, setPriceRange] = useState([0, 150]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange((prevRange) =>
      name === 'min'
        ? [Number(value) || '', prevRange[1]]
        : [prevRange[0], Number(value) || '']
    );
  };

  const handleSubCategoryChange = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };

  const filteredProducts = products.filter((product) => {
    const minPrice = priceRange[0] || 0;
    const maxPrice = priceRange[1] || Infinity;

    const matchesPrice =
      product.price >= minPrice && product.price <= maxPrice;
    const matchesSubCategory =
      !selectedSubCategory || product['sub-category'] === selectedSubCategory;

    return product.category === 'women' && matchesPrice && matchesSubCategory;
  });

  return (
    <div className="main-page-container">
      <div className="price-filter-container">
        <h5 className='mb-3'>FILTER BY PRICE</h5>
        <div className="filter-inputs-container">
          <label>
            Min:
            <input
              type="number"
              name="min"
              value={priceRange[0]}
              onChange={handlePriceChange}
              min="0"
              placeholder="Min"
              className='min'
            />
          </label>
          <label>
            Max:
            <input
              type="number"
              name="max"
              value={priceRange[1]}
              onChange={handlePriceChange}
              min="0"
              placeholder="Max"
            />
          </label>
        </div>
        <div className="category-shorting">
          <h5 className='category-shorting-heading'>FILTER BY CATEGORIES</h5>
          <button
            className="sub-category-button clear"
            onClick={() => handleSubCategoryChange('')}
          >
            All Categories
          </button>
          {['Everyday Sneakers', 'Active Shoes', 'Water-Repellent Shoes', 'Flats', 'Slip-Ons', 'Sale Shoes'].map((subCategory) => (
            <button
              key={subCategory}
              className={`sub-category-button ${selectedSubCategory === subCategory ? 'active' : ''
                }`}
              onClick={() => handleSubCategoryChange(subCategory)}
            >
              {subCategory}
            </button>
          ))}

        </div>
      </div>

      {/* Products Display */}
      <div className="product-grid-container">
        {filteredProducts.map((product) => (
          <Productpage key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Women;
