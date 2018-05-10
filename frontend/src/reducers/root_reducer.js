import { combineReducers } from 'redux';

import entities from './base_reducers/entities_reducer';
import session from './sessions/session_reducer';
import errors from './base_reducers/errors_reducer';
// import ui from './base_reducers/ui_reducer';

const rootReducer = combineReducers({
  entities,
  session,
  errors,
});

export default rootReducer;
