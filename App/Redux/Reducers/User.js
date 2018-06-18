import { combineReducers } from 'redux';

import { SET_CLIENT } from '../Actions/User';

const current = (state = {}, action) => {
  switch (action.type) {
    case SET_CLIENT:
      return Object.assign({client: action.payload.client, accessToken: action.payload.accessToken});
    default:
      return state;
  }
}

const userReducer = combineReducers({
  current
});

export default userReducer;

