export const SET_CLIENT = 'setClient';

export function setClient(client, accessToken) {
  return {
    type: SET_CLIENT,
    payload: {client, accessToken}
  };
}
