import { GET_CATEGORIES_SUCCESS, SET_CURRENT_CATEGORY } from './types';

export function setCurrentCategory(category) {
  return { type: SET_CURRENT_CATEGORY, payload: category };
}

export function getCategories() {
  return async (dispatch) => {
    const result = await (await fetch('http://localhost:3000/categories')).json();

    dispatch({
      type: GET_CATEGORIES_SUCCESS,
      payload: [{ id: -1, categoryName: 'All Products' }].concat(result),
    });
  };
}
