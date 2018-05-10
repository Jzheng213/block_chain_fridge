import merge from 'lodash/merge';

import { RECEIVE_SESSION_ERRORS } from '../../actions/auth_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/auth_actions';

const sessionError = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state, { message: action.errors });
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { message: '' });
    default:
      return state;
  }
};

export default sessionError;
