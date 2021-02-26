import React from "react";

const PManualAuditiva = () => {
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
            Protección Manual
          </h2>
          <div className="row">
            <div className="col-6">
              <img
                className="col"
                src="https://imgur.com/NRprjRF.jpg"
                alt="Protección manual"
              />
              <div className="d-grid gap-2 my-4">
                <button
                  className="btn btn-primary"
                  style={{ background: "#014995", borderRadius: "10px" }}
                >
                  Ver Productos
                </button>
              </div>
            </div>
            <div className="col-6" style={{ marginTop: "-5px" }}>
              <p>
                Brindamos diferentes alternativas para cada una de sus
                necesidades de protección manual. sin las manos, no podríamos
                realizar muchas actividades que consideramos naturales, para
                protección manual se utilizan los guantes de seguridad, que son
                equipos de protección individual, contra los posibles riesgos en
                el área laboral.
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
            Protección Auditiva
          </h2>
          <div className="row">
            <div className="col-6">
              <img
                className="col"
                src="https://imgur.com/ExmSQYE.jpg"
                alt="Protección Auditiva"
              />
              <div className="d-grid gap-2 my-4">
                <button
                  className="btn btn-primary"
                  style={{ background: "#014995", borderRadius: "10px" }}
                >
                  Ver Productos
                </button>
              </div>
            </div>
            <div className="col-6" style={{ marginTop: "-5px" }}>
              <p>
                La exposición a ruidos molestos puede dañar permanentemente el
                oído, al igual que producir estrés e incrementar la presión
                sanguínea, contribuyendo a enfermedades del corazón.
              </p>
              <p>
                Por las razones antes mencionadas, es indispensable que los
                trabajadores cuenten con el equipo adecuado y sean entrenados en
                su uso antes de realizar actividades que impliquen exposición al
                ruido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PManualAuditiva;
