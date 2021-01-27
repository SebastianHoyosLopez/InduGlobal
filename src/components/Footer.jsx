import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer mt-0">
      <div className="container">
        <div className="row">
          <div className="col-4 py-4">
            <h5 className="text-uppercase">Sucríbase a nuestro boletín</h5>
            <p>
              Sucríbase a nuestro boletín y reciba noticias sobre nuestro nuevos
              productos
            </p>
            <div className="form-group row">
              <input
                className="form-control col"
                placeholder="email"
                type="text"
                value="email"
              />
              <button className="col mx-1 btn btn-secondary">Siguiente</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
