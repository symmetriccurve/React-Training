import ReactDOM from 'react-dom';
import React from 'react';

import App from 'Components/App';
//import App from 'Components/AppWithinComponentStyle'
ReactDOM.render(
  <div style={{height:'100vh',width:'100vw',backgroundColor:'#FCFCFC'}}>
     <App />
  </div>   ,
  document.getElementById('root')
);
