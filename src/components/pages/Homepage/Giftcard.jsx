import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Giftcard.css';

const Giftcard = () => {
  return (
    <div className="gift">
      <div className="gift-card">
        <div className="gift-image">
          <img
            src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000/cms/MMseqjTzUEmXtlLiHGOCT/3c6d38988c647391e6a8f5e1aa166e9c/24Q4_Gifting_Site_DualPanel_GiftsUnder100_2000x2000.png"
            alt="Gifts Under $100"
          />
          <div className="gift-text">
            <h3>Gifts Under $100</h3>
            <p>Cozy Gifts At Comfy Prices</p>
          </div>
          <div className="gift-overlay">
            <div className="gift-buttons">
              <Link className="gift-btn" to="/men-discount">
                Shop Men
              </Link>
              <Link className="gift-btn" to="/women-discount">
                Shop Women
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="gift-card">
        <div className="gift-image">
          <img
            src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000/cms/7AIBz6Uqd8ulhKk2mUX5UI/3a2b0b6a0d9111e4f854784b08a5229f/24Q4_Gifting_Site_DualPanel_GiftCards_2000x2000.png"
            alt="Gift Cards"
          />
          <div className="gift-text">
            <h3>Gift Cards</h3>
            <p>Always Fits, Never Fails</p>
          </div>
          <div className="gift-overlay">
            <div className="gift-buttons">
              <Link className="gift-btn" to="/gift-card">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giftcard;
