var defaultState = {
    cart: [],
    cartCount: []
}

function cartReducer( state = defaultState, action ){
    switch(action.type){
        case 'addToCart':
        var newState =  Object.assign(
                        {},
                        state,
                        {
                            cart: state.cart.concat(action.product)
                        })

          return newState              
        break
        case 'removeFromCart':
        
            var newCart = []

            for(var i in state.cart){
                if(action.product != state.cart[i]){
                    newCart.push(state.cart[i])
                }
            } 

            var newState =  Object.assign(
                    {},
                    state,
                    {
                        cart: newCart
                    })

            return newState
            break
        default:                
       }


    return state
}

module.exports = cartReducer

