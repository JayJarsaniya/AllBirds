import { combineReducers } from 'redux';
import * as types from './actionTypes';

const updateLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const productInitialState = {
  products: [],
  loading: false,
  error: null,
};

const productReducer = (state = productInitialState, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case types.FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case types.FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Cart Reducer
const cartInitialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartReducer = (state = cartInitialState, action) => {
  let updatedCart;
  switch (action.type) {
    case types.ADD_TO_CART:
      const existingIndex = state.cart.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor === action.payload.selectedColor
      );
      if (existingIndex !== -1) {
        updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity += 1;
      } else {
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      updateLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };

    case types.REMOVE_FROM_CART:
      updatedCart = state.cart.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.selectedSize !== action.payload.selectedSize ||
          item.selectedColor !== action.payload.selectedColor
      );
      updateLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };

    case types.INCREMENT_QUANTITY:
      updatedCart = state.cart.map((item) =>
        item.id === action.payload.id &&
        item.selectedSize === action.payload.selectedSize &&
        item.selectedColor === action.payload.selectedColor
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      updateLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };

    case types.DECREMENT_QUANTITY:
      updatedCart = state.cart
        .map((item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor === action.payload.selectedColor &&
          item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      updateLocalStorage(updatedCart);
      return { ...state, cart: updatedCart };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
