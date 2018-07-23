import React, { Component } from 'react';

import './Assests/css/default.min.css';
import { BrowserRouter as Router,Route} from 'react-router-dom';
//import logo from './logo.svg';
import {link} from 'react-router-dom';
import { Jumbotron ,Grid,Row,Image,Button } from 'react-bootstrap';
import Login from './components/headerComponent/login';
import Signup from './components/headerComponent/signup';
import Profile from './components/profile/profile';
import Header from './components/headerComponent/header';
import Family from './components/family/family';
import Images from './components/images/images';
import Story from './components/story/writestory';
import Corousals from './components/Corousal/corousal';
import Footer from './components/footerComponent/footer';
const axios = require('axios')


//import logo from './logo.svg';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

      <Route exact path = "/" component = {Header} />
      <Route exact path = "/" component = {Images} />
      <Route exact path = "/" component = {Corousals} />
      <Route exact path = "/family" component = {Family}/>
      <Route exact path = "/login" component = {Login}/>
      <Route exact path = "/signup" component = {Signup}/>
      <Route exact path ="/profile" component={Profile}/>
      <Route exact path ="/writestory" component={Story}/>
        </div>
      </Router>
    );
  }
}

export default App;
