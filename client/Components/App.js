import React, {Component} from 'react';
import GreetingCard from './Greetingcard.js';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    render() {
        return (
            <div>
                <GreetingCard name={this.state.posts.age}/>
                <GreetingCard name={"chandu"}/>
                <GreetingCard name={"Abhinav"}/>
                <GreetingCard name={"vinay"}/>

            </div>
        );
    }
    componentDidMount() {
        axios
            .get('http://api.population.io:80/1.0/population/2017/Brazil/')
            .then(res => {
                this.setState({posts: res.data});
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

}

module.exports = App