import React, { Component } from 'react';
require('./App.css')

import Products from './Products'
import Header from './Header'
class App extends Component {

    constructor(){ // 1 St
      super()
      this.state = {
        products: [],
        cartCount: 0
      }
      //this.addToCartInApp = this.addToCartInApp.bind(this)
    }

    componentWillMount(){ //2nd
      // this.setState({
      //   name: "vikram"
      // })
    }

    addToCartInApp(){
        console.log("Calling add to Cart In App")
        this.setState({
            cartCount: this.state.cartCount + 1
        })
    }

    render() { //3rd //5th
      return(
        <div>
          <Header count={this.state.cartCount}/>
          <Products products={this.state.products} addToCartInApp={()=>this.addToCartInApp()}/>
        </div>
      )
    }

    componentDidMount(){

      fetch('https://api.myjson.com/bins/kdoy5')
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

    componentWillUnmount(){

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

<App>

</App>


*/
