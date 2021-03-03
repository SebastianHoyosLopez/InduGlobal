import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className=" container d-flex justify-content-end">
        <a href="https://wa.link/boci2f">
          <img
            id="whatsapp"
            src="https://imgur.com/wE5RGRe.jpg"
            alt="whatsapp"
          />
        </a>
      </div>
      <div className="container my-2">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-4 py-3">
            <h4>
              Sucríbase a nuestro boletín y reciba noticias sobre nuevos
              productos
            </h4>
            <div className="form-group row mx-1 my-3">
              <input
                className="form-control col"
                placeholder="email"
                type="text"
              />
              <button className="col mx-1 btn btn-secondary btn-sm">Siguiente</button>
            </div>
          </div>
          <div className="col-12 col-lg-3 my-3">
            <h4>UBICACIÓN:</h4>
            <h6>Cl. 2 # 55-88, Medellin - Colombia</h6>
            <h4>CONTACTO:</h4>
            <h6>
              PBX: (4) 5831616-(+57)3504304542 <br />
              Bogotá: (+57)3005061558
            </h6>
          </div>
          <div className="col-12 col-lg-5 my-5">
            <img
              className="col-8"
              src="https://imgur.com/kRXUxew.jpg"
              alt="engineeringWelding"
            />
            <img
              className="col-4"
              style={{ marginBottom: "12px" }}
              src="https://imgur.com/Hy51xlO.jpg"
              alt="indusafe"
            />
            <h6 className="text-center">
              enginneringwelding.com.co – indusafe.com.co
            </h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
