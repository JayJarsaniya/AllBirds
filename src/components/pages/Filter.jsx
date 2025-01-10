import React, { useState } from "react";
import "./style/Filter.css";
import Productpage from "../Productpage";

const FilterPage = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, Infinity]);
  const [category, setCategory] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div className="filter-page-container mt-5 pt-5">
      <div className="search-bar-container">
        <h3 className="search-heading mb-3 fw-bold">Search Results</h3>
        <input
          type="text"
          placeholder="Enter Search Term"
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <Productpage key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FilterPage;
