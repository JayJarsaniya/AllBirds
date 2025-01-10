import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import '../components/pages/style/Navbar.css';

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [user, setUser] = useState(null);

  const auth = getAuth();
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          displayName: currentUser.displayName || currentUser.email,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        alert('Successfully logged out');
        setUser(null);
        setShowUserPopup(false);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const togglePopup = () => {
    setShowUserPopup((prev) => !prev);
  };

  const handleCartClick = () => {
    if (user) {
      navigate('/cart');
    } else {
      alert('Please log in to access your cart.');
      navigate('/user'); 
    }
  };

  const totalItems = cart.length;

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/men">Men</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/women">Women</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/socks">Socks</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sale">Sale</Link></li>
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 home-page">
            <Link to="/">allbirds</Link>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link mt-lg-0 mt-5" to="/return">RERUN</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/stores">STORES</Link></li>
            <div className="icon d-flex position-relative">
            <li className="nav-item">
                <Link className="nav-link" to="/filter">
                <i class="fa-solid fa-magnifying-glass"></i>
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link user-icon" onClick={togglePopup}>
                  <i className="fa-regular fa-user"></i>
                </span>
                {showUserPopup && (
                  <div className="user-popup">
                    {user ? (
                      <>
                        <p className="username">Welcome, {user.displayName}</p>
                        <button
                          className="btn btn-primary logout-button"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <Link to="/user">
                        <button className="btn btn-primary w-100">
                          Login
                        </button>
                      </Link>
                    )}
                  </div>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/help">
                  <i className="fa-regular fa-circle-question"></i>
                </Link>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  onClick={handleCartClick}
                  style={{ cursor: 'pointer' }}
                >
                  <i className="fa-solid fa-cart-shopping fs-5 text-black"></i>
                  {user && (
                    <span className="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-white text-black">
                      {totalItems}
                      <span className="visually-hidden">items in cart</span>
                    </span>
                  )}
                </span>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
