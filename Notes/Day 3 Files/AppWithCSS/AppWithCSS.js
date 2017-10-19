import React,{ Component} from 'react';

import './AppWithCSS.css'

class App extends Component{
    render(){
        return(
             <div>
                <div className = 'mainCont'>
                    <div  className = 'innerCont'>
                        <div className = 'topCont'>
                            <div className = 'topLeftCont'>
                                <span className = 'titleText'>
                                    Title
                                </span>
                            </div>
                           <div className = 'topRighCont'>
                               <span className = 'subtitleText'>
                                    Price
                                </span>
                            </div>
                        </div>
                        <div className = 'bottomCont'>
                            <span className = 'descriptionText'>
                                 descriptionText
                            </span>
                        </div>
                        <div className = 'buttonCont'>
                            <spanclassName = 'buttonText'>
                                Click Me
                            </span>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }

}

module.exports = App


