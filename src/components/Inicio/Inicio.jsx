import React from "react";
import CarouselImages from "./CarouselImages";
import "./Inicio.css";

const Inicio = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="row align-items-center">
            <div className="col-12 col-sm-6 col-lg-3">
              <img
                className="mb-4 mx-3"
                style={{ width: "200px" }}
                src="https://imgur.com/FAtK0gn.jpg"
                alt="imagen"
              />
            </div>
            <div className="imgen-engineering col-12 col-sm-4 mb-2">
              <img
                style={{ width: "250px" }}
                src="https://imgur.com/YjCY6pJ.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 description">
              <p className="mx-4 pt-5">
                Induglobal Group S.A.S le ofrece todos los implementos y
                herramientas necesarias para la producción y seguridad en los
                procesos manufactureros de su empresa; <br />
                <p className="d-none d-sm-block">
                  nuestra amplia variedad de productos se enfoca en diversas
                  líneas basadas en soluciones que constantemente se emplean en
                  el desarrollo de la industria colombiana.
                </p>
              </p>
            </div>
            <img
              className="images-inicio"
              src="https://imgur.com/9IZHHIF.jpg"
            />
            <div className="col-lg-6">
              <div className="eslogan d-none d-lg-block mt-4">
                <h1>
                  ¡Un mundo de soluciones <br /> pensado para ti!
                </h1>
              </div>
              <div className="linea-titulos d-none d-lg-block">
                <img
                  style={{ width: "500px", height: "70px" }}
                  src="https://imgur.com/jibbr75.jpg"
                />
                <h5 className="text-uppercase ml-5">Porqué Elegirnos</h5>
                <p className="pt-5 px-5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-11 col-sm-10 col-md-10 col-lg-10 carouselImages">
            <CarouselImages />
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
