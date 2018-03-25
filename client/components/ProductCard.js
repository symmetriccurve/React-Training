import React,{Component} from 'react'

class ProductCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAddedToCart: false
        }
    }
    //Adding to local Add to Cart
    localHandleAddToCart(productName){
        if(this.state.isAddedToCart){
            this.props.removeFromCart(productName)
        }else {
            this.props.addToCart(productName)
        }
        this.setState({
            isAddedToCart: !this.state.isAddedToCart
        })
    }

    shouldComponentUpdate(newProps,newState){
        if(JSON.stringify(this.props) != JSON.stringify(newProps) || JSON.stringify(this.state) != JSON.stringify(newState)){
            return true
        }
        return false
    }

    componentWillUpdate(){
      console.log('componentWillUpdate')
    }

    componentDidUpdate(){
      console.log('componentDidUpdate')
    }

    render(){
        //console.log("I'm product Card and I render",this.props.name)
        return (
            <div style={s.a} className='main-container'>
                <div style={s.b} className='content-container'>
                    <div style={s.c} className='name-container'>
                        <span style={s.d} className='product-name'>
                            { this.props.name }
                        </span>
                        <div style={s.g} className='price-container'>
                            <span style={s.h} className='product-price'>
                               { this.props.price }
                            </span>
                        </div>
                        <div style={s.g} className='price-container'>
                            <span style={s.h} className='product-price'>
                               { this.props.size }
                            </span>
                        </div>
                         <div style={{marginTop:'10px',display:'flex',backgroundColor:this.state.isAddedToCart ? 'green': '#4FAFE9',borderRadius:'25px',height:'35%',width:'100%',alignItems:'center',justifyContent:'center'}} className='cart-button-container' onClick={()=>this.localHandleAddToCart(this.props.name)}>
                            <span style={s.f} className='add-to-cart'>
                                { this.state.isAddedToCart ? "Added to Cart" : "Add to Cart" }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ProductCard.propTypes = {
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.string.isRequired,
    size: React.PropTypes.number
}


ProductCard.defaultProps= {
    size: 'U/A'
}

const s = {
    a:{marginTop:'20px',width:'600px'},
    b:{display:'flex',padding:'10px',height:'100px',width:'600px',backgroundColor:'#EEEEEE'},
    c:{display:'flex',flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'},
    d:{color:'#4C514D',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',fontWeight:'bold'},
    e:{marginTop:'10px',display:'flex',backgroundColor:'#4FAFE9',borderRadius:'25px',height:'35%',width:'100%',alignItems:'center',justifyContent:'center'},
    f:{color:'white',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',fontWeight:'800'},
    g:{display:'flex',borderRadius:'20px',height:'35%',width:'90%',alignItems:'center',justifyContent:'center', shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1},
    h:{color:'#252725',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'40px',fontWeight:'800'}
}

module.exports = ProductCard
