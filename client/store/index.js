import { createStore } from 'redux'

import rootReducer from '../reducers'

const store = createStore(rootReducer);

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
