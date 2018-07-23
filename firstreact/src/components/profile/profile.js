import Route from 'react-router-dom/Route';
import React, { Component } from 'react';
import styles from './profile.css'

import { Jumbotron ,Grid,Row,Image,Button } from 'react-bootstrap';

  var params = new URLSearchParams();

var myData;
var obj;
class Profile extends Component{

  componentWillMount(){
      myData = localStorage['objectToPass'];
      localStorage.removeItem( 'objectToPass' );
      obj = JSON.parse(myData);
      alert(obj.email);
      params.append('email',obj.email)
      fetch(`http://localhost:8000/api/user/:email`,
      {
       method: 'GET',
     }).then(res => res.json())
     .catch(error => console.error('Error:', error)).then(response => alert(JSON.stringify(response)));

      alert( "firstData " +  myData);
    //  alert( "email" + {myData.email});
  }



render(){

  return(
<div className = "profile">
            <Jumbotron>
                        <h1>Welcome to Profile page</h1>
                        <div className ="lis">

                                    <a href ="/"><strong>Home</strong></a>
                                    <a href = "/"><strong> Logout</strong></a>

                        </div>
            </Jumbotron>

          <div className = "header">
            <h1> <strong>Difficult roads often lead to Beautiful locations </strong> </h1>
          </div>
          <div className = "Nav">

            <a href ="#">Read Experiences</a>
            <a href = "/writestory"> Write Experiences </a>
            <a href = "#"> Watch videos </a>
            <a href ="#"> Life is Beautiful </a>



          </div>

          <div className = "row">
                <div className =" column side">
                    <h2>column</h2>
                </div>
                <div className =" column middle">


                  </div>
                <div className =" column side">
                  <input type ="text" value= {obj.email} />
                </div>
          </div>
          <div className = "footer">
              <h1>Contact: admin@lifeisbeautiful.com</h1>

          </div>
</div>
)
}



}
export default Profile;
