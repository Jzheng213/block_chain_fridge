import merge from 'lodash/merge';
import { combineReducers } from 'redux';

import { RECEIVE_CURRENT_USER } from '../../actions/auth_actions';

const currentUser = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { id: action.currentUser.id });
    default:
      return state;
  }
};

export default combineReducers({ currentUser });
