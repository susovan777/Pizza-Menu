import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* 
  👉 Strict Mode enables the following checks in development:
      - Your components will re-render an extra time to find bugs caused by impure rendering.
      - Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
      - Your components will be checked for usage of deprecated APIs.
*/
root.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* 🚩🚩
// React v18
const root = ReactDOM.createElement(document.getElementById("root"));
root.render(<App />);

// before v18
React.render(<App />);
*/





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
