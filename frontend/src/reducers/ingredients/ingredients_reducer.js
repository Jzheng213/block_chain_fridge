import merge from 'lodash/merge';

import { RECEIVE_INGREDIENTS, REMOVE_INGREDIENT, TOGGLE_SEARCH_QUEUED } from '../../actions/ingredient_actions';

const ingredientReducer = (state = {}, action) => {

  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_INGREDIENTS:
      return merge({}, state, { list: action.ingredients });
    case REMOVE_INGREDIENT:
      const newState = state.list.slice();
      newState.splice(action.index, 1);
      return merge({}, { list: newState });
    case TOGGLE_SEARCH_QUEUED:
      return merge({}, state, { searchQueued: action.searchQueued });
    default:
      return state;
  }
};
export default ingredientReducer;
