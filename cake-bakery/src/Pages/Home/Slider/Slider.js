import React from "react";
import { Carousel } from "react-bootstrap";

import banner1 from "../../../images/banner1.jpg";
import banner2 from "../../../images/banner2.jpg";
import banner3 from "../../../images/banner3.jpg";

const Slider = () => {
  return (
    <div className="container , w-75, mt-5">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3> Are you looking for an Affordable oven? </h3>
            <p> We have the best in the market!!! </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3> Our Ovens come with Warrenty ! </h3>
            <p>Dont be sad when something doesnt work, were here for you.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3> Quality and Value </h3>
            <p> WE HAVE BOTH ! </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
