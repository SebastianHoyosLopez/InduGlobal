import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./NavbarInduGlobal.css";

import {
  Navbar,
  NavLink,
  Nav,
  Dropdown,
} from "react-bootstrap";

export default function Example() {
  return (
    <>
      <div id="redesSociles">
        <div className="d-flex justify-content-start">
          <a href="https://www.instagram.com/induglobalferretera/">
            <div id="instagram"></div>
          </a>
          <a href="https://www.facebook.com/induglobalferretera">
            <div id="facebook"></div>
          </a>
        </div>
      </div>
      <Navbar bg="none" expand="lg" className="mt-5">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto menu">
            <LinkContainer to="/">
              <NavLink className="text-secondary">INICIO</NavLink>
            </LinkContainer>
            <LinkContainer
              to="/quienesSomos"
              style={{ width: "140px", color: "#014995" }}
            >
              <NavLink>QUIENES SOMOS</NavLink>
            </LinkContainer>
            <Dropdown>
              <Dropdown.Toggle
                style={{ color: "#014995", marginLeft: "-12px" }}
                variant="none"
                id="dropdown-basic"
              >
                <strong>PRODUCTOS</strong>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <LinkContainer to="/seguridadIndustrial">
                    <NavLink>Seguridad Industrial</NavLink>
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
              <NavLink className="text-secondary">CONTÁCTENOS</NavLink>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
