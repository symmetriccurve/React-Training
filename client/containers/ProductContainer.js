import React, { Component } from 'react';
import ProductCard from '../components/ProductCard'
import { connect, bindActionCreators } from 'react-redux'
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
        addToCart: (product)=>{dispatch(addToCart(product))}
    }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({
//         addToCart: addToCart
//     },dispatch)
// }


// const mapDispatchToProps = dispatch => bindActionCreators({
//         addToCart: addToCart
//     },dispatch)


export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ProductContainer)