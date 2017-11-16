import React, { Component } from 'react';
import ProductCard from '../components/ProductCard'
import { connect } from 'react-redux'
import { addToCart , removeFromCart } from '../actions/cartActions'
import store from '../store'

class ProductContainer extends Component {
    render(){
        return(
            <div>
                {
                    this.props.products.map((eachProduct,i)=>{
                        return <ProductCard 
                                key = {eachProduct.productName+i} 
                                name = { eachProduct.productName } 
                                price = { eachProduct.productPrice } 
                                size = { eachProduct.size }
                                addToCart = { this.props.addToCart }
                                removeFromCart = { this.props.removeFromCart }
                            />
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
        addToCart : (product)=>store.dispatch(addToCart(product)),//addToCart
        removeFromCart : (product)=>store.dispatch(removeFromCart(product))
    }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({
//         addToCart: addToCart,
//         removeFromCart: removeFromCart
//     },dispatch)
// }

// const mapDispatchToProps = dispatch => bindActionCreators({
//         addToCart: addToCart
//     },dispatch)


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ProductContainer)