var defaultState = {
  products: [],
  favorites: [],
  cartCount: 0
}

function dataReducer(state = defaultState,action){
    switch (action.type) {
      case 'userAddedItemToCart':
          return Object.assign(
                {},
                state,
                { cartCount: state.cartCount + 1 }
              )
        break;
      default:
    }

  return state
}

module.exports = dataReducer
