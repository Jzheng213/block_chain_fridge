import merge from 'lodash/merge';

import { RECEIVE_INGREDIENTS, TOGGLE_SEARCH_QUEUED } from '../../actions/ingredient_actions';

const ingredientReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_INGREDIENTS:
      return merge({}, state, { list: action.ingredients });
    case TOGGLE_SEARCH_QUEUED:
      return merge({}, state, { toggleSearchQueued: action.searchQueued });
    default:
      return state;
  }
};
export default ingredientReducer;
