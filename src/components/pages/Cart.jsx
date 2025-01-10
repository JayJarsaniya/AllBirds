import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from './redux/productAction';
import { useNavigate } from 'react-router-dom';
import './style/Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item.id, item.selectedSize, item.selectedColor));
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item.id, item.selectedSize, item.selectedColor));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item.id, item.selectedSize, item.selectedColor));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();

  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  if (cartItems.length === 0) {
    return (
      <div className="mt-5 pt-5 text-center">
        <h2>Your cart is empty</h2>
        <button onClick={() => navigate('/')} className="continue-shopping-btn">
          Continue Shopping &#8674;
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h3 className="mt-5">Your Cart</h3>
      {cartItems.map((item) => (
        <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="cart-item">
          <img src={item.images[1]} alt={item.name} className="cart-item-image" />
          <div className="w-100">
            <div className="cart-heading">
              <h3>{item.name}</h3>
              <b className="price">${item.price}</b>
            </div>
            <p><b>Size:</b> {item.selectedSize}</p>
            <p><b>Color:</b> {item.selectedColor}</p>
            <div className="quantity-control">
              <button className="quantity-control-dec" onClick={() => handleDecrement(item)}>-</button>
              <span>{item.quantity}</span>
              <button className="quantity-control-inc" onClick={() => handleIncrement(item)}>+</button>
              <button onClick={() => handleRemoveItem(item)} className="remove-button">Remove</button>
            </div>
          </div>
        </div>
      ))}

      <div className="cart-subtotal">
        <h4>Subtotal: ${subtotal.toFixed(2)}</h4>
        <button onClick={handleProceedToPayment} className="proceed-to-payment-btn">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
