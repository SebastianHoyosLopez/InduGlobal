import React from "react";
import { Carousel } from "react-bootstrap";
import "./Inicio.css";

const Inicio = () => {
  return (
    <>
      <Carousel
        id="carousel"
        className="carousel-fade"
        autoPlay={true}
        controls={true}
        indicators={true}
      >
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://imgur.com/33Fhtif.jpg"
            alt="imagenes de muestra 2"
          />
          <Carousel.Caption>
            <div className="text-start mb-3 col-12 col-md-8 col-lg-4">
              <h2>
                TODOS LOS IMPLEMENTOS DE SEGURIDAD QUE SU EMPRESA NECESITA
              </h2>
              <hr />
            </div>
            <h4 className="col text-start">VER MÁS</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://imgur.com/fG0NZqJ.jpg"
            alt="imagenes de muestra 1"
          />
          <Carousel.Caption>
            <div className="text-start mb-3 col-12 col-md-6 col-lg-4">
              <h2>TENEMOS UN MUNDO DE SOLUCIONES PENSADO PARA TI</h2>
              <hr />
            </div>
            <h4 className="col text-start">VER MÁS</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://imgur.com/3SJGKlm.jpg"
            alt="imagenes de muestra 3"
          />
          <Carousel.Caption>
            <div className="text-start mb-3 col-12 col-md-8 col-lg-4">
              <h2>MASCARILLAS CERTIFICADAS PARA PROTECCIÓN Y BIOSEGURIDAD</h2>
              <hr />
            </div>
            <h4 className="col text-start">VER MÁS</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="m-5 row">
        <div className="col-12 col-lg-6">
          <img
            className="col-12"
            src="https://imgur.com/WoPIb4c.jpg"
            alt="Seguridad IGS"
          />
          <p className="m-3">
            Induglobal Group S.A.S le ofrece todos los implementos y
            herramientas necesarias para la producción y seguridad en los
            procesos manufactureros de su empresa; nuestra amplia variedad de
            productos se enfoca en diversas líneas basadas en soluciones que
            constantemente se emplean en el desarrollo de la industria
            colombiana.
          </p>
        </div>
        <div id="recuadros" className="col-12 col-lg-6">
          <img
            className="col-6 col-lg-4 p-1"
            src="https://imgur.com/Qz3Xbqr.jpg"
            alt=""
          />
          <img
            className="col-6 col-lg-4 p-1"
            src="https://imgur.com/rHzdpg5.jpg"
            alt=""
          />
          <img
            className="col-6 col-lg-4 p-1"
            src="https://imgur.com/Gh8Vjm7.jpg"
            alt=""
          />
          <img
            className="col-6 col-lg-4 p-1"
            src="https://imgur.com/cQAMqYl.jpg"
            alt=""
          />
          <img
            className="col-6 col-lg-4 p-1"
            src="https://imgur.com/pZAOCC9.jpg"
            alt=""
          />
          <img
            className="col-6 col-lg-4 p-1"
            src="https://imgur.com/OpLj5rf.jpg"
            alt=""
          />
          <h4 className="col-12 text-end mt-2" style={{ color: "#014995" }}>
            IMPLEMENTOS Y HERRAMIENTAS
          </h4>
        </div>
      </div>
    </>
  );
};

export default Inicio;
