import Axios from 'axios';
import CryptoJS from 'crypto-js';
import { stringify } from 'querystring';

const BASE_URL = 'http://gateway.marvel.com';
const API_KEY_VALUE = 'a48c79013f1b58d55d9cec2e8274b0b6';
const PRIVATE_KEY = '8ebf9b0625bb429687b447a4aed06cf1542b0332';

const getTokenObject = ts => ({
  ts: ts,
  apikey: API_KEY_VALUE,
  hash: CryptoJS.MD5(ts + PRIVATE_KEY + API_KEY_VALUE).toString()
});

const doGet = (url, params) => (
  new Promise((resolve, reject) => {
    Axios.get(`${BASE_URL}${url}?${stringify(getTokenObject(new Date().getTime()))}&${stringify(params)}`)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(({ response }) => {
        reject(response)
      });
  })
);

export { doGet };