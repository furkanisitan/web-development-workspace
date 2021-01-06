import { GET_PRODUCTS_SUCCESS } from 'actions/types';
import { initialState } from 'reducers';

export function getProductsReducer(state = initialState.products, action) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
