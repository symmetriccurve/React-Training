import React, { Component } from 'react';
import '../styles/App.css'
import ProductCard from './ProductCard'

class MyComponent extends Component {
    constructor(){
        super()
        this.state  = {
            products: [
                {
                    productName : 'Fogg',
                    productPrice : '$250',
                    isAvailable : false ,
                    size: '100ml'
                },
                {
                    productName : 'Axe',
                    productPrice : '$150',
                    isAvailable : false 
                },
                {
                    productName : 'KS',
                    productPrice : '$150',
                    isAvailable : false,
                    size: '200ml'
                },
                {
                    productName : 'Chandan',
                    productPrice : '$250',
                    isAvailable : false 
                },
                {
                    productName : 'sandlewood',
                    productPrice : '$250',
                    isAvailable : false 
                }
            ]
        }
    }
    
    render(){
        return (
            <div>
                {
                    this.state.products.map((eachProduct)=>{
                        return <ProductCard key = {eachProduct.productName} name = { eachProduct.productName } price = { eachProduct.productPrice } size={eachProduct.size}/>
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

module.exports = MyComponent

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