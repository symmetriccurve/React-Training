import React, { Component } from 'react';

class ProductCard extends Component{
  render(){
    return(
      <div style={{height:'50px',width:'200px', backgroundColor:'coral',marginTop:'10px'}}>
          Product Name: { this.props.name }
          Product Price: { this.props.productPrice }
          Product Color: { this.props.productColor }
      </div>
    )
  }
}

ProductCard.defaultProps = {
  productPrice:'N/A',
  productColor:'N/A'
}

ProductCard.propTypes = {
  productName: React.PropTypes.string.isRequired,
  productPrice:React.PropTypes.number,
  productColor:React.PropTypes.string
}


module.exports = ProductCard
