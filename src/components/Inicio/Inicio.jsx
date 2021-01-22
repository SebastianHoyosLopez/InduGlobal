import React from "react";
import "./Inicio.css";

const Inicio = () => {
  return (
    <>
      <div className="row item-align-center">
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
        <div className="col-12 col-md-6 description">
          <p className="mx-2 pt-4">
            Induglobal Group S.A.S le ofrece todos los implementos y
            herramientas necesarias para la producción y seguridad en los
            procesos manufactureros de su empresa; nuestra amplia variedad de
            productos se enfoca en diversas líneas basadas en soluciones que
            constantemente se emplean en el desarrollo de la industria
            colombiana.
          </p>
        </div>
        <div className="col-12 col-md-6 mt-3">
          <h1>
            ¡Un mundo de soluciones <br /> pensado para ti!
          </h1>
        </div>
      </div>
    </>
  );
};

export default Inicio;
