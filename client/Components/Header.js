import React,{Component} from 'react'

class Header extends Component{
    render(){
        return(
            <div style={{backgroundColor:'lightgray',display:'flex',alignItems:'center',justifyContent:'center', height:'100px',width:'600px'}}>
               <span style={{fontSize:'20px'}}> Count: {this.props.count} </span>
               <span style={{fontSize:'20px'}}> Count: {this.props.pantPocket} </span>
            </div>
        )
    }
}

module.exports = Header
