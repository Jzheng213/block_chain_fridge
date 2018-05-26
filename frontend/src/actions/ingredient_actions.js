export const RECEIVE_INGREDIENTS = 'RECEIVE_INGREDIENTS';
export const TOGGLE_SEARCH_QUEUED = 'TOGGLE_SEARCH_QUEUED';

export const recieveIngredients = ingredients => (
  {
    type: RECEIVE_INGREDIENTS,
    ingredients,
  }
);

export const toggleSearchQueued = searchQueued => (
  {
    type: TOGGLE_SEARCH_QUEUED,
    searchQueued,
  }
);
