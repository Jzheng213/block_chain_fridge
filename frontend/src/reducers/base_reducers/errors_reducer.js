import { combineReducers } from 'redux';

import sessions from '../sessions/session_errors_reducer';
import users from '../users/user_errors_reducer';

export default combineReducers({
  sessions,
  users
});
