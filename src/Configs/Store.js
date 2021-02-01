import Reducers from './Reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)(createStore);
const store = createStoreWithMiddleware(Reducers);

export default store;