import * as types from './action-types';
import { doGet } from '../commons/Connection';
import * as services from '../commons/services';

const receiveAllCharacters = json => ({
  type: types.END_GET_CHARACTERS,
  json: json
});

export const getAllCharacters = params => {
  return dispatch => {
    doGet(services.GET_ALL_CHARACTERS, params)
      .then(json =>  dispatch(receiveAllCharacters(json, types.END_GET_CHARACTERS)))
      .catch(err => window.console.error(err));
  };
};
