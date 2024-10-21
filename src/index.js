// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this file exists or remove this line if not needed
import App from './App'; // Ensure App.js exists in the src folder
import reportWebVitals from './reportWebVitals'; // Ensure reportWebVitals.js exists in the src folder

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
