import React,{ Component} from 'react';

import ProductCard from './ProductCard'

class App extends Component{
    constructor(){
        super()
        this.state = {
            results : []
        }
    }

    componentDidMount(){

        var self = this
        fetch('https://api.myjson.com/bins/apf1z')
        .then(function(res){
            return res.json()
        })
        .then(function(jsonResponse){
                console.log(jsonResponse)
            self.setState({
                results: jsonResponse
            })

        })
        .catch(function(error){
            console.log("That's a Error Abhinav",error)
        })

    }



    render(){
        return(
            <div>
                {

                    this.state.results.length ?
                    this.state.results.map(function(eachProduct){
                        return <ProductCard key={eachProduct.productName} title={eachProduct.productName} button={eachProduct.price} isAvailable={eachProduct.available}/>
                    }) :
                    <div> Loading.... </div> 
                }
            </div>
        )
    }
}
module.exports = App
