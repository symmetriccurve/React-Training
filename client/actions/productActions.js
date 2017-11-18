
export function getProducts(){
    return dispatch => {

        // Start the Spinner before making the API Call
        dispatch(togglePending())

        fetch('https://api.myjson.com/bins/11j4n3')
        .then((response)=>{
            return response.json()
            })
        .then((json)=>{

            // Update the reducer with products that are fetched from API 
             dispatch(updateProducts(json))

            // Stop the Spinner after the API is resolved
             dispatch(togglePending())

        })
        .catch((error)=>{console.log(error)})
    }
}


export function togglePending(){
    return { type:'TOGGLE_PENDING' }
}

export function updateProducts(products){
    return { type:'API_RESPONSE_SUCCESS', products : products }
}