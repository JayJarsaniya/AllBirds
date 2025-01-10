import axios from 'axios';
import * as types from './actionTypes';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '/',
});

// Product Actions
export const fetchProductsRequest = () => ({ type: types.FETCH_PRODUCTS_REQUEST });
export const fetchProductsSuccess = (products) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});
export const fetchProductsFailure = (error) => ({
  type: types.FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const addToCart = (product) => ({ type: types.ADD_TO_CART, payload: product });
export const removeFromCart = (productId, selectedSize, selectedColor) => ({
  type: types.REMOVE_FROM_CART,
  payload: { id: productId, selectedSize, selectedColor },
});
export const incrementQuantity = (productId, selectedSize, selectedColor) => ({
  type: types.INCREMENT_QUANTITY,
  payload: { id: productId, selectedSize, selectedColor },
});
export const decrementQuantity = (productId, selectedSize, selectedColor) => ({
  type: types.DECREMENT_QUANTITY,
  payload: { id: productId, selectedSize, selectedColor },
});

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsRequest());
  try {
    const response = await apiClient.get('https://react-project-1pel.onrender.com/products');
    dispatch(fetchProductsSuccess(response.data || []));
  } catch (error) {
    const errorMessage = error.response ? error.response.data.message : error.message;
    dispatch(fetchProductsFailure(errorMessage));
  }
};
