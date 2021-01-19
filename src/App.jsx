import React from "react";
import NavbarInduGlobal from "./components/NavbarInduGlobal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <NavbarInduGlobal />
          </div>
          <div className="logo-induGlobal col-6">
            <img style={{height:"150px"}} src="https://imgur.com/OjxGccl.jpg" alt="logo empresa" />
          </div>
        </div>
        <Switch>
          <Route path="/inicio">pagina de inicio</Route>
          <Route path="/quienesSomos">Quines Somos</Route>
          <Route path="/contactenos">Contáctenos</Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
