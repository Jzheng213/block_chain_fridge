import merge from 'lodash/merge';

import { RECEIVE_USER, RECEIVE_USERS } from '../../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/auth_actions';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    case RECEIVE_CURRENT_USER:
      if (action.currentUser.id) {
        return merge({}, state, { [action.currentUser.id]: action.currentUser });
      }
      return state;
    default:
      return state;
  }
};

export default userReducer;
