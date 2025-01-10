import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './redux/productAction';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useParams, useNavigate } from 'react-router-dom';
import '../pages/style/SingleProduct.css';
import ReturnPolicy from './Singleproduct/ReturnPolicy';

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.products.products);
  const product = products?.find(item => item.id === parseInt(id));
  const auth = getAuth();

  const [mainMedia, setMainMedia] = useState('');
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const colorOptions = [
    { name: 'Classic Color', colorCode: '#FFFFFF' },
    { name: 'Hazy Indigo', colorCode: '#354E6F' },
    { name: 'Light Gray', colorCode: '#EAEAEA' },
    { name: 'Taupe', colorCode: '#C5BFB5' },
    { name: 'White', colorCode: '#F2F2F2' },
    { name: 'Black', colorCode: '#000000' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (product) {
      setMainMedia(product?.images?.[0] || '');
      setSelectedSize(product?.size?.[0] || null);
      setSelectedColor(colorOptions[0]?.name || null);
    }
  }, [product]);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setIsAuthenticated(!!user);
    });
  }, [auth]);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      alert('Please login to add items to your cart.');
      navigate('/user');
      return;
    }

    if (selectedSize && selectedColor) {
      const cartItem = {
        ...product,
        selectedSize,
        selectedColor,
      };
      alert(`${product.name} successfully added to cart!`);
      navigate(`/cart`, { replace: true });

      dispatch(addToCart(cartItem));
    }
  };

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="single-main">
      <div className="single-product-page">
        <div className="thumbnails">
          {product?.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumb ${index + 1}`}
              onClick={() => setMainMedia(image)}
            />
          ))}
          {product?.video && (
            <video onClick={() => setMainMedia(product.video)} muted>
              <source src={product.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div className="main-media">
          {mainMedia.includes('mp4') ? (
            <video controls autoPlay className="video-display">
              <source src={mainMedia} type="video/mp4" />
            </video>
          ) : (
            <img src={mainMedia} alt="Main" className="image-display" />
          )}
        </div>

        <div className="product-details">
          <h1>{product.name}</h1>
          {product.description && <p className="description">{product.description}</p>}
          <div className="price-section">
            <span className="sale-price">
              ${product.price}{' '}
              <span className="product-discount">
                <del>${product.price + 12}</del>
              </span>
            </span>
          </div>
          <h4>SALE: Hazy Indigo (Blizzard Sole)</h4>

          <div className="color-options">
            {colorOptions.map((option, index) => (
              <span
                key={index}
                className={`color-circle ${selectedColor === option.name ? 'active' : ''}`}
                style={{ backgroundColor: option.colorCode }}
                onClick={() => setSelectedColor(option.name)}
                title={option.name}
              ></span>
            ))}
          </div>

          <h4>Select Size:</h4>
          <div className="size-selector">
            {product?.size?.map(size => (
              <button
                key={size}
                className={selectedSize === size ? 'size-button selected' : 'size-button'}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <button
            className="add-to-cart mt-3"
            onClick={handleAddToCart}
            disabled={!selectedSize || !selectedColor}
          >
            {selectedSize && selectedColor
              ? `Add Size ${selectedSize} in ${selectedColor} to Cart`
              : 'Select Size and Color'}
          </button>
        </div>
      </div>
      <ReturnPolicy />
    </div>
  );
};

export default SingleProduct;
