import React,{Component} from 'react'

class Header extends Component{
    render(){
        return(
            <div style={{backgroundColor:'lightgray',display:'flex',alignItems:'center',justifyContent:'center', height:'100px',width:'600px'}}>
               <span style={{fontSize:'20px'}}> {this.props.cartCount} </span>
            </div>

        )
    }
}

module.exports = Header