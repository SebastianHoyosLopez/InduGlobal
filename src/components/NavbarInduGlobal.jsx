import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./NavbarInduGlobal.css";

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
    <>
      <div id="redesSociles">
        <a href="https://www.instagram.com/induglobalferretera/">
          <img
            className="mx-1"
            src="https://imgur.com/JLh1mqC.jpg"
            alt="instagram"
          />
        </a>
        <a href="https://www.facebook.com/induglobalferretera">
          <img src="https://imgur.com/i05dx2R.jpg" alt="facebook" />
        </a>
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
            <LinkContainer to="/contactenos" >
              <NavLink className="text-secondary">CONTÁCTENOS</NavLink>
            </LinkContainer>
          </Nav>
          <Form inline>
            <FormControl className="buscador" size="sm" type="text" placeholder="Search" />
            <img className="lupa" src="https://imgur.com/LhDajo1.jpg" alt="lupa" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
