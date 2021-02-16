import React from "react";
import { LinkContainer } from "react-router-bootstrap";

import {
  Navbar,
  NavLink,
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
          <LinkContainer to="/">
            <NavLink>INICIO</NavLink>
          </LinkContainer>
          <LinkContainer to="/quienesSomos" style={{color: "blue"}}>
            <NavLink>
              QUIENES SOMOS
            </NavLink>
          </LinkContainer>
          <Dropdown>
            <Dropdown.Toggle
              style={{ color: "blue" }}
              variant="none"
              id="dropdown-basic"
            >
              PRODUCTOS
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <LinkContainer to="/seguridad">
                  <NavLink>Seguridad</NavLink>
                </LinkContainer>
              </Dropdown.Item>
              <Dropdown.Item>
                <LinkContainer to="/herramientas">
                  <NavLink>Herramientas</NavLink>
                </LinkContainer>
              </Dropdown.Item>
              <Dropdown.Item>
                <LinkContainer to="/soldadura">
                  <NavLink>Soldadura</NavLink>
                </LinkContainer>
              </Dropdown.Item>
              <Dropdown.Item>
                <LinkContainer to="/abrasivos">
                  <NavLink>Abrasivos</NavLink>
                </LinkContainer>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <LinkContainer to="/contactenos">
            <NavLink>CONTÁCTENOS</NavLink>
          </LinkContainer>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
