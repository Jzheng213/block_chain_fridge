import merge from 'lodash/merge';

import { RECEIVE_SIGNUP_ERRORS } from '../../actions/auth_actions';

const signUpError = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SIGNUP_ERRORS:
      return merge({}, state, { message: action.errors });
    default:
      return state;
  }
};

export default signUpError
