import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import sampleReducer from './sampleReducer'

export default combineReducers({
    dataReducer: dataReducer,
    sampleReducer: sampleReducer
})

    //Add any more reducers here


