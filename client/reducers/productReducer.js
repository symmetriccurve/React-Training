var defaultState = {
        products: [],
        selectedProduct : '',
        isPending: false
}

function productReducer( state = defaultState, action ){  
    switch(action.type){

        // Start and stop the Spinner 
        case 'TOGGLE_PENDING' :
            return Object.assign({}, state, { isPending: !state.isPending })
        break

        // Successful API response 
        case 'API_RESPONSE_SUCCESS':
            return Object.assign({}, state, { products: action.products }) 
        break

        default:     
    }
    return state 
}

module.exports = productReducer