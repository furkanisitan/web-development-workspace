import { combineReducers } from 'redux';
import * as cartReducers from './cart';
import * as categoryReducers from './category';
import * as productReducers from './product';

export const initialState = {
  categories: [],
  currentCategory: { id: -1, categoryName: 'All Products' },
  products: [],
  savedProduct: {},
  cart: [],
};

export default combineReducers({
  ...categoryReducers,
  ...productReducers,
  ...cartReducers,
});
