import React from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarInduGlobal = () => {
  return (
    <Navbar bg="none" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-bav">
        <Nav className="mt-5 ml-auto">
          <NavLink className="btn mr-2" to="/inicio">
            INICIO
          </NavLink>
          <NavLink style={{color:"blue"}} className="btn mr-1" to="/quienesSomos">
            QUIENES SOMOS
          </NavLink>
          <NavDropdown style={{color:"blue"}} title="PRODUCTOS" id="basic-nav-dropdown">
            <NavDropdown.Item>Seguridad Industrial</NavDropdown.Item>
            <NavDropdown.Item>Herramientas</NavDropdown.Item>
            <NavDropdown.Item>Soldadura</NavDropdown.Item>
            <NavDropdown.Item>Abrasivos</NavDropdown.Item>
          </NavDropdown>
          <NavLink className="btn mr-2" to="/contactenos">
            CONTÁCTENOS
          </NavLink>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarInduGlobal;
