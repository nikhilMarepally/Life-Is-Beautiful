import React, { Component } from 'react';
//import logo from './logo.svg';

class Corousals extends Component {
  render() {
    return (
<corousal>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">

          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>


          <div class="carousel-inner" >

            <div class="item active ">
              <img src="image2.jpeg" ></img>
            </div>


            <div class="item">
            <img src = "image.jpg" ></img>
            </div>

              <div class="item">
                <img src="image6.jpg" ></img>
              </div>

              <div class="item">
                      <img src="image7.jpg" ></img>
              </div>
              <div class="item">
                      <img src="image8.jpg" ></img>
              </div>


          </div>


          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="sr-only">Next</span>
          </a>

        </div>

</corousal>

    );
  }
}

export default Corousals;
