import React from "react";
import { Link } from "react-router-dom";
import "../style/Bestsellers.css";

const Bestsellers = ({ products }) => {
    const bestProducts = products.slice(11, 15);

    return (
        <div className="homepage">
            <div className="hero-section">
                <div className="hero-image-container d-sm-block d-none">
                    <img
                        src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1867/cms/2QbmonxnEF2s4kQ2PjI2I5/6d7d707205321f0e7289bd097a16df54/24Q4_DecemberBAU_Site_ShoppableFeature_TD2_Desktop_2000x2000.png"
                        alt="Hero"
                        className="hero-image"
                    />
                    <div className="hero-buttons">
                        <Link to="/men" className="button">Shop Men</Link>
                        <Link to="/women" className="button">Shop Women</Link>
                    </div>
                </div>
            </div>

            <div className="product-grid">
                {bestProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <Link to={`/product/${product.id}`}>
                            <img
                                src={product.images[1]}
                                alt={product.name}
                                className="product-image"
                            />
                            <h4 className="product-name">{product.name}</h4>
                            <p className="product-price text-danger">
                                ${product.price}{" "}
                                <span className="product-discount">
                                    ${product.price + 12}
                                </span>
                            </p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bestsellers;
