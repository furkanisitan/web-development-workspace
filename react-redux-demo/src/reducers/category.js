import initialState from './initialState';
import { GET_CATEGORIES_SUCCESS, SET_CURRENT_CATEGORY } from 'actions/types';

export function setCurrentCategoryReducer(state = initialState.currentCategory, action) {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}

export function getCategoriesReducer(state = initialState.categories, action) {
  switch (action.type) {
    case GET_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
