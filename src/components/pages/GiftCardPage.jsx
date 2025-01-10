import React, { useState } from 'react';
import './style/Gift-card.css';

const GiftCardPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const giftCardAmounts = [25, 50, 100, 200, 500];

  const handleAmountSelection = (amount) => {
    setSelectedAmount(amount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAmount || !recipientName || !recipientEmail) {
      alert('Please fill out all fields.');
      return;
    }
    setShowModal(true);
  };

  const handleConfirm = () => {
    setShowModal(false);
    setRecipientName('');
    setRecipientEmail('');
    setSelectedAmount(null);
  };

  return (
    <div className="gift-card-page">
      <h2 className="title">Gift Card Page</h2>
      <div className="amount-selection">
        <h4>Select a Gift Card Amount</h4>
        <div className="amount-buttons">
          {giftCardAmounts.map((amount) => (
            <button
              key={amount}
              className={`amount-btn ${selectedAmount === amount ? 'selected' : ''}`}
              onClick={() => handleAmountSelection(amount)}
            >
              ${amount}
            </button>
          ))}
        </div>
      </div>

      <div className="recipient-form">
        <div className="card">
          <h5>Recipient Details</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Recipient Name</label>
              <input
                type="text"
                placeholder="Enter recipient's name"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Recipient Email</label>
              <input
                type="email"
                placeholder="Enter recipient's email"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-submit">
              <button type="submit" className="submit-btn w-100 mt-2">
                Proceed to Checkout
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h4>Gift Card Order Confirmation</h4>
            <p>
              You have selected a <strong>${selectedAmount}</strong> gift card for <strong>{recipientName}</strong>.
            </p>
            <p>We will send it to <strong>{recipientEmail}</strong>.</p>
            <div className="modal-footer">
              <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
              <button className="confirm-btn" onClick={handleConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftCardPage;
