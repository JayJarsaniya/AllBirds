import React from 'react'
import { Link } from 'react-router-dom'
import './pages/style/Productpage.css';
const Productpage = ({product}) => {
  return (
    <React.Fragment>
        <Link to={`/product/${product.id}`}>
            <div key={product.id} className="product-card-container">
              <div className="product-image-wrapper">
                <img src={product.images[1]} alt={product.name} className="product-image-element" />
              </div>
              {/* <br /> */}
              <h3 className="product-name-heading">{product.name}</h3>
              <p className="product-price-text">
                ${product.price}{' '}
                <span className="product-original-price">
                  <del>${product.price + 12}</del>
                </span>
              </p>
            </div>
          </Link>
    </React.Fragment>
  )
}

export default Productpage