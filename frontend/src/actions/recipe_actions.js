import * as APIUtil from '../util/recipe_api_util';

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';

export const receiveRecipes = payload => ({
  type: RECEIVE_RECIPES,
  payload,
});

export const searchRecipesByIngredients = (ingredients) => dispatch => (
  APIUtil.fetchRecipesByIngredients(ingredients).then(payload => (
    dispatch(receiveRecipes(payload))
  ))
);
