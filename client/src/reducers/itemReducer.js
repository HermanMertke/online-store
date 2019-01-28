import {
  GET_ITEMS,
  GET_CART_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  DELETE_CART_ITEMS
} from '../actions/types';

const initialState = {
  items: [],
  cartItems: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };
    case GET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
        loading: false
      };  
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case DELETE_CART_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item._id !== action.payload)
      }; 
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
