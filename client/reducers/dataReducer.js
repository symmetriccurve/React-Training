var defaultState = {
    results : [],
    cart: [],
    filteredResults: [],
    searchString: ''
}

function dataReducer(newState = defaultState,action){
    
    switch(action.type){
        case 'search':
            return Object.assign({},newState,{searchString:action.text})
        case 'addToCart':
            //debugger
            var holder = Object.assign({},newState,{cart:newState.cart.concat(action.item)})
            return holder
        case 'APIResponse':
//debugger
            return Object.assign({},newState,{results: action.response})
    }
   // var  = defaultState
    /* 
        SwitchCases that will Change the state and give new State
    */
    return newState
}

module.exports = dataReducer