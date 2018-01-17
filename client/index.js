import ReactDOM from 'react-dom';
import React from 'react';
import App from 'Components/App';
import store from './store'

console.log("This is my State", store.getState())

ReactDOM.render(
     <App />,
  document.getElementById('root')
);
