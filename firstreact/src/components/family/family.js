import React, { Component } from 'react';
//import logo from './logo.svg';
import { Grid , Jumbotron , Carousel} from 'react-bootstrap';
class Family extends Component {
  render() {
    return (
      <div class = "fam">
        <Grid>
          <Jumbotron>
            <h2><b>Family is not a Important thing,it is everything</b></h2>
            <p>To enjoy good health, to bring true happiness to one's family, to bring peace to all, one must first discipline and control one's own mind. If a man can control his mind he can find the way to Enlightenment, and all wisdom and virtue will naturally come to him
            .The unconditional love shown by them towards us is priceless. Family is not only parents, friends or relatives but it is all the living beings on the earth who share your feelings, push you when you are down, praise for your achievement , punish for your mistakes.
            Living beings who try to show love and affection towards you come into your family</p>
          </Jumbotron>

          <Carousel>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">

              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

      <div class="carousel-inner" >
            <div class="item active ">
              <img src="father3.jpeg" ></img>
            </div>

            <div class="item">
              <img src = "father1.jpg" ></img>
            </div>

            <div class="item">
              <img src="father6.jpg" ></img>
            </div>

            <div class="item">
                <img src="mother7.jpg" ></img>
            </div>

            <div class="item">
                  <img src="mother.jpg" ></img>
            </div>

        </div>
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="sr-only">Next</span>
            </a>
        </div>
    </Carousel>
  </Grid>
</div>

  );
}
}

export default Family;
