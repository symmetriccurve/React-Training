import { combineReducers } from 'redux'

//Get all reducers together
import dataReducer from './dataReducer'
import uiReducer from './uiReducer'

//Combine all the reducers to form a state

export default combineReducers({
    dataReducer: dataReducer,
    uiReducer: uiReducer
})

/*  Also I can export using
    const rootReducers = combineReducers({
        dataReducer: dataReducer,
        uiReducer: uiReducer
    })

module.exoprts = rootReducers */
