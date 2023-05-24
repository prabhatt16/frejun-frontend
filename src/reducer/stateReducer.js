import * as Actions from '../actions/index';

const initialState = {
  crrUserId: null,
  usersData: null,
  userData: null,
  age: null,
  mobile: null,
  country: null,
};

const StateReducer = (state = initialState, action) => {
  const newState = {...state};
  switch (action.type) {
    case Actions.GET_USER_DETAILS:
      newState.usersData = action.payload;
      console.log('set users data ' + action.payload);
      return newState;
    case Actions.CURR_USER_ID:
      newState.crrUserId = action.payload;
      console.log('set user id ' + action.payload);
      return newState;
    case Actions.GET_USER_DATA:
      newState.userData = action.payload;
      console.log('set user data ' + action.payload);
      return newState;
    default:
      return state;
  }
};
export default StateReducer;
