import React,{Component} from 'react'
import ProductCard from './ProductCard'
class Products extends Component{
    render(){
        return(
            <div>
            {
              this.props.products.map((eachProduct,i)=>{
                  return <ProductCard key={i}
                          productName={eachProduct.productName}
                          productPrice={eachProduct.productPrice}
                          productColor={eachProduct.productColor}
                          addToCartInApp = {()=>this.props.addToCartInApp()}
                          />
              })
            }
            </div>
        )
    }
}

module.exports = Products
