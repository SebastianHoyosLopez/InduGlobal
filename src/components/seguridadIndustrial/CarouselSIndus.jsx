import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselSIndus = () => {
  return (
    <div>
      <Carousel
        id="carousel"
        className="carousel-fade"
        autoPlay={true}
        controls={true}
        indicators={true}
      >
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://imgur.com/6zd3Qnj.jpg"
            alt="imagenes de muestra 1"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://imgur.com/oMmOxcr.jpg"
            alt="imagenes de muestra 2"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="https://imgur.com/xbOyQ6X.jpg"
            alt="imagenes de muestra 2"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselSIndus;
