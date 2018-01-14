import React, { Component } from 'react';

class ProductCard extends Component{
  constructor(props){
      super(props)
      this.state = {
          isAddedToCart: false
      }
  }

  handleAddToCart(){
    //console.log("This function is called",this.props.productName)
      this.props.addToCartInApp()
      this.setState({
        isAddedToCart: !this.state.isAddedToCart
      })
  }

  render(){
    return(
      <div style={s.a} className='main-container'>
          <div style={s.b} className='content-container'>
              <div style={s.c} className='name-container'>
                  <span style={s.d} className='product-name'>
                      { this.state.isAddedToCart ? this.props.productName : '********' }
                  </span>
                  <div style={s.g} className='price-container'>
                      <span style={s.h} className='product-price'>
                        ${ this.props.productPrice }
                      </span>
                  </div>
                  <div style={s.g} className='price-container'>
                      <span style={s.h} className='product-price'>
                         Color: { this.props.productColor }
                      </span>
                  </div>
                   <div style={{marginTop:'10px',display:'flex',backgroundColor:this.state.isAddedToCart ? 'green': '#4FAFE9',borderRadius:'25px',height:'35%',width:'100%',alignItems:'center',justifyContent:'center'}} className='cart-button-container' onClick={()=>this.handleAddToCart()}>
                      <span style={s.f} className='add-to-cart'>
                          { this.state.isAddedToCart ? "hide" : "Show" }
                      </span>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

ProductCard.defaultProps = {
  productPrice:'N/A',
  productColor:'N/A'
}

ProductCard.propTypes = {
  productName: React.PropTypes.string,
  productPrice:React.PropTypes.number,
  productColor:React.PropTypes.string
}

 const s = {
     a:{marginTop:'20px',width:'600px'},
     b:{display:'flex',padding:'10px',height:'100px',width:'600px',backgroundColor:'#EEEEEE'},
     c:{display:'flex',flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'},
     d:{color:'#4C514D',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'15px',fontWeight:'bold'},
     e:{marginTop:'10px',display:'flex',backgroundColor:'#4FAFE9',borderRadius:'25px',height:'35%',width:'100%',alignItems:'center',justifyContent:'center'},
     f:{color:'white',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',fontWeight:'800'},
     g:{display:'flex',borderRadius:'10px',height:'35%',width:'90%',alignItems:'center',justifyContent:'center', shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1},
     h:{color:'#252725',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',fontWeight:'800'}
 }
module.exports = ProductCard
