import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Router from './Router';
import NewRouter from './NewRouter';
// import Switch from './Switch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Router/> */}
    <NewRouter/>  
    {/* <Switch/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
