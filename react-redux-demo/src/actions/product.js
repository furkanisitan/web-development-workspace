import { GET_PRODUCTS_SUCCESS } from './types';

export function getProducts(categoryId) {
  return async (dispatch) => {
    const url =
      categoryId > 0
        ? `http://localhost:3000/categories/${categoryId}/products`
        : 'http://localhost:3000/products';
    const result = await (await fetch(url)).json();
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: result });
  };
}
