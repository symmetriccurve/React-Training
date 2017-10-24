var defaulteState  = {
  results: [],
  selectedItems: [],
  offset: 25,
  focus: false,
  query: ''
}

function dataReducer(state = defaulteState, action) {
      return defaulteState;
}

module.exports = dataReducer