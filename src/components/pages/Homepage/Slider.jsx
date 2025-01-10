import React from 'react'
import { Link } from 'react-router-dom'
import '../style/slider.css';
const Slider = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1920/cms/4vti4US3VPAihV0I6l8Ina/03209e4bdd0d6e1908620e91f2380fa3/24Q4_Corduroy_Site_HomepageHero_Desktop_2880x1245_EUUK.png" class="d-block w-100" alt="..." />
                    <div className="slider d-none d-md-block">
                        <div class="main-slider">
                            <h1>Timeless</h1>
                            <p>BY NATURE</p>
                        </div>
                        <div className='main-slider1'>
                            <p>The new Corduroy Collection, tried-and-true texture made with organic cotton.</p>
                            <div className="button">
                                <Link to='/men'><button>Shop men</button></Link>
                                <Link to='/women'><button className='ms-3'>Shop women</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1728/cms/CV5u0W5U1uvj9JJ7G70GZ/5f514eca3eb6d0faa3c496f7c547b357/24Q4_DecemberBAU_Site_HomepageHero_Desktop-03_2880x1245.png" class="d-block w-100" alt="..." />
                    <div className="slider  d-none d-md-block">
                        <div class="main-slider">
                            <h1>For Your <br /> Nice List</h1>
                        </div>
                        <div className='main-slider1'>
                            <div className="button">
                                <Link to='/men'><button>Shop men</button></Link>
                                <Link to='/women'><button className='ms-3'>Shop women</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider