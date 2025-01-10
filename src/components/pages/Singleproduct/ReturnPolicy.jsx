import React from 'react'
import { Link } from 'react-router-dom'

const ReturnPolicy = () => {
    return (
        <React.Fragment>
            <div className="BrandTenets">
                <div className="BrandTenets-card">
                    <h5>Free Shipping</h5>
                    <p>on orders over $75</p>
                </div>
                <div className="BrandTenets-border"></div>
                <div className="BrandTenets-card">
                    <h5>Easy Returns</h5>
                    <p>within 30 days</p>
                </div>
                <div className="BrandTenets-border"></div>
                <div className="BrandTenets-card">
                    <h5>Visit Us</h5>
                    <Link target='_balnk' to='/stores'>Find a store near you</Link>
                </div>
            </div>
            <h3 className='approach-headding'>The Allbirds Approach</h3>
            <div className="approach-section">
                <div className="approach-card">
                    <h5>Wear-All-Day Comfort</h5>
                    <p>Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.</p>
                </div>
                <div className="approach-card">
                    <h5>Sustainability In Every Step</h5>
                    <p>From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now.</p>
                </div>
                <div className="approach-card">
                    <h5>Materials From The Earth</h5>
                    <p>We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugar cane. They're soft, breathable, and better for the planet—win, win, win.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ReturnPolicy