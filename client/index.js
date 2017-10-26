import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux'

import store from './store'

import App from './containers/App';

ReactDOM.render(
  <Provider store={store}>
     <App/>
  </Provider>,
  document.getElementById('root')
);

{/*
  <Provider> // State is Here
    <App> //child 
      //children getting state from App as props
    </App>
  </Provider> 
*/}