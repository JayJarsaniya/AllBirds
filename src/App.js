import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Men from './components/pages/Men';
import Women from './components/pages/Women';
import Socks from './components/pages/Socks';
import Sale from './components/pages/Sale';
import Home from './components/pages/Home';
import Filter from './components/pages/Filter';
import User from './components/pages/User';
import Help from './components/pages/Help';
import Cart from './components/pages/Cart';
import Stores from './components/pages/Stores';
import Return from './components/pages/Return';
import Arrivals from './components/pages/Arrivals';
import SingleProduct from './components/pages/Singleproduct';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './components/pages/redux/productAction';
import Productpage from './components/Productpage';
import MenUnder100 from './components/pages/Homepage/MenUnder100';
import WomenUnder100 from './components/pages/Homepage/WomenUnder100';
import Footer from './components/Footer';
import Payment from './components/pages/Payment';
import GiftCardPage from './components/pages/GiftCardPage';
// import ScrollToTop from './components/ScrollToTop';

function App() {
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
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/product/:id" element={<SingleProduct products={products} />} />
          <Route path='/men' element={<Men products={products} />} />
          <Route path='/women' element={<Women products={products} />} />
          <Route path='/socks' element={<Socks products={products} />} />
          <Route path='/sale' element={<Sale products={products} />} />
          <Route path='/return' element={<Return />} />
          <Route path='/stores' element={<Stores />} />
          <Route path='/filter' element={<Filter products={products} />} />
          <Route path='/user' element={<User />} />
          <Route path='/help' element={<Help />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/arrivals' element={<Arrivals products={products} />} />
          <Route path='/arrivals' element={<Productpage product={products} />} />
          <Route path='/men-discount' element={<MenUnder100 product={products} />} />
          <Route path='/women-discount' element={<WomenUnder100 product={products} />} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/gift-card' element={<GiftCardPage/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
