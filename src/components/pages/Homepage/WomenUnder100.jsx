import React from 'react';
import Productpage from '../../Productpage';

const WomenUnder100 = ({ product }) => {
    const filterproducts = product.filter((item) => item.category === 'women' && item.price < 100);

    return (
        <React.Fragment>
            <div className="discount-main">
                <h5>Up To 50% Off</h5>
                <p>Your faves on sale? Say less. Get ‘em before they're gone.</p>
            </div>
            <div className='product-grid-container-socks mt-5'>

                {
                    filterproducts.map((product, index) => (
                        <Productpage key={product.id} product={product} />
                    ))
                }
            </div>
        </React.Fragment>
    );
};

export default WomenUnder100;
