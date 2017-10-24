import React,{Component} from 'react'
import { Glyphicon } from 'react-bootstrap'

class Header extends Component{
    render(){
        return(
            <div style={s.a}>
                <div style={s.b}>
                    <span style={s.c}>
                        Nin-Ja Stores
                     </span>   
                </div>
                <div style={s.d}>
                    <span style={s.e}>
                        {this.props.count}
                     </span>
                    <Glyphicon glyph="shopping-cart" style={s.f}></Glyphicon>
                </div>
            </div>
        )
    }
}


const s = {
    a:{display:'flex',flex:1,position:'fixed',width:'100%',height:'70px',backgroundColor:'#0792D5',boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, .2)'},
    b:{display:'flex',width:'100%',flex:10,alignItems:'center',justifyContent:'center'},
    c:{fontSize:'40px',textAlign:'center',color:'white',fontFamily: 'Verdana, Geneva, sans-serif'},
    d:{display:'flex',flex:2,alignItems:'center',justifyContent:'center'},
    e:{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',fontWeight:'800'},
    f:{fontSize:'50px',color:'white'}
}

module.exports = Header