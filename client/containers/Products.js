import React,{Component} from 'react'
import ProductCard from '../Components/ProductCard'
import store from '../store'

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
                          addToCartInApp = {()=>store.dispatch({type:'userAddedItemToCart'})}
                          />
              })
            }
            </div>
        )
    }
}

module.exports = Products
