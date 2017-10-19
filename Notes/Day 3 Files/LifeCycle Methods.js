
/* With out LifeCycle Methods */

/* ------------------------------------------------------ */

import React,{ Component} from 'react';
class App extends Component{
    render(){
        return(
             <div>
                I do Exist without LifeCycles !!
            </div>
        )
    }

}
module.exports = App

/* ------------------------------------------------------ */


import React,{ Component} from 'react';
class App extends Component{
    contructor(props){
        super(props)
        this.state = {}
    }

    componentWillMount(){
    }

    render(){
        return(
             <div>
                I do Exist with LifeCycles, but of no USE to me !!
            </div>
        )
    }

    componentDidMount(){
    }

    componentWillUnmount(){
    }

}

module.exports = App

/* ------------------------------------------------------ */