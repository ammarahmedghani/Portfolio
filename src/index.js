import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './components/Main';
import SideNav from './components/SideNav';
import MobNav from './components/MobNav';
import {withRouter} from 'react-router';
import Porfolio from './components/Porfolio';
import Contact from './components/Contact';
import Cv from './components/Cv';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>

  <HashRouter>
  
      <Route path = "/contact" component={withRouter(Contact)} />
      <Route path = "/cv" component={withRouter(Cv)} />
      <Route path = "/porfolio" component={withRouter(Porfolio)} />
      <Route exact path = "/" component={withRouter(Main)} />
    
  </HashRouter> 
    <MobNav />  
    <SideNav />
    
    
    
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
