import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';

const middleware = [thunkMiddleware];
export default initialState =>
  createStore(rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ));
