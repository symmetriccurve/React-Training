import React, { Component } from 'react';
import ProductCard from '../components/ProductCard'
import { connect } from 'react-redux'

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
                            handleAddToCart = {(productName) => this.handleAddToCart(productName) }/>
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
        
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ProductContainer)