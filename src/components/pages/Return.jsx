import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './style/Return.css';

const Return = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };

  return (
    <React.Fragment>
      <div className="return-main">
        <div className="return-image">
          <img
            src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1200/cms/6qdYyIqg2U8ZQHKb6Oqyq4/af5847017a1b1644314547278c58327e/24Q2_EarthDay_ReRun_Site_Thumbnail_1200x1684.jpg"
            alt=""
          />
        </div>
        <div className="return-text">
          <h3>Allbirds ReRun™</h3>
          <h3 className="my-3">A New Way To Get Old Favorites</h3>
          <p>
            Allbirds ReRun™ is a marketplace where you can shop slightly
            imperfect and gently used products, extending their life and
            lowering our impact on the planet. Allbirds has partnered with
            Trove, a company that specializes in circular commerce, to run
            Allbirds ReRun™ on our behalf.
          </p>
          <h6>
            By clicking the link below, you will be leaving allbirds.com and
            heading to the ReRun marketplace site.
          </h6>
          <button onClick={handleNavigation}>Start Shopping ReRun™</button>
        </div>
      </div>
      <h3 className="approach-headding pt-5">The Allbirds Approach</h3>
      <div className="approach-section">
        <div className="approach-card">
          <h5>Wear-All-Day Comfort</h5>
          <p>
            Lightweight, bouncy, and wildly comfortable, Allbirds shoes make
            any outing feel effortless. Slip in, lace up, or slide them on and
            enjoy the comfy support.
          </p>
        </div>
        <div className="approach-card">
          <h5>Sustainability In Every Step</h5>
          <p>
            From materials to transport, we’re working to reduce our carbon
            footprint to near zero. Holding ourselves accountable and striving
            for climate goals isn’t a 30-year goal—it’s now.
          </p>
        </div>
        <div className="approach-card">
          <h5>Materials From The Earth</h5>
          <p>
            We replace petroleum-based synthetics with natural alternatives
            wherever we can. Like using wool, tree fiber, and sugar cane.
            They're soft, breathable, and better for the planet—win, win, win.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Return;
