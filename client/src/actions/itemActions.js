import axios from 'axios';
import { GET_ITEMS, GET_CART_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, DELETE_CART_ITEMS } from './types';

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/items').then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const getCartItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/items/cartItems').then(res =>
    dispatch({
      type: GET_CART_ITEMS,
      payload: res.data
    })
  );
};

export const addItem = item => dispatch => {
  axios.post('/api/items/', item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const addCartItem = item => dispatch => {
  axios.post('/api/items/cartItems', item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const deleteCartItem = id => dispatch => {
  axios.delete(`/api/items/cartItems/${id}`).then(res =>
    dispatch({
      type: DELETE_CART_ITEMS,
      payload: id
    })
  );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
