import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Root from './root/';
import Sidebar from './components/Sidebar/index.jsx';


ReactDOM.render(
  <React.StrictMode>
  
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals