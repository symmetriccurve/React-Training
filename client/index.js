import ReactDOM from 'react-dom';
import React from 'react';
import store from './store'
console.log(store.getState())
import App from 'Components/App';

ReactDOM.render(
     <App />,
  document.getElementById('root')
);
