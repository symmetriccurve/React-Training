

export function updateSearch(text) {
  return { type: 'search', text }
}

export function addToCart(item) {
    //debugger
  return { type: 'addToCart', item }
}

export function fetchData(){
  return dispatch => {
       fetch('https://api.myjson.com/bins/apf1z')
        .then(function(res){
            return res.json()
        })
        .then(function(jsonResponse){
            dispatch({ type: 'APIResponse', response: jsonResponse });
        })
        .catch(function(error){
            console.log("That's a Error Abhinav",error)
        })
  }
}