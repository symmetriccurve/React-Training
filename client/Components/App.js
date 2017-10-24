import React,{ Component} from 'react';
import ProductCard from './ProductCard'
import Header from './Header'
import SearchBar from './SearchBar'
import ProductContainer from './ProductContainer'
import { Provider } from 'react-redux';
import store from '../store'
import {connect} from 'react-redux';

class App extends Component{
    constructor(){
        super()
        this.state = {
            results : [],
            cart: [],
            filteredResults: [],
            searchString: ''
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
                results: jsonResponse,
                filteredResults: jsonResponse
            })

        })
        .catch(function(error){
            console.log("That's a Error Abhinav",error)
        })

    }

    searchStringChange(searchString){
        this.setState({searchString},()=> {
            var filteredResults = this.state.results.filter(function(product){
                debugger
                return product.productName.toLowerCase().indexOf(searchString) !== -1
            })
            this.setState({
                filteredResults
            })
            //console.log("results",results)
        })
    }



    render(){
        return( 
            <div>
                <Header count={this.state.cart.length}/>
                <SearchBar searchStringChange={ (searchString)=>this.searchStringChange(searchString) }/>/>
                <ProductContainer 
                    results={this.state.filteredResults} 
                    handleAddtoCart={ (product)=>this.handleAddtoCart(product) }/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    debugger
    return {
        uiState: state.uiState
    };
}

function mapDispatchToProps(dispatch) {
    //mapDispatchToProps is optional, but useful when passed to a stateless component without connecting to store
    return {

    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
