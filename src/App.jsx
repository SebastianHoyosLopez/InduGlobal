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
            <div className="col-3 col-sm-3 col-lg-8" style={{ width: "350px" }}>
              <NavbarInduGlobal />
            </div>
            <div className="logo-induGlobal col-4 col-sm-6 col-lg-4 mt-4">
              <img
                style={{ width: "400px" }}
                src="https://imgur.com/OjxGccl.jpg"
                alt="logo empresa"
              />
            </div>
          </div>
          <Switch>
            <Route href="/inicio">
              <Inicio />
            </Route>
            <Route href="/quienesSomos">Quines Somos</Route>
            <Route href="/contactenos">Contáctenos</Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
