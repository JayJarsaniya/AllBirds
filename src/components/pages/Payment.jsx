import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style/Payment.css';

const Payment = () => {
    const cartItems = useSelector((state) => state.cart.cart);
    const navigate = useNavigate();

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const subtotal = calculateSubtotal();

    const handlePlaceOrder = () => {
        alert('Order placed successfully!');
        navigate('/');
    };

    if (cartItems.length === 0) {
        return (
            <div className="payment-page-empty mt-5 pt-5 text-center">
                <h2 className="no-items-message">No items in the cart!</h2>
                <button onClick={() => navigate('/')} className="continue-shopping-btn">
                    Continue Shopping &#8674;
                </button>
            </div>
        );
    }

    return (
        <div className="payment-main">
            <div className="payment-page mt-5">
                <h3 className="payment-header">Payment Page</h3>
                <div className="cart-summary">
                    <h4 className="cart-summary-title">Cart Summary</h4>
                    {cartItems.map((item) => (
                        <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="summary-item">
                            <p className="item-name">{item.name} - {item.selectedSize} / {item.selectedColor}</p>
                            <p className="item-quantity">Quantity: {item.quantity}</p>
                            <p className="item-price">Price: ${item.price.toFixed(2)}</p>
                        </div>
                    ))}
                    <h4 className="subtotal">Subtotal: ${subtotal.toFixed(2)}</h4>
                </div>
                <div className="payment-form">
                    <h4 className="payment-form-title">Payment Details</h4>
                    <form onSubmit={(e) => { e.preventDefault(); handlePlaceOrder(); }} className="payment-form-fields">
                        <label className="form-label">
                            Card Number:
                            <input type="text" placeholder="Enter card number" required className="card-input" />
                        </label>
                        <label className="form-label">
                            Expiry Date:
                            <input type="text" placeholder="MM/YY" required className="expiry-input" />
                        </label>
                        <label className="form-label">
                            CVV:
                            <input type="text" placeholder="CVV" required className="cvv-input" />
                        </label>
                        <button type="submit" className="place-order-btn">Place Order</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Payment;
