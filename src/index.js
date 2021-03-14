import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer'
import Barchart from './barchart'
import NavigationBar from './NavigationBar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestLoginForm from './Login'

ReactDOM.render(
  <div>
    <React.Fragment>
      <Router>
        <NavigationBar />
      </Router>
    </React.Fragment>
    <App />
    <Footer />
  </div>,
  document.getElementById('root')
);


