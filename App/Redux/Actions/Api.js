import { CALL_API, getJSON } from 'redux-api-middleware';
import qs from 'qs';
import {setClient} from './User'
import Reactotron from 'reactotron-react-native'

const host = getHost();

function getHost() {
  if (process.env.NODE_ENV == 'test') {
    return 'http://testapi.com/api';
  }

  const port = 3000;
  const domain = '52.235.47.173'

  return (
    'http://' +
    (port ? domain + ':' + port + '/api' : domain + '/api')
  );
}


function createApiActions(baseName) {
  return {
    REQUEST: 'api/' + baseName + '/request',
    SUCCESS: 'api/' + baseName + '/success',
    FAILURE: 'api/' + baseName + '/failure'
  };
}



export const SIGNIN = createApiActions('auth/signin');

export function signIn(email, password) {
  const options = '?' + qs.stringify({email, password});
  return async function(dispatch) {
    const actionResponse = await dispatch({
      [CALL_API]: {
        endpoint: host + '/auth/sign_in' + options,
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        types: [
          SIGNIN.REQUEST,
          {
            type: SIGNIN.SUCCESS,
            payload: (action, state, res) => {
              return getJSON(res).then(json => {
                const accessToken = res.headers.get('access-token');
                const client = res.headers.get('client');
                return Object.assign(json,{client,accessToken});
              });
            }
          },
          SIGNIN.FAILURE
        ]
      }
    });
    if (actionResponse.error) {
      return;
    }
    dispatch(setClient(
      actionResponse.payload.client,
      actionResponse.payload.accessToken
    ));
  };
}

export const SIGNUP = createApiActions('auth/signup');

export function signUp(email, password, name) {
  return async function(dispatch) {
    const actionResponse = await dispatch({
      [CALL_API]: {
        endpoint: host + '/auth',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        types: [SIGNUP.REQUEST, SIGNUP.SUCCESS, SIGNUP.FAILURE],
        body: JSON.stringify({
          email: email,
          password: password,
          name: name
        })
      }
    });
    if (actionResponse.error) {
      return;
    }
    dispatch(signIn(email, password));
  };
}
