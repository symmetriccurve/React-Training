import { createStore } from 'redux'

import rootReducer from '../reducers'

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store


/*

reducer
reducer
reducer
reducer
reducer   ==> RootReducer => CreateStore(RootReducer) => Store
reducer
reducer
reducer
reducer 

*/
