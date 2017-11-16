import React, { Component } from 'react';
import ProductCard from '../components/ProductCard'
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import store from '../store'

class ProductContainer extends Component {
    render(){
        console.log("Props",this)
        //debugger
        return(
            <div>
                {
                    this.props.products.map((eachProduct,i)=>{
                        return <ProductCard 
                            key = {eachProduct.productName+i} 
                            name = { eachProduct.productName } 
                            price = { eachProduct.productPrice } 
                            size = { eachProduct.size }
                            handleAddToCart = {(productName) => this.props.addToCart(productName) }/>
                    })
                }
            </div>    
            
        )
    }
} 
//module.exports = ProductContainer

function mapStateToProps(state){
    return {
        productss: state.products
    }
}

function mapDispatchToProps(dispatch){
    return {
        addToCart: (product)=>{store.dispatch(addToCart(product))}
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ProductContainer)