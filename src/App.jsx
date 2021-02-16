import React from "react";
import NavbarInduGlobal from "./components/NavbarInduGlobal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-3 col-sm-4 col-lg-9 px-1" style={{ width: "350px" }}>
              <NavbarInduGlobal />
            </div>
            <div className="logo-induGlobal col-4 col-sm-3 col-lg-3 mt-5">
              <img
                style={{ width: "250px" }}
                src="https://imgur.com/OjxGccl.jpg"
                alt="logo empresa"
              />
            </div>
          </div>
        </div>
          <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/inicio" component={Inicio} />
            <Route path="/InduGlobal" component={Inicio} />
            <Route path="/quienesSomos">Quines Somos</Route>
            <Route path="/contactenos">Contáctenos</Route>
            <Route path="/seguridad">seguridad</Route>
            <Route path="/herramientas">herramientas</Route>
            <Route path="/soldadura">Soldadura</Route>
            <Route path="/abrasivos">Abrasivos</Route>            
          </Switch>
      </div>
    </Router>
  );
};

export default App;
