import React, { Component } from 'react'


class SearchBar extends Component{
    render(){
        return(
            <div style={s.a}>
                <div style={s.b}>
                    <input style={s.c}/>
                </div>   
            </div>
        )
    }
}

SearchBar.propTypes = {
    title:React.PropTypes.string.isRequired,
    button:React.PropTypes.string,
    isAvailable: React.PropTypes.bool.isRequired
}

SearchBar.defaultProps = {
    //title: "Title is Missing",
    button: "ButtonText is missing" 
}


const s = {
    a:{display:'flex',alignItems:'center',justifyContent:'center',paddingTop:'90px'},
    b:{height:'50px',width:'80%',boxShadow:'0px 7px 21px 0px rgba(0,0,0,0.26)'},
    c:{height:'50px',width:'100%',fontSize:'20px',textAlign:'center',color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif'},
}

module.exports = SearchBar