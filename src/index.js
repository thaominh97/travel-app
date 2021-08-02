import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/vollkorn/Vollkorn-Italic-VariableFont_wght.ttf'
import './fonts/vollkorn/Vollkorn-VariableFont_wght.ttf'
import './fonts/googleSans/OpenSans-Regular.ttf'
import './fonts/volkhov/Volkhov-Regular.ttf'
import './fonts/poppins/Poppins-Medium.ttf'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
