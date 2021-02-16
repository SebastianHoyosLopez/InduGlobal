import React from "react";
import "./CarouselImages.css";
import { Carousel } from "react-bootstrap";

const CarouselImages = () => {
  return (
    <div className="bg-dark">
      <Carousel>
        <Carousel.Item>
          <div className="row">
            <div className="col-12 col-md-3 mt-2 mx-1">
              <img
                className="d-none d-md-block w-100 offset-6 offset-lg-6 offset-sm-6"
                src="https://imgur.com/2AVdO7z.jpg"
                alt="First slide"
              />
            </div>
            <div className="col-12 col-md-3 mt-2 mx-1">
              <img
                className="d-block w-100 offset-md-6 offset-lg-6 "
                src="https://imgur.com/dJo9J7l.jpg"
                alt="Third slide"
              />
            </div>
            <div className="col-12 col-md-3 mt-2 mx-1">
              <img
                className="d-none d-md-block w-100 offset-6 offset-lg-6 offset-sm-6"
                src="https://imgur.com/0DYg10C.jpg"
                alt="Third slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-12 col-md-3 mt-2 mx-1">
              <img
                className="d-none d-md-block w-100 offset-6 offset-lg-6 offset-sm-6"
                src="https://imgur.com/38qFg3U.jpg"
                alt="First slide"
              />
            </div>
            <div className="col-12 col-md-3 mt-2 mx-1">
              <img
                className="d-block w-100 offset-lg-6 offset-md-6"
                src="https://imgur.com/RQbKQ0R.jpg"
                alt="Third slide"
              />
            </div>
            <div className="col-12 col-md-3 mt-2 mx-1">
              <img
                className="d-none d-md-block w-100 offset-6 offset-lg-6 offset-sm-6"
                src="https://imgur.com/dhtav9q.jpg"
                alt="Third slide"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselImages;
