import React from 'react';
import '../style/Subhome.css';
import { Link } from 'react-router-dom';

const Subhome = () => {
  return (
    <>
      <div id="card">
        <div className="card-1">
          <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_2000/cms/7cDj6PxpBs9kRxOo0JSW7U/09460c49c2459b34ab6fc76bf34eecfb/24Q4_DecemberBAU_Site_TriPanel_EU-UK_Gifting-01_1200x1500.png" alt="" />
          <div className="content">
            <h4>Wool Runner Go - Fluff</h4>
            <p>Super Soft, Super Giftable</p>
          </div>
          <div className="buttons">
            <Link to='/women'><button>Shop Women</button></Link>
            <Link to='/men'><button>Shop Men</button></Link>
          </div>
        </div>
        <div className="card-2">
          <video
            src="https://cdn.allbirds.com/video/upload/f_auto,q_auto/cms/6JzgSRWxQcOKC2NjmFgj7k/a8ea972dad08fcb00d8a58804ea1ac55/24Q3_MizzleRelaunch_WorldOfDry_WoolRunnerMizzle_Homepage_Tri-Panel_Module_Desktop_Mobile_1200x1500.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div className="content">
            <h4>Wool Runner Mizzle</h4>
            <p>Weather-ready, Everyday Sneaker</p>
          </div>
          <div className="buttons">
            <Link to='/women'><button>Shop Women</button></Link>
            <Link to='/men'><button>Shop Men</button></Link>
          </div>
        </div>
        <div className="card-3">
          <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1867/cms/5TAAuLmsSt5031uldn5iId/7a62b97ca4df6738f6bcc0f96d49080a/24Q4_DecemberBAU_Site_TriPanel_EU-UK_Gifting-02_1200x1500.png" alt="" />
          <div className="content">
            <h4>Runner Go - Corduroy</h4>
            <p>Classically Cozy Organic Cotton</p>
          </div>
          <div className="buttons">
            <Link to='/women'><button>Shop Women</button></Link>
            <Link to='/men'><button>Shop Men</button></Link>
          </div>
        </div>
      </div>
      <div id="card2">
        <div>
          <h3>We Make Better Things In A Better Way</h3>
          <p>By looking to the world's greatest innovator—Nature—we create shoes that deliver <br /> unrivaled comfort that you feel good in and feel good about.</p>
          <h4>allbirds</h4>
          <h6>by nature</h6>
        </div>
      </div>
    </>
  );
};

export default Subhome;
