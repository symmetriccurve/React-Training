import React, { Component } from 'react'


class ProductCard extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return false
    }

    componentWillUpdate(nextProps, nextState){
        //  it Only Updates when shouldComponentUpdate return true
    }

    componentDidUpdate(){
        // Method Called after Update has Being Made Successfully
    }


    render(){
        return(
            <div style={s.a}>
                <div style={s.b}>
                    <div style={s.c}>
                        <span style={s.d}>
                            {this.props.title}
                         </span>
                         <div style={s.e}>
                            <span style={s.f}>
                                {this.props.button}
                            </span>
                        </div>
                        <div style={Object.assign(s.g,{backgroundColor:this.props.isAvailable ? 'green' :'lightgrey'})} onClick={()=>this.props.handleProductAdd(this.props)}>
                            <span style={s.h}>
                                { this.props.isAvailable ? "Add to Cart" : "Out of Stock" }
                            </span>
                        </div>
                    </div>    
                </div>    
            </div>
        )
    }
}

ProductCard.propTypes = {
    title:React.PropTypes.string.isRequired,
    button:React.PropTypes.string,
    isAvailable: React.PropTypes.bool.isRequired
}

ProductCard.defaultProps = {
    //title: "Title is Missing",
    button: "ButtonText is missing" 
}


const s = {
    a:{marginTop:'20px'},
    b:{display:'flex',padding:'20px',height:'200px',width:'1000px',backgroundColor:'#6BC6F2'},
    c:{display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'flex-start'},
    d:{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'40px',fontWeight:'bold',color:'white'},
    e:{display:'flex',backgroundColor:'#0792D5',borderRadius:'20px',height:'35%',width:'20%',alignItems:'center',justifyContent:'center', shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1},
    f:{color:'white',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',fontWeight:'800'},
    g:{display:'flex',borderRadius:'20px',height:'35%',width:'90%',alignItems:'center',justifyContent:'center', shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1,marginTop:'10px'},
    h:{color:'white',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',fontWeight:'800'}
}

module.exports = ProductCard