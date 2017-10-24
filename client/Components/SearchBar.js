import React, { Component } from 'react'


class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchString: ''
        }
    }
    
    handleChange(e){
        this.setState({searchString:e.target.value})
        this.props.searchStringChange(e.target.value)
    }
    
    render(){
        return(
            <div style={s.a}>
                <div style={s.b}>
                    <input style={s.c} value={this.state.searchString} onChange={(e)=>{this.handleChange(e)}}/>
                </div>   
            </div>
        )
    }
}


const s = {
    a:{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'90px'},
    b:{height:'50px',width:'80%',boxShadow:'0px 7px 21px 0px rgba(0,0,0,0.26)'},
    c:{height:'50px',width:'100%',fontSize:'20px',textAlign:'center',color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif'},
}

module.exports = SearchBar