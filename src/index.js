import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
// local imports
import './index.css';
import App from './App';

// attach react to the page
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
