import React from "react";
import "./QuienesSomos.css";

const QuienesSomos = () => {
  return (
    <div className="container">
      <div className="row my-4">
        <img
          className="col-12 col-lg-6 my-2"
          src="https://imgur.com/LkiggOS.jpg"
          alt="imgenes-body"
        />
        <img
          className="col-12 col-lg-6 my-2"
          src="https://imgur.com/SZDA0le.jpg"
          alt="imagenes-body"
        />
      </div>
      <div id="body-QuienesSomos">
        <h3 style={{ color: "#014995" }} className="text-center">
          <strong>Comprometidos y Eficientes!</strong>
        </h3>
        <div className="row my-4">
          <div className="col-12 col-lg-6 my-2">
            La forma jurídica de <strong>Induglobal Group S.A.S.</strong> es
            SOCIEDAD POR ACCIONES SIMPLIFICADA y su principal actividad es
            "Comercio al por menor de articulos de ferreteria pinturas y
            productos en establecimientos especializados".
          </div>
          <div className="col-12 col-lg-6 my-2">
            Importamos, fabricamos y distribuimos productos con calidad y
            garantía para diferentes sectores de la industria. Brindamos
            soluciones integrales de acuerdo a las necesidades de nuestros
            clientes.
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 my-2 px-0">
            <img
              className="col"
              id="imagen-body"
              src="https://imgur.com/Z8qqpcv.jpg"
              alt="imgenes-body"
            />
            <div id="texto-imagenes1">
              <div className="text-center">
                <h2 className="text-center">Necesitas asesoría</h2>
                <form action="https://wa.link/boci2f">
                  <input type="submit" value="CONTÁCTANOS" className="btn btn-light"/>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 my-2 px-0">
            <img
              className="col img-texto"
              id="imagen-body"
              src="https://imgur.com/Yy7rEvn.jpg"
              alt="imagenes-body"
            />
            <div id="texto-imagenes2">
              <div className="text-center">
                <h2>¿Quieres ser distribuidor?</h2>
                <form action="https://wa.link/boci2f" style={{borderRadius: "10px"}}>
                  <input type="submit" value="CONTÁCTANOS" className="btn btn-light"/>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4" id="misionVision">
          <div className="col-12 col-lg-6 my-4">
            <h3 style={{ color: "#014995" }} className="text-start">
              <strong>Misión</strong>
            </h3>
            <p className="mt-4">
              Brindar un amplio portafolio de productos integrando diferentes
              sectores de la industria, permitiendo centralizar los procesos de
              compras para optimizar recursos, garantizando la calidad y
              satisfacción de nuestros clientes.
            </p>
          </div>
          <div className="col-12 col-lg-6 my-4">
            <h3 style={{ color: "#014995" }} className="text-start">
              <strong>Visión</strong>
            </h3>
            <p className="mt-4">
              Para el año 2022 lograr el posicionamiento y reconocimiento
              nacional como una empresa que ofrece un portafolio integral de
              productos y soluciones para la industria en general.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
