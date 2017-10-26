import React,{ Component} from 'react';
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import ProductContainer from './ProductContainer'
import { connect } from 'react-redux'

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
        this.setState({ searchString },()=> {
            var filteredResults = this.state.results.filter(function(product){
                return product.productName.toLowerCase().indexOf(searchString) !== -1
            })

            this.setState({
                filteredResults
            })
            
            //console.log("results",results)
        })
    }

    render(){
        debugger 
        console.log("app State",this.state)
        console.log("app Props",this.props)
        return( 
            <div>
                <Header count={this.state.cart.length}/>
                <SearchBar searchStringChange={ (searchString)=>this.searchStringChange(searchString) }/>/>
                <ProductContainer 
                    results={this.state.filteredResults} 
                    handleAddtoCart={ (product)=>this.handleAddtoCart(product) }>
                    <productCard/>
                    <productCard/>
                    <productCard/>
                    <productCard/>
                    <productCard/>
                </ProductContainer>    
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
       dataReducer:state.dataReducer      //retrun what we needed for this component
    }
}

function mapDispatchToProps(dispatch){
    return { 
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)


