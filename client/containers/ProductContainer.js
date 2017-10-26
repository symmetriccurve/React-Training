import React, { Component } from 'react'
import ProductCard from '../components/ProductCard'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import store from '../store'

class ProductContainer extends Component{

    shouldComponentUpdate(newProps,newState){
        //console.log("This Props",this.props)
        //console.log("newProps",newProps)
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
        console.log("ProductContainer: I'm Rendering",this.props)
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
                                handleAddtoCart = { (product)=> this.props.addToCart(product)}
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


function mapStateToProps(state){
    return {
       dataReducer:state.dataReducer      //retrun what we needed for this component
    }
}

function mapDispatchToProps(dispatch){
    //debugger
    return ({ 
        addToCart: (product) => store.dispatch(addToCart(product))
    })
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer)


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