import ReactDOM from 'react-dom';
import React from 'react';
import store from './store'
import App from './containers/App';
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
);
