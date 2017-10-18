import React, {Component} from 'react';
var GreetingCard = {
    wish: "Happy New Year !",
    year: 123456,
    greetings: "May this Year Bring you more than what you Deserve"
}
class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <div
                        style={{
                        display: 'flex',
                        padding: '20px',
                        height: '200px',
                        width: '500px',
                        backgroundColor: '#44B6EC'
                    }}>
                        <div
                            style={{
                            display: 'flex',
                            flex: 1,
                            flexDirection: 'column'
                        }}>
                            <div
                                style={{
                                display: 'flex',
                                height: '30%'
                            }}>
                                <div
                                    style={{
                                    display: 'flex',
                                    flex: 3,
                                    height: '30%',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start'
                                }}>
                                    <span
                                        style={{
                                        color: '#434040',
                                        fontFamily: 'Verdana, Geneva, sans-serif',
                                        fontSize: '30px',
                                        fontWeight: 'bold',
                                        color: 'white'
                                    }}>
                                        {GreetingCard.wish}
                                    </span>
                                </div>
                                <div
                                    style={{
                                    display: 'flex',
                                    flex: 1,
                                    height: '30%',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start'
                                }}>
                                    <span
                                        style={{
                                        color: '#434040',
                                        fontFamily: 'Verdana, Geneva, sans-serif',
                                        fontSize: '20px',
                                        color: 'white'
                                    }}>
                                        {GreetingCard.year}
                                    </span>
                                </div>
                            </div>
                            <div
                                style={{
                                display: 'flex',
                                height: '40%',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                shadowColor: '#000000',
                                shadowOffset: {
                                    width: 0,
                                    height: 3
                                },
                                shadowRadius: 1,
                                shadowOpacity: 0.1
                            }}>
                                <span
                                    style={{
                                    color: '#434040',
                                    fontFamily: 'Verdana, Geneva, sans-serif',
                                    fontSize: '20px',
                                    color: 'white'
                                }}>
                                    {GreetingCard.greetings}
                                </span>
                            </div>
                            <div
                                style={{
                                display: 'flex',
                                backgroundColor: 'white',
                                height: '25%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                shadowColor: '#000000',
                                shadowOffset: {
                                    width: 0,
                                    height: 3
                                },
                                shadowRadius: 1,
                                shadowOpacity: 0.1
                            }}>
                                <span
                                    style={{
                                    color: '#434040',
                                    fontFamily: 'Verdana, Geneva, sans-serif',
                                    fontSize: '20px',
                                    fontWeight: '800'
                                }}>
                                    Click Me
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = App