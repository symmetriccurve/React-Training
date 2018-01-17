var anything = {
  isOpenForSale: false,
  isDiscountAvailable: false
}
/* reducers must be pure functions */
/* take a copy of state */

function uiReducer(state = anything,action){
  return state
}

module.exports = uiReducer
