import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/bootstrap/css/bootstrap.min.css"
import "./assets/fonts/fontawesome-all.min.css"
import "./assets/css/Search-Field-With-Icon.css"
import "./assets/css/Team-Horizontal-1.css"
import "./assets/css/Team-Horizontal.css"
import "./assets/css/untitled.css"
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.js';
// import bootstrap from "./assets/js/bs-init.js"
import "./assets/img/dogs/logo.png"
import "./assets/img/avatars/avatar4.jpeg"
import "./assets/img/dogs/image2.jpeg"
// import "./assets/js/chart.min.js"
// import "./assets/js/bs-init.js"
// import "./assets/js/theme.js"
import "./"
import "./"


import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
