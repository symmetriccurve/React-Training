import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import productReducer from './productReducer'
/* Import any more reducers here */

export default combineReducers({
    cart : cartReducer,
    products: productReducer
})