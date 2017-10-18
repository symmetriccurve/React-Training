import React, { Component } from 'react';

var data =  {
    title:'Title',
    subtitle:'subTitle',
    description:'If you are reading this after the title, then I am a description'
}

var visitingCard =  {
    name:'Vinay',
    designation:'Senior UI Developer',
    description:"I'm a Passionate Javascript Developer with Love for UI/UX"
}

var menuItem =  {
    itemName:'Product A',
    price:'$100',
    description:"I'm a product worth of $10, all the UI around it make me feel !!!"
}

var contactCard =  {
    name:'Abhinav',
    phone:'123456',
    designation:"Budding UI Developer"
}

var GreetingCard =  {
    wish:'Happy New Year !',
    year:'123456',
    greetings:"May this Year Bring you more than what you Deserve"
}

var CreditCard =  {
    cardNumber:'1122-4567',
    exp:'10/20',
    FNLN:"Sasidhar"
}

class App extends Component {
    constructor(props){
        super(props)
            this.state = {
                name:'adada'
            }
        }

    componentWillMount(){
    }

    componentDidMount(){
      this.setState({
            name:'hellow'
      })
    }
    render() {
        return (
            <div>
                <div style={{display:'flex',padding:'20px',height:'200px',width:'500px',backgroundColor:'#44B6EC'}}>
                    <div style={{display:'flex',flex:1,flexDirection:'column'}}>
                        <div style={{display:'flex',height:'30%'}}>
                            <div style={{display:'flex',flex:3,height:'30%',alignItems:'center',justifyContent:'flex-start'}}>
                                <span style={{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'40px',fontWeight:'bold',color:'white'}}>
                                   {this.state.name} 
                                </span>
                            </div>
                           <div style={{display:'flex',flex:1,height:'30%',alignItems:'center',justifyContent:'flex-start'}}>
                               <span style={{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',color:'white'}}>
                                     {data.subtitle} 
                                </span>
                            </div>
                        </div>
                        <div style={{display:'flex',height:'40%',alignItems:'center',justifyContent:'flex-start', shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1}}>
                            <span style={{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',color:'white'}}>
                                 {data.description} 
                            </span>
                        </div>
                        <div style={{display:'flex',backgroundColor:'white',height:'25%',alignItems:'center',justifyContent:'center', shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1}}>
                            <span style={{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',fontWeight:'800'}}>
                                Click Me
                            </span>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
}


module.exports = App