import React, { Component } from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom';
import Profile from '../profile/profile';
import Route from 'react-router-dom/Route';
import Signup from './signup';
import {Redirect} from 'react-router-dom';
import styles from './login.css';
const mongoose = require("mongoose");
const http = require('http');
const axios = require('axios')

class Login extends Component {



handleClick () {

  var params = new URLSearchParams();

//  var params = new URLSearchParams();
  const value1 = document.getElementById("user").value
  const value2 = document.getElementById("pass").value
  params.append('email',value1)
  params.append('password',value2)
  var firstData = {email : value1,password : value2};

  //console.log(JSON.toString(firstData))
//  console.log(JSON.parse(firstData))
  console.log(JSON.stringify(firstData))
  console.log(firstData);
  localStorage.setItem( 'objectToPass', JSON.stringify(firstData));
  axios.post('http://localhost:8000/api/user/auth',  params ).
  then(res=>(JSON.stringify(res.data) == "1") ? window.location.assign('/profile'):alert("Incorrect username or password"));

  }

handleSignUpClick() {
<Route to = "/signup" />
}

  render() {
              return (
                  <div className ="login">
                      <div className="split left">
                        <div className="centered">
                          <img src= "inspiration2.jpg" alt="inspiration"></img>
                        </div>
                      </div>

                    <div className="split right">
                      <div className= "centered">
                        <form className= "log" >
                          <h1 className= "login-title">BE THE CHANGE!</h1>
                          <input type="text" className="login-input" id="user" placeholder="Username" required></input>
                          <br></br>
                          <input type="password" className="login-input" id="pass" placeholder="Password" required></input>
                          <br></br>
                          <button  value="submit" onClick = {this.handleClick} className="login-button">LOGIN</button>
                        </form>
                        <p><strong>Having no account ?<italic>SIGN-UP</italic> first</strong></p>
                         <a href = "/signup">SignUp</a>
                      </div>
                    </div>
                  </div>

                );

           }

}


export default Login;
