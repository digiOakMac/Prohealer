import { combineReducers } from 'redux';

import todosReducer from '../features/todos/reducer';

const rootReducer = combineReducers({
  app: todosReducer
});

export default rootReducer;
