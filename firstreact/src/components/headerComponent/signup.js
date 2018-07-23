import React, { Component } from 'react';
import styles from  './signup.css';
import Login from './login';
import Route from 'react-router-dom/Route';

//import logo from './logo.s
import { Jumbotron } from 'react-bootstrap';
var axios = require("axios");


class Signup extends Component {



  handleClick () {
    var params = new URLSearchParams();
    const value1 = document.getElementById("user").value
    const value2 = document.getElementById("pass").value
    const value3 = document.getElementById("email").value
    const value4 = document.getElementById("phone").value
    var emailregex = /^[a-z0-9.+&_%]+\@[a-z]+\.[a-z]{2,}$/
    var numregex = /\d{10}$/
    var pasregex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    if(value1!='' && value2!='' && value3!='' && value4!='' && value3.match(emailregex) && value4.match(numregex))
      {

                if(!value2.match(pasregex))
                  {
                  alert("Password must be minimum 8 characters, including one capital,small letter number and a  special character!")
                  }
                  else
                  {
                    fetch('http://localhost:8000/api/user/', {
                      method: 'POST',
                      body: JSON.stringify({
                         user : document.getElementById("user").value,
                         password : document.getElementById("pass").value,
                         email : document.getElementById("email").value,
                         phone : document.getElementById("phone").value
                          }),
                      headers:{
                        'Content-Type': 'application/json'
                      }
                    }).then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(response =>(response === "Not Interested") ? alert("Email already registered") : ((window.confirm('Succesfully registered. Go to login page?'))?window.location.assign("/login"):window.location.assign("/signup")));


                  //  window.location.assign('/login');
                }
        }
      else
      {
        alert("Please fill all the details")
      }

  }


  render() {

    return(
<div className="Signup">
<h1><Jumbotron>welcome to signup page</Jumbotron> </h1>
  <div className = "box">
          <form>
            <input type="text" label="username" id="user"className="signup-input" placeholder="Name" required/>
            <br></br>
            <input type="password"  id = "pass" className="signup-input" placeholder="Password"  required/>
            <br></br>
            <input type="text" label="emailaddress" id="email" className="signup-input" placeholder="Email"  required/>
            <br></br>
            <input type="text"  className="signup-input" placeholder="Contact No" id="phone"required/>
            <br></br>
            <button class="signupbutton" onClick={this.handleClick}>SUBMIT</button>
          </form>
  </div>
</div>
);
}
}
export default Signup;
