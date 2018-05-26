export const RECEIVE_INGREDIENTS = 'RECEIVE_INGREDIENTS';
export const TOGGLE_SEARCH_QUEUED = 'TOGGLE_SEARCH_QUEUED';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';

export const recieveIngredients = ingredients => (
  {
    type: RECEIVE_INGREDIENTS,
    ingredients,
  }
);

export const removeIngredient = index => (
  {
    type: REMOVE_INGREDIENT,
    index,
  }
);

export const toggleSearchQueued = searchQueued => (
  {
    type: TOGGLE_SEARCH_QUEUED,
    searchQueued,
  }
);
