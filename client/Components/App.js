import React, { Component } from 'react';
import '../styles/App.css'
import ProductCard from './ProductCard'
import Header from './Header'

class App extends Component {
    constructor(){
        super()
        this.state  = {
            products: [],
            cartCount: 0,
            cart: []
        }
    }

    componentDidMount(){

       fetch('https://api.myjson.com/bins/11j4n3')
       .then((response)=>{
          return response.json()
        })
       .then((json)=>{
           this.setState({
               products: json
           })
       })
       .catch((error)=>{console.log(error)})

    }

    handleAddToCart(productName){
        console.log("This is the Product you clicked and I can be seen on APP ",productName)
        this.setState({
            cartCount: this.state.cartCount + 1
        })
    }
    
    render(){
        return (
            <div>
                <Header cartCount = { this.state.cartCount }/>
                {
                    this.state.products.map((eachProduct,i)=>{
                        return <ProductCard 
                            key = {eachProduct.productName+i} 
                            name = { eachProduct.productName } 
                            price = { eachProduct.productPrice } 
                            size = { eachProduct.size }
                            handleAddToCart = {(productName) => this.handleAddToCart(productName) }/>
                    })
                }
            </div>
        )
    }
}

const s = {
    a:{marginTop:'20px',width:'600px'},
    b:{display:'flex',padding:'20px',height:'100px',width:'600px',backgroundColor:'#EEEEEE'},
    c:{display:'flex',flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'},
    d:{color:'#4C514D',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'40px',fontWeight:'bold'},
    e:{marginTop:'10px',display:'flex',backgroundColor:'#4FAFE9',borderRadius:'25px',height:'35%',width:'100%',alignItems:'center',justifyContent:'center', shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1},
    f:{color:'white',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',fontWeight:'800'},
    g:{display:'flex',borderRadius:'20px',height:'35%',width:'90%',alignItems:'center',justifyContent:'center', shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1},
    h:{color:'#252725',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'40px',fontWeight:'800'}
}

module.exports = App

// var products = ['soap','dish washer','brush']

// <App>
//     <ProductCard product = {products[0]}/>
//     <ProductCard product = {products[1]}/>
//     <ProductCard product = {products[2]}/>
//     <ProductCard product = {products[3]}/>
//     <ProductCard product = {products[4]}/>
//     <ProductCard product = {products[5]}/>    
// </App> 



// <App>
//     <ProductCard product = {products[0]}/>
//     <ProductCard product = {products[1]}/>
//     <ProductCard product = {products[2]}/>
//     <ProductCard product = {products[3]}/>
//     <ProductCard product = {products[4]}/>
//     <ProductCard product = {products[5]}/>
// </App>

// <Parent>
//     <Header>
//         <Logo/>
//         <SearchBar/>
//         <Buttons/>
//     </Header>
//     <Children/>
//     <Children/>
//     <Children/>
// <Parent>    