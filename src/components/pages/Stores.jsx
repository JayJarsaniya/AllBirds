import React from 'react'
import stores from '../../Store'
import './style/Store.css'

const Stores = () => {

  const UnitedStates = stores.filter(store => store.country === 'United States')
  const Canada = stores.filter(store => store.country === 'Canada')
  const UnitedKingdom = stores.filter(store => store.country === 'United Kingdom')
  const Australia = stores.filter(store => store.country === 'Australia')
  return (
    <div className='store-main'>
      <h3 className='country-title'>United States</h3>
      <div className="store-container">
        {UnitedStates.map(store => (
          <div key={store.id} className="store-card">
            <h5>{store.name}</h5>
            <p>{store.layout}</p>
            <p>{store.location}</p>
            <p>{store.contact}</p>
          </div>
        ))}
      </div>
      <h3 className='country-title'>Canada</h3>
      <div className="store-container">
        {Canada.map(store => (
          <div key={store.id} className="store-card">
            <h5>{store.name}</h5>
            <p>{store.layout}</p>
            <p>{store.location}</p>
            <p>{store.contact}</p>
          </div>
        ))}
      </div>
      <h3 className='country-title'>United Kingdom</h3>
      <div className="store-container">
        {UnitedKingdom.map(store => (
          <div key={store.id} className="store-card">
            <h5>{store.name}</h5>
            <p>{store.layout}</p>
            <p>{store.location}</p>
            <p>{store.contact}</p>
          </div>
        ))}
      </div>
      <h3 className='country-title'>Australia</h3>
      <div className="store-container">
        {Australia.map(store => (
          <div key={store.id} className="store-card">
            <h5>{store.name}</h5>
            <p>{store.layout}</p>
            <p>{store.location}</p>
            <p>{store.contact}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stores
