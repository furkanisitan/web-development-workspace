import initialState from './initialState';
import { ADD_TO_CART, GET_CART, REMOVE_FROM_CART } from 'actions/types';
import Storage from 'utils/localStorage';

const localStorageKey = 'cart';

export function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case GET_CART:
      return action.payload;

    case ADD_TO_CART: {
      const addedCart = state.slice();
      const cartItem = addedCart.find((x) => x.product.id === action.payload.id);
      cartItem
        ? (cartItem.quantity += 1)
        : addedCart.push({ product: action.payload, quantity: 1 });
      Storage.setArray(localStorageKey, addedCart);
      return addedCart;
    }

    case REMOVE_FROM_CART: {
      const removedCart = state.filter((x) => x.product.id !== action.payload.id);
      Storage.setArray(localStorageKey, removedCart);
      return removedCart;
    }

    default:
      return state;
  }
}
