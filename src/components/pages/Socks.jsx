import React from 'react'
import Productpage from '../Productpage'
import './style/Socks.css'

const Socks = ({ products }) => {

  const NoShowFilter = products.filter((item) => item['sub-category'] === "No Show Socks")
  const AnkleFilter = products.filter((item) => item['sub-category'] === "Ankle Socks")
  const CrewFilter = products.filter((item) => item['sub-category'] === "Crew Socks")
  const PackFilter = products.filter((item) => item['sub-category'] === "Pack Socks")
  return (
    <div className='socks-main'>
      <div className="socks-image">
        <h3>Anytime Socks</h3>
        <p>Made with a blend of light, breathable materials like tree fiber and Organic Cotton, our socks keep your feet cool, dry, and smiling (if feet could smile).</p>
      </div>
      <div className="socks-category-heading mt-5">
        <h4>No Show Socks</h4>
        <p>Light, breathable and made to move and groove without budging.</p>
      </div>
      <div className="product-grid-container-socks">
        {
          NoShowFilter.map((product) => (
            <Productpage key={product.id} product={product} />
          ))
        }
      </div>
      <div className="socks-border"></div>
      <div className="socks-category-heading">
        <h4>Ankle Socks</h4>
        <p>Designed to keep you comfortable for workouts or work.</p>
      </div>
      <div className="product-grid-container-socks">
        {
          AnkleFilter.map((product) => (
            <Productpage key={product.id} product={product} />
          ))
        }
      </div>
      <div className="socks-border"></div>
      <div className="socks-category-heading">
        <h4>Crew Socks</h4>
        <p>A classic crew height sock designed to keep you comfortable whether it's the workweek or the weekend.</p>
      </div>
      <div className="product-grid-container-socks">
        {
          CrewFilter.map((product) => (
            <Productpage key={product.id} product={product} />
          ))
        }
      </div>
      <div className="socks-border"></div>
      <div className="socks-category-heading">
        <h4>3-Pack Socks</h4>
      </div>
      <div className="product-grid-container-socks">
        {
          PackFilter.map((product) => (
            <Productpage key={product.id} product={product} />
          ))
        }
      </div>
    </div>

  )
}

export default Socks