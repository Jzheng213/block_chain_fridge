import { combineReducers } from 'redux';

import users from '../users/users_reducer';
import ingredients from '../ingredients/ingredients_reducer';

export default combineReducers({
  users,
  ingredients,
});
