import React, { Component } from 'react';
//import logo from './logo.svg';
import {Jumbotron} from 'react-bootstrap';
class Header extends Component {
  render() {
    return (

      <header>
          <div className = "LOGO">
            </div>

      <nav>
          <ul>
               <li>
               <a href = "#" >Home</a>
               </li>
               <li>
               <a href = "/login">Login</a>
               </li>
               <li>
               <a href = "#">Contact</a>
               </li>
          </ul>

      </nav>
      </header>



    );
  }
}

export default Header;
