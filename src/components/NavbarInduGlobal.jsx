import React from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Dropdown,
} from "react-bootstrap";

export default function Example() {
  return (
    <Navbar bg="none" expand="lg" className="mt-5">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/" style={{ color: "gray" }}>
              INICIO
            </Link>
          </Nav.Link>
          <Nav.Link style={{ color: "blue", width: "140px" }}>
            <Link to="/quienesSomos">QUIENES SOMOS</Link>
          </Nav.Link>
          <Dropdown>
            <Dropdown.Toggle style={{ color: "blue"}} variant="none" id="dropdown-basic">PRODUCTOS</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/seguridad">Seguridad</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/herramientas">Herramientas</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/soldadura">Soldadura</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/abrasivos">Abrasivos</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link>
            <Link style={{ color: "gray" }} to="/contactenos">CONTÁCTENOS</Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
