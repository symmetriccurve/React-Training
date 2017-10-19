import React,{ Component} from 'react';

class App extends Component{
    render(){
        return(
             <div>
                <div style={style.mainCont}>
                    <div style={style.innerCont}>
                        <div style={style.topCont}>
                            <div style={style.topLeftCont}>
                                <span style={style.titleText}>
                                    Title
                                </span>
                            </div>
                           <div style={style.topRighCont}>
                               <span style={style.subtitleText}>
                                    Price
                                </span>
                            </div>
                        </div>
                        <div style={style.bottomCont}>
                            <span style={style.descriptionText}>
                                 descriptionText
                            </span>
                        </div>
                        <div style={style.buttonCont}>
                            <span style={style.buttonText}>
                                Click Me
                            </span>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }

}

const style = {
    mainCont: {display:'flex',padding:'20px',height:'200px',width:'500px',backgroundColor:'#44B6EC'},
    innerCont: {display:'flex',flex:1,flexDirection:'column'},
    topCont:{display:'flex',height:'30%'},
    topLeftCont:{display:'flex',flex:3,height:'30%',alignItems:'center',justifyContent:'flex-start'},
    topRighCont:{display:'flex',flex:1,height:'30%',alignItems:'center',justifyContent:'flex-start'},
    bottomCont:{display:'flex',height:'40%',alignItems:'center',justifyContent:'flex-start', shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1},
    titleText:{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'40px',fontWeight:'bold',color:'white'},
    subtitleText:{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',color:'white'},
    descriptionText:{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',color:'white'},
    buttonCont:{display:'flex',backgroundColor:'white',height:'25%',alignItems:'center',justifyContent:'center', shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1},
    buttonText:{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',fontWeight:'800'}
}

module.exports = App


