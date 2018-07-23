import React,{Component} from 'react';
import {Jumbotron}  from 'react-bootstrap';
import styles from './writestory.css';

class Story extends Component{

constructor(props)
{
  super(props);
  this.state = {value:' '};
  this.handleClick = this.handleClick.bind(this);
  this.handleChange = this.handleChange.bind(this);
}

handleChange(event)
{
  this.setState({value: event.target.value});
}



handleClick(event)
{
  alert("The text  is" + this.state.value);

  event.preventDefault();
}
render(){


return(

  <div className = "story">

        <Jumbotron>
                <h1>Welcome, Share your Experiences.. </h1>
        </Jumbotron>

        <div className ="place">

            <form>
            <div className="form">
              <textarea id = "textid" onChange = { this.handleChange}  value={this.state.value} class="area" ></textarea>
              <br></br>

              <button class = "button" onClick = {this.handleClick} value="Click">SUBMIT</button>
            </div>
            </form>


        </div>

</div>





);





}



}
export default Story;
