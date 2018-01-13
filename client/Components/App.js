import React, { Component } from 'react';
require('./App.css')

import ProductCard from './ProductCard'

class App extends Component {

    constructor(){ // 1 St
      super()
      this.state = {
        products: []
      }
    }

    componentWillMount(){ //2nd
      // this.setState({
      //   name: "vikram"
      // })
    }

    render() { //3rd //5th
      return(
        <div>
          {
            this.state.products.map((eachProduct,i)=>{
                return <ProductCard key={i}
                        name={eachProduct.productName}
                        productPrice={eachProduct.productPrice}
                        productColor={eachProduct.productColor}
                        />
            })
          }
        </div>
      )
    }

    componentDidMount(){

      fetch('https://api.myjson.com/bins/sa1r5')
      .then(function(response){
        return response.json()
      })
      .then((JSONResponse)=>{

          this.setState({
              products: JSONResponse
          })

      })
      .catch((error) => {
        console.log(error)
      })
    }

}

// var styles = {
//   nameStyles : {
//       fontSize: '100px',
//       color:'blue'
//   }
// }

//false
//0 , false , null , undefined,

// ? console.log('Preetham') : console.log('Shravya')


//condition ? if_TrueReturn_This : if_false_Return_this

// 1. inline style
// 2 . inside the component
// 3 . external style sheets

module.exports = App

/*
render() {

  if(this.state.whoCameFirst == 'Preetam'){
    return (
        <div>
          <span className='name'>
            { this.state.firstPerson }
          </span>
        </div>
    )
  }

  if(this.state.whoCameFirst == 'Shravya'){
    return (
        <div>
          <span className='name'>
            { this.state.secondPerson }
          </span>
        </div>
    )
  }

  return <div/>

}


*/
