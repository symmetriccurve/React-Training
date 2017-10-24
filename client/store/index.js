import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);
console.log("store",store.getState())

export default store;