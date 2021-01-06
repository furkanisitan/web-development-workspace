import { ADD_TO_CART, GET_CART, REMOVE_FROM_CART } from './types';
import Storage from 'utils/localStorage';

const localStorageKey = 'cart';

export function getCart() {
  const cart = Storage.getArray(localStorageKey);
  return { type: GET_CART, payload: cart };
}

export function addProductToCart(product) {
  return { type: ADD_TO_CART, payload: product };
}

export function removeProductFromCart(product) {
  return { type: REMOVE_FROM_CART, payload: product };
}
