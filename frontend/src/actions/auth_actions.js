import * as APIUtil from '../util/auth_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_SIGNUP_ERRORS = 'RECEIVE_SIGNUP_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const receiveSignupErrors = errors => ({
  type: RECEIVE_SIGNUP_ERRORS,
  errors,
});

export const signup = user => dispatch => {

  APIUtil.signup(user).then(user => {
    return dispatch(receiveCurrentUser(user));
  }, err => {
    return dispatch(receiveSignupErrors(err.responseText))
  })
};

export const login = user => dispatch => {
  APIUtil.login(user).then(user => {
    return dispatch(receiveCurrentUser(user))
  }, err => (
    dispatch(receiveSessionErrors(err.responseText))
  ))
};

export const logout = () => dispatch => (
  APIUtil.logout().then(() => (
    dispatch(receiveCurrentUser({ id: null }))
  ))
);

export const fetchCurrentUser = () => dispatch => (
  APIUtil.fetchCurrentUser().then(user => (
    dispatch(receiveCurrentUser(user) || null)
  ), err => (
    dispatch(receiveSessionErrors(err.responseText))
  ))
);
