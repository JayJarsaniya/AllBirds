import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../pages/redux/productAction';
import ProductDisplay from './Homepage/ProductDisplay';
import { Link } from 'react-router-dom';
import './style/Home.css'
import Slider from '../pages/Homepage/Slider'
import Subhome from './Homepage/Subhome';
import Bestsellers from './Homepage/Bestsellers';
import Giftcard from './Homepage/Giftcard';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts()); 
  }, [dispatch]);

  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="shorting">
        <Link className="nav-link1" to="/men">Men's Shoes</Link>
        <Link className="nav-link1" to="/women">Women's Shoes</Link>
        <Link className="nav-link1" to="/arrivals">New Arrivals</Link>
      </div>
      <Slider />
      <Subhome />
      <Bestsellers products={products}/>
      <Giftcard/>
      {/* <ProductDisplay products={products} /> */}
    </div>
  );
};

export default Home;
