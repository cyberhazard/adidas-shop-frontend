// eslint-disable react/jsx-filename-extension

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './assets/css/fonts.css';
import './assets/css/simple-reset.css';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
