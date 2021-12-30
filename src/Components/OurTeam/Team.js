import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Team.css'

export default class Team extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 6
    };
    return (
      
      <div id="members">
        <h1 className="team-heading">Our Team</h1>
        <Slider {...settings}>
          <div className="txt">
            <img className="img-center" src="https://thumbs.dreamstime.com/b/imagination-girl-kiss-lion-love-nature-abstract-concept-young-steals-male-wildlife-children-like-to-imagine-play-129595579.jpg" alt="sliderImage" />
            <cite>Imran Khan - </cite><strong> CEO</strong>
          </div>
          <div className="txt">
            <img className="img-center" src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg" alt="sliderImage" height="300px" width="300px"/>
            <cite>Imran Khan - </cite><strong> CEO</strong>
          </div>
          <div className="txt">
            <img className="img-center" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="sliderImage" height="300px" width="300px"/>
            <cite>Imran Khan - </cite><strong> CEO</strong>
          </div>
          <div className="txt">
            <img className="img-center" src="https://thumbs.dreamstime.com/b/imagination-girl-kiss-lion-love-nature-abstract-concept-young-steals-male-wildlife-children-like-to-imagine-play-129595579.jpg" alt="sliderImage" />
            <cite>Imran Khan - </cite><strong> CEO</strong>
          </div>
          <div className="txt">
            <img className="img-center" src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg" alt="sliderImage" height="300px" width="300px"/>
            <cite>Imran Khan - </cite><strong> CEO</strong>
          </div>
          <div className="txt">
            <img className="img-center" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="sliderImage" height="300px" width="300px"/>
            <cite>Imran Khan - </cite><strong> CEO</strong>
          </div>
        </Slider>
      </div>
    );
  }
}