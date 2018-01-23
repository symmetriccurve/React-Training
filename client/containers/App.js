import React, { Component } from 'react';
require('./App.css')

import { connect } from 'react-redux'

import Products from './Products'
import Header from '../Components/Header'
class App extends Component {

    constructor(){ // 1 St
      super()
      this.state = {
        products: [],
      }
    }

    componentWillMount(){ //2nd
      // this.setState({
      //   name: "vikram"
      // })
    }

    // addToCartInApp(){
    //     console.log("Calling add to Cart In App")
    //     this.setState({
    //         cartCount: this.state.cartCount + 1
    //     })
    // }

    render(){

      if(this.props.isOpenForSale){
        return(
          <div>
            <Header count={this.props.cartCount} pantPocket={"Shravya's Money"}/>
            <Products products={this.state.products}/>
          </div>
        )
      }

      return(
        <div>
            We are Closed ! Thanks for Visiting !
        </div>
      )

      // return(
      //   <div>
      //     <Header count={this.state.cartCount} pantPocket={"Shravya's Money"}/>
      //     <Products products={this.state.products} addToCartInApp={()=>this.addToCartInApp()}/>
      //   </div>
      // )
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

function mapStateToProps(reduxState){
    return{
      isOpenForSale: reduxState.uiReducer.isOpenForSale,
      cartCount : reduxState.dataReducer.cartCount
    }
}

export default connect(
  mapStateToProps
)(App)


//module.exports = App
