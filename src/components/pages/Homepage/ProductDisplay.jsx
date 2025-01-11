import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/Productdisplay.css";

const ProductDisplay = ({ products }) => {
  const sliderRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const shortedproduct = products.slice(0, 8)
  const scrollAmount = 3 * 300;

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    checkButtons();
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    checkButtons();
  };

  const checkButtons = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener("scroll", checkButtons);
    checkButtons();

    return () => {
      if (slider) slider.removeEventListener("scroll", checkButtons);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="product-slider">
        <h5 className="mb-3 ms-3">MORE TO SHOP</h5>
        {showLeft && (
          <button className="slider-btn left" onClick={scrollLeft}>
            &#8592;
          </button>
        )}
        <div className="slider-container" ref={sliderRef}>
          {shortedproduct.map((product) => (
            <div key={product.id} className="product">
              <Link to={`/product/${product.id}`}>
                <img src={product.images[1]} alt={product.name} />
                <h6 className="text mt-2">{product.name}</h6>
                <p className="text-danger text">${product.price}<span className="ms-2 text-black"><del>${product.price + 12}</del></span></p>

              </Link>
            </div>
          ))}
        </div>
        {showRight && (
          <button className="slider-btn right" onClick={scrollRight}>
            &#8594;
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductDisplay;
