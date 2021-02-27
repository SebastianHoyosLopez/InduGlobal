import React from "react";

const PVisualRespiratoria = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 my-4">
          <h2
            className="text-center mb-5"
            style={{
              background: "gray",
              color: "white",
            }}
          >
            Protección Visual
          </h2>
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                className="col"
                src="https://imgur.com/LZ0YJFd.jpg"
                alt="Protección manual"
              />
              <div className="d-grid gap-2 my-4">
                <button
                  className="btn btn-primary text-uppercase"
                  style={{ background: "#014995", borderRadius: "10px" }}
                >
                  Ver Productos
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6" style={{ marginTop: "-5px" }}>
              <p>
                La mayoría de las lesiones en los ojos pueden ser evitadas
                usando los equipos de protección adecuados protegiendo los ojos
                de frente y de lado de una gran variedad de peligros y riesgos,
                como objetos, partículas sólidas, luz visible, radiación
                infrarroja ultravioleta, e incluso de salpicaduras químicas.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 my-4">
          <h2
            className="text-center mb-5"
            style={{
              background: "gray",
              color: "white",
            }}
          >
            Protección Respiratoria
          </h2>
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                className="col"
                src="https://imgur.com/EEirh8N.jpg"
                alt="Protección Auditiva"
              />
              <div className="d-grid gap-2 my-4">
                <button
                  className="btn btn-primary text-uppercase"
                  style={{ background: "#014995", borderRadius: "10px" }}
                >
                  Ver Productos
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6" style={{ marginTop: "-5px" }}>
              <p>
                Los equipos de protección respiratoria resguardan las vías
                respiratorias de los usuarios y trabajadores, protegiendolos
                contra los contaminantes ambientales, tales como polvos, gases,
                vapores, nieblas, bacterias o humos, que puedan afectar de una u
                otra forma la salud de las personas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PVisualRespiratoria;
