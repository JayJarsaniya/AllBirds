import React from 'react';
import { Link } from 'react-router-dom';
import './pages/style/Footer.css';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
    return (
        
        <footer className="footer">
            <div className="footer-top">
                <div className="newsletter">
                    <p>Enter your email to stay in touch!</p>
                    <div className="newsletter-input">
                        <input type="email" placeholder="Your Email" />
                        <button>SIGN UP</button>
                    </div>
                </div>
            </div>

            <div className="footer-content">
                <div className="footer-section">
                    <h4>HELP</h4>
                    <ul>
                        <li>1-888-963-8944</li>
                        <li>1-814-251-9966 (Text)</li>
                        <li><a href="#">help@allbirds.com</a></li>
                        <li><a href="/return">Returns/Exchanges</a></li>
                        <li><a href="/help">FAQ/Contact Us</a></li>
                        <li><a href="#">Afterpay</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>SHOP</h4>
                    <ul>
                        <li><Link to="/men">Men's Shoes</Link></li>
                        <li><Link to="/women">Women's Shoes</Link></li>
                        <li><Link to="/arrivals">Men's Apparel</Link></li>
                        <li><Link to="/arrivals">Women's Apparel</Link></li>
                        <li><Link to="/socks">Socks</Link></li>
                        <li><Link to="/gift-cards">Gift Cards</Link></li>
                        <li><Link to="#">Refer a Friend</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>COMPANY</h4>
                    <ul>
                        <li><a href="/stores">Our Stores</a></li>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Our Materials</a></li>
                        <li><a href="#">Sustainability</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Our Blog</a></li>
                        <div className="footer-flag-section">
                            <img src="//cdn.allbirds.com/image/upload/q_auto/cms/3ohqY3WWyehlkYpVi815p9/6f7fbf2f1e4a08abc8da4788a95c2376/flag-us.svg" alt="" />
                            <img src="//cdn.allbirds.com/image/upload/q_auto/cms/mpzswQHoLPhzgFkXpcZ7P/eba356c7c7929352d5d3eea6999f5ad3/flag-ca.svg" alt="" />
                            <img src="//cdn.allbirds.com/image/upload/q_auto/cms/22gqFXi2QPoT2IhEpBuzOi/d01a77d603e94a10b8a690deded124f7/flag-nz.svg" alt="" />
                            <img src="//cdn.allbirds.com/image/upload/q_auto/cms/6FnrOphj9NsjD38uREtsBn/cbf3c42e92a6c0628da4462b04e92e2c/flag-au.svg" alt="" />
                            <img src="//cdn.allbirds.com/image/upload/q_auto/cms/5OVl6dmwlwOJPrg5F3Ot1s/e9679772ddd64de49cd96cbd4a819743/flag-uk.svg" alt="" />
                            <img src="//cdn.allbirds.com/image/upload/q_auto/cms/2bpMfDa3leuCSpX1lLXKvB/19c74fd77f850e29497ad82d91e83292/flag-cn.svg" alt="" />
                            <img src="//cdn.allbirds.com/image/upload/q_auto/cms/5DEtULZUsBHTJp8aXcaOIc/c9d3ff14bde3bf45235f906dfb63f649/method-draw-image.svg" alt="" />
                            <img src="//cdn.allbirds.com/image/upload/q_auto/cms/3TWBjQxibzqkiXua4hrmCu/1730ec7122e70b26bd29d972733a8190/Japan-Flag.svg" alt="" />
                            <img src="//cdn.allbirds.com/image/upload/q_auto/cms/lqp21Rk7GI8HTImpSTOip/cdb1a8e18b337c27e91c18b82dd93ddf/South-Korea-Flag.svg" alt="" />
                            <img src="//cdn.allbirds.com/image/upload/q_auto/cms/Lb3m6t93QJpYvyhGFgnqz/d139546a41d2588d3cf6654e3b38449a/AE-outline.svg" alt="" />
                        </div>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="social-media">
                    <h6>FOLLOW THE FLOCK</h6>
                    <p>Exclusive offers, a heads up on new things, and sightings of Allbirds in the wild. Oh, we have cute sheep, too. #allbirds</p>
                    <div className="icons">
                        <a href="https://www.instagram.com/allbirds/#"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.tiktok.com/@weareallbirds"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="https://www.instagram.com/allbirds/#"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.facebook.com/weareallbirds"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.youtube.com/channel/UCnGErLCau5qNJ0Xwe6uEyTw"><i className="fab fa-youtube"></i></a>
                        <a href="https://in.pinterest.com/weareallbirds/"><i class="fa-brands fa-pinterest"></i></a>
                    </div>
                </div>
                <div className="legal">
                    <p>&copy; 2024 Allbirds, Inc. All Rights Reserved. <a href="#">Terms</a>, <a href="#">Privacy</a> &amp; Accessibility</p>
                    <a href="#">Do Not Sell My Personal Information</a>
                </div>
            </div>
            <ScrollToTop/>
        </footer>
    );
};

export default Footer;
