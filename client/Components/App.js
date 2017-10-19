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


    render(){  //3 //5
        return(
            <div> 
                <div> 
                    {this.state.name} 
                </div>
            </div>   
        )
    }

    componentDidmount(){
        
    }


}
module.exports = App


// const App = React.createClass ({ // This is ES5 way to create a simple React Component .
//         //all the life cycle methods goes here
// })