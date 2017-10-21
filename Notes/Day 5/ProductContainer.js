import React, { Component } from 'react'
import ProductCard from '../Components/ProductCard'

class ProductContainer extends Component{
    render(){
        return(
           <div style={{display:'flex',flex:1,paddingTop:'70px',alignItems:'center',justifyContent:'center',flexDirection:'column'}}> 
                {
                    this.props.results.length ?
                    this.props.results.map((eachProduct)=>{
                        return <ProductCard 
                            key={eachProduct.productName} 
                            title={eachProduct.productName} 
                            button={eachProduct.price} 
                            isAvailable={eachProduct.available} 
                            handleProductAdd={this.props.handleProductAdd}/>
                    }) :
                    <div> Loading.... </div> 
                }
           </div> 
        )
    }
}

ProductContainer.propTypes = {
    title:React.PropTypes.string.isRequired,
    button:React.PropTypes.string,
    isAvailable: React.PropTypes.bool.isRequired
}

ProductContainer.defaultProps = {
    title: "Title is Missing",
    button: "ButtonText is missing" 
}


module.exports = ProductContainer