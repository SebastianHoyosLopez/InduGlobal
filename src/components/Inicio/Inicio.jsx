import React from "react";
import CarouselImages from "./CarouselImages";
import "./Inicio.css";

const Inicio = () => {
  return (
    <>
      <div className="container">
        <div className="d-block d-lg-none">
          <h1 className="text-center">
            ¡Un mundo de soluciones <br /> pensado para ti!
          </h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-3 d-flex justify-content-center">
            <img
              className="mb-2"
              style={{ width: "200px" }}
              src="https://imgur.com/FAtK0gn.jpg"
              alt="imagen"
            />
          </div>
          <div className="imgen-engineering col-12 col-md-12 col-lg-3 d-flex justify-content-center">
            <img
              className="mb-2"
              style={{ width: "250px" }}
              src="https://imgur.com/YjCY6pJ.jpg"
              alt=""
            />
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 description">
              <p className="mx-4 pt-5">
                Induglobal Group S.A.S le ofrece todos los implementos y
                herramientas necesarias para la producción y seguridad en los
                procesos manufactureros de su empresa, nuestra amplia variedad
                de productos se enfoca en diversas líneas basadas en soluciones
                que constantemente se emplean en el desarrollo de la industria
                colombiana.
              </p>
              <img
                className="image-inicio"
                src="https://imgur.com/9IZHHIF.jpg"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div className=" eslogan col-lg-12 d-none d-lg-block">
                <h1 className="text-sm-center">
                  ¡Un mundo de soluciones <br /> pensado para ti!
                </h1>
              </div>
              <div className="d-none d-lg-block linea-titulos col-12 col-md-12 col-lg-12">
                <img src="https://imgur.com/jibbr75.jpg" alt="" />
                <h5 className="text-uppercase ml-5">Porqué Elegirnos</h5>
                <p className="pt-5 px-4 col-12">
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
        <div className="d-block d-lg-none linea-titulos col-12 col-md-12 col-lg-12">
          <img src="https://imgur.com/jibbr75.jpg" alt="" />
          <h5 className="text-uppercase ml-5">Porqué Elegirnos</h5>
          <p className="pt-5 px-4 col-12">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel
          </p>
        </div>
        <div className="col-11 col-sm-10 col-md-10 col-lg-10 d-inline-flex carouselImages mt-4">
          <CarouselImages />
        </div>
      </div>
    </>
  );
};

export default Inicio;
