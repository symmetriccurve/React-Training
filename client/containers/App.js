import React,{ Component} from 'react';
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import ProductContainer from './ProductContainer'
import { connect } from 'react-redux'
import store from '../store'
import { fetchData } from '../actions'
var renderCount = 0 
class App extends Component{
    constructor(){
        super()
        this.state = {
            //results : [],
            //cart: [],
            filteredResults: [],
           // searchString: ''
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
        // fetch('https://api.myjson.com/bins/apf1z')
        // .then(function(res){
        //     return res.json()
        // })
        // .then(function(jsonResponse){
        //     self.setState({
        //         results: jsonResponse,
        //         filteredResults: jsonResponse
        //     })

        // })
        // .catch(function(error){
        //     console.log("That's a Error Abhinav",error)
        // })
        store.dispatch(fetchData())

    }

    componentWillReceiveProps(nextProps){
        debugger
        var filteredResults = nextProps.dataReducer.results.filter(function(product){
            return product.productName.toLowerCase().indexOf(nextProps.dataReducer.searchString) !== -1
        })

        this.setState({
            filteredResults
        })
    }

    componentDidUpdate(prevProps, prevState){
        // Use this Method to Update anything out the React world like third party API. //
        console.log('componentDidUpdate',prevProps,prevState)
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate',nextProps, nextState)
    }

    // if shouldComponentUpdate() returns false, then componentWillUpdate(), render(), and componentDidUpdate() will not be invoked


    render(){
        renderCount = renderCount + 1
        console.log("Render Count",renderCount)
        //console.log("app State",this.state)
        //console.log("app Props",this.props)
        return( 
            <div>
                <Header count={this.props.dataReducer.cart.length}/>
                <SearchBar searchString={ this.props.dataReducer.searchString } />
                <ProductContainer 
                    results={this.state.filteredResults} 
                    handleAddtoCart={ (product)=>this.handleAddtoCart(product) }/>
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


