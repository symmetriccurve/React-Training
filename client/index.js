import ReactDOM from 'react-dom';
import React from 'react';
import store from './store'
import App from 'Components/App';
import { Provider } from 'react-redux';

//import App from 'Components/AppWithinComponentStyle'
ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
);
