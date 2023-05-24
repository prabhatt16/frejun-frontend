import {combineReducers, legacy_createStore} from 'redux';

import StateReducer from './stateReducer';

const AppReducers = combineReducers({
  StateReducer,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
};


export default rootReducer;
