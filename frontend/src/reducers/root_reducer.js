import { combineReducers } from 'redux';

import entities from './base_reducers/entities_reducer';
import session from './base_reducers/session_reducer';
// import ui from './base_reducers/ui_reducer';
// import errors from './base_reducers/errors_reducer';

const rootReducer = combineReducers({
  entities,
  session,
});

export default rootReducer;
