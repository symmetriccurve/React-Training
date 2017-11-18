
export function getProducts(){
    return dispatch => {
        fetch('https://api.myjson.com/bins/11j4n3')
       .then((response)=>{
          return response.json()
        })
       .then((json)=>{
           debugger
       })
       .catch((error)=>{console.log(error)})
    }
}