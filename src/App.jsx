import React from "react";
import NavbarInduGlobal from "./components/NavbarInduGlobal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import { DropdownItem } from "reactstrap";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-3 col-sm-3 col-lg-8" style={{ width: "350px" }}>
              <NavbarInduGlobal />
            </div>
            <div className="logo-induGlobal col-4 col-sm-6 col-lg-4 mt-4">
              <img
                style={{ width: "350px" }}
                src="https://imgur.com/OjxGccl.jpg"
                alt="logo empresa"
              />
            </div>
          </div>
          <Switch>
            <Route path="/seguridad">seguridad</Route>
            <Route path="/" exact component={Inicio} />
            <Route path="/inicio" component={Inicio} />
            <Route path="/InduGlobal" component={Inicio} />
            <Route path="/quienesSomos">Quines Somos</Route>
            <Route path="/contactenos">Contáctenos</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
