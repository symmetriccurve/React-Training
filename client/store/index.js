import { createStore } from 'redux'
import rootReducer from '../reducers'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
/* https://github.com/zalmoxisus/redux-devtools-extension*/
export default store



/*
  first breakdown the react state
    create a reducer out of each piece of state


reducer
reducer
reducer
reducer
reducer
reducer
reducer    ====> rootReducer =====> Create a store out of root Reducers
reducer
reducer
reducer
reducer
reducer
reducer

*/
