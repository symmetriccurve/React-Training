var anything = {
  isOpenForSale: true,
  isDiscountAvailable: false
}
/* reducers must be pure functions */
/* take a copy of state */

function uiReducer(state = anything,action){
    if(action.type == 'isNotAvailable') {
      alert('The item you selected is out of stock')
    }
  return state
}

module.exports = uiReducer
