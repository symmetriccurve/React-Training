import React from 'react';

var data =  {
    title:'Title',
    price:'$100',
    subtitle:'subTitle',
    description:'If you are reading this after the title, then I am a description'
}

const App = React.createClass({
    render() {
        return (
            <div>
                <div style={{display:'flex',padding:'20px',height:'200px',width:'500px',backgroundColor:'#44B6EC'}}>
                    <div style={{display:'flex',flex:1,flexDirection:'column'}}>
                        <div style={{display:'flex',height:'30%'}}>
                            <div style={{display:'flex',flex:3,height:'30%',alignItems:'center',justifyContent:'flex-start'}}>
                                <span style={{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'40',fontWeight:'bold',color:'white'}}>
                                    {data.title} 
                                </span>
                            </div>
                           <div style={{display:'flex',flex:1,height:'30%',alignItems:'center',justifyContent:'flex-start'}}>
                               <span style={{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20',color:'white'}}>
                                     {data.subtitle} 
                                </span>
                            </div>
                        </div>
                        <div style={{display:'flex',height:'40%',alignItems:'center',justifyContent:'flex-start', shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1}}>
                            <span style={{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20',color:'white'}}>
                                 {data.description} 
                            </span>
                        </div>
                        <div style={{display:'flex',backgroundColor:'white',height:'25%',alignItems:'center',justifyContent:'center', shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1}}>
                            <span style={{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20',fontWeight:'800'}}>
                                Click Me
                            </span>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
})


module.exports = App