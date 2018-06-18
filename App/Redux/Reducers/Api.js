import { combineReducers } from 'redux';
import * as api from '../Actions/Api';

const signUp = (state = {}, action) => {
  switch (action.type) {
    case api.SIGNUP.REQUEST:
      return Object.assign({
        loading: true,
        loaded: false,
        failed: false
      });
    case api.SIGNUP.SUCCESS:
      return Object.assign(
        {
          loading: false,
          loaded: true,
          failed: false,
        },
        action.payload
      );

    case api.SIGNUP.FAILURE:
      return Object.assign(
        {
          loading: false,
          loaded: false,
          failed: true,
        },
        action.payload
      );
    default:
      return state;
  }
}

const signIn = (state = {}, action) => {
  switch (action.type) {
    case api.SIGNIN.REQUEST:
      return Object.assign({ loading: true, loaded: false, failed: false });
    case api.SIGNIN.SUCCESS:
      return Object.assign(
        {
          loading: false,
          loaded: true,
          failed: false,
        },
        action.payload
      );

    case api.SIGNUP.FAILURE:
      return Object.assign(
        {
          loading: false,
          loaded: false,
          failed: true,
        },
        action.payload
      );
    default:
      return state;
  }
}

const apiReducer = combineReducers({
  signUp,
  signIn
});

export default apiReducer;
