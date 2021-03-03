import React from "react";
import CarouselSIndus from "./CarouselSIndus";
import PCorporalAlturasFacial from "./PCorporalAlturasFacial";
import PManualAuditiva from "./PManualAuditiva";
import PVisualRespiratoria from "./PVisualRespiratoria";
import "./style/SeguridadIndustrial.css";

const SeguridadIndustrial = () => {
  return (
    <div>
      <CarouselSIndus />
      <PManualAuditiva />
      <div className="container">
        <img
          src="https://imgur.com/7mVPLRV.jpg"
          alt="calzado industrial"
          className="col mb-2"
        />
        <a
          className="btn btn-secondary btn-sm mx-3 mb-4"
          href="https://drive.google.com/file/d/1DqfI4U0X_DOD3DUZvJmp361lEjCbPA7S/view?usp=sharing"
        >
          VER FICHA TÉCNICA
        </a>
      </div>
      <PVisualRespiratoria />
      <div className="container">
        <img
          src="https://imgur.com/tHvFKJb.jpg"
          alt="Respirador plegable"
          className="col mb-2"
        />
        <a
          className="btn btn-secondary btn-sm mx-3 mb-4"
          href="https://drive.google.com/file/d/1DZJVgBsEqtQyol4dZ92PnFiH5JFErlqa/view?usp=sharing"
        >
          VER FICHA TÉCNICA
        </a>
      </div>
      <PCorporalAlturasFacial />
    </div>
  );
};

export default SeguridadIndustrial;
