import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 py-4">
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
              />
              <button className="col mx-1 btn btn-secondary">Siguiente</button>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 pt-3 text-center">
            <h5 className="text-uppercase pt-2">Línea de productos:</h5>
            <ul className="list-group pb-4">
              Seguridad Industrial <br />
              Herramientas <br />
              Soldadura <br />
              Abrasivos <br />
            </ul>
          </div>
          <div className="col-6 col-lg-3 text-uppercase text-end pt-5">
            <h5>
              <img
                style={{ height: "25px" }}
                className="mr-2"
                src="https://imgur.com/kY2q8wE.jpg"
                alt="icono-ubicación"
              />
              Ubicación:
            </h5>
            <p>
              Cl. 2 # 55-88 <br /> Medellin - Colombia
            </p>
          </div>
          <div className="col-6 col-lg-3 text-uppercase text-center pt-5">
            <h5>Contacto:</h5>
            <p>PBX: (4) 5831616 <br/>+573504304542</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
