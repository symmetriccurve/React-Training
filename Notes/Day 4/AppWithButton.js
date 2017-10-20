import React,{ Component} from 'react';
//importing from React Library 
//


class App extends Component{

    constructor(){ //1
        super()
        this.state = {
            name:'Sesidhar'
        }
    }

    componentWillMount(){ //2
        this.setState({
            name : "Vinay"
        })
    }


    render(){
        return(
            <div>
                <div style={{display:'flex',padding:'20px',height:'200px',width:'500px',backgroundColor:'#44B6EC'}}>
                    <div style={{display:'flex',flex:1,flexDirection:'column',alignItems:'center',justifyContent:'flex-start'}}>
                        <span style={{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'40px',fontWeight:'bold',color:'white'}}>
                            {this.state.name}
                         </span>
                         <div style={{marginTop:'10%',display:'flex',backgroundColor:'white',height:'25%',width:'100%',alignItems:'center',justifyContent:'center', shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1}} onClick={()=>{this.setState({name:'hello'})}}>
                            <span style={{color:'#434040',fontFamily: 'Verdana, Geneva, sans-serif',fontSize:'20px',fontWeight:'800'}}>
                                Click Me
                            </span>
                        </div>
                    </div>    
                </div>    
            </div>
        )
    }

    componentDidmount(){
        
    }


}
module.exports = App