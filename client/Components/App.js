import React,{ Component} from 'react';
import ProductCard from './ProductCard'
import Header from './Header'
import SearchBar from './SearchBar'
import ProductContainer from './ProductContainer'

class App extends Component{
    constructor(){
        super()
        this.state = {
            results : [],
            cart: []
        }
    }

    handleAddtoCart(product){ //product4
        var cart = this.state.cart // [product1,product2,product3]
        cart.push(product) //[product1,product2,product3,product4]
        this.setState({
            cart
        })
    }

    componentDidMount(){
        var self = this
        fetch('https://api.myjson.com/bins/apf1z')
        .then(function(res){
            return res.json()
        })
        .then(function(jsonResponse){
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
                <Header count={this.state.cart.length}/>
                <SearchBar />
                <ProductContainer 
                    results={this.state.results} 
                    handleAddtoCart={ (product)=>this.handleAddtoCart(product) }/>
            </div>
        )
    }
}
module.exports = App
