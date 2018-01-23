import ReactDOM from 'react-dom';
import React from 'react';
import App from 'containers/App';
import store from './store'
import { Provider } from 'react-redux'

// console.log("This is my State", store.getState())

ReactDOM.render(
    <Provider store={ store }>
      <App/>
    </Provider>,
  document.getElementById('root')
);
