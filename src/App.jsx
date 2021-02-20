import React from "react";
import NavbarInduGlobal from "./components/NavbarInduGlobal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <div className="row">
            <div className="col-3 col-sm-4 col-lg-9 px-1 mt-1" style={{ width: "350px" }}>
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
          <br/>
        </div>
          <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/inicio" component={Inicio} />
            <Route path="/InduGlobal" component={Inicio} />
            <Route path="/quienesSomos">{Inicio}</Route>
            <Route path="/contactenos">{Inicio}</Route>
            <Route path="/seguridad">{Inicio}</Route>
            <Route path="/herramientas">{Inicio}</Route>
            <Route path="/soldadura">{Inicio}</Route>
            <Route path="/abrasivos">{Inicio}</Route>            
          </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
