var defaultState = {
    cart: [],
    cartCount: []
}

function cartReducer( state = defaultState, action ){  
    debugger
    if(action.type == 'addToCart'){
         return Object.assign({},{ cart: state.cart.concat( action.product) } ) 
    }

    return state
}

module.exports = cartReducer

