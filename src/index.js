import React from 'react';
import ReactDOM from 'react-dom';
import HomeContainer from './containers/Home';
import './assets/css/index.css';
import './assets/css/grid.css';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HomeContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
