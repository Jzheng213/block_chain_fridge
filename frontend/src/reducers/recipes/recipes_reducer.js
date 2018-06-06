import { merge } from 'lodash';
import { RECEIVE_RECIPES } from '../../actions/recipe_actions';
import { asArray } from '../selectors';

const recipeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RECIPES:
      return merge({}, state, action.payload);
    default:
      return state;
  }
};

export default recipeReducer;
