import React, { Component } from 'react'
import ProductCard from '../Components/ProductCard'

class ProductContainer extends Component{

    shouldComponentUpdate(newProps,newState){
        console.log("This Props",this.props)
        console.log("newProps",newProps)
        var oldResults = JSON.stringify(this.props.results)
        var newResults = JSON.stringify(newProps.results)
        if( oldResults == newResults ){
            return false
        }
        return true
    }

    /* 

        First Render => firstProps : results = 0
            //this.props.results //newProps.results

        Second Render => secondProps : results = 20
             //this.props.results //newProps.results

        third Render => thirdProps : results = 40
            //this.props.results //newProps.results

    */

    render(){
        console.log("ProductContainer: I'm Rendering")
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
                                handleAddtoCart = { (product)=> this.props.handleAddtoCart(product)}
                            />
                    }) :
                    <div> Loading.... </div> 
                }
           </div> 
        )
    }
}


ProductContainer.propTypes = {
    results:React.PropTypes.array.isRequired,
}

ProductContainer.defaultProps = {

}


module.exports = ProductContainer


{/*

<App> results cart handleAddtoCart
    <Header />
    <ProductContainer> handleAddtoCart
       <ProductCard result[0] /> handleAddtoCart
       <ProductCard/> result[1] /> handleAddtoCart
       <ProductCard result[0] /> handleAddtoCart
       <ProductCard/> result[1] />handleAddtoCart
       <ProductCard result[0] />handleAddtoCart
       <ProductCard/> result[1] />handleAddtoCart
    </ProductContainer>
</App> 

*/}