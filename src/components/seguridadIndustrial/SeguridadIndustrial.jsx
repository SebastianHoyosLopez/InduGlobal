import React from "react";
import PCorporalAlturasFacial from "./PCorporalAlturasFacial";
import PManualAuditiva from "./PManualAuditiva";
import PVisualRespiratoria from "./PVisualRespiratoria";
import "./style/SeguridadIndustrial.css";

const SeguridadIndustrial = () => {
  return (
    <div>
      <div className="seguridadIndustrialImg1">
        <img
          src="https://imgur.com/6zd3Qnj.jpg"
          className="img-fluid mb-5"
          alt="seguridad Indistrial"
        />
      </div>
      <PManualAuditiva />
      <div className="container">
        <img
          src="https://imgur.com/7mVPLRV.jpg"
          alt="calzado industrial"
          className="col mb-5"
        />
      </div>
      <PVisualRespiratoria />
      <div className="container">
        <img
          src="https://imgur.com/tHvFKJb.jpg"
          alt="Respirador plegable"
          className="col mb-5"
        />
      </div>
      <PCorporalAlturasFacial />
    </div>
  );
};

export default SeguridadIndustrial;
