import React, { useState } from "react";
import {Link} from 'react-router-dom'

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  Input,
  Collapse,
  NavbarToggler,
} from "reactstrap";

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="none" light expand="lg" className="mt-5">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/inicio">INICIO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ color: "blue", width: "140px" }}
              tag={Link}
              to="/quienesSomos"
            >
              QUIENES SOMOS
            </NavLink>
          </NavItem>
          <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle
              style={{ color: "blue" }}
              tag={Link}
              className="nav-link"
              caret
            >
              | PRODUCTOS |
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag={Link} to="/SefuridadIndustrial">
                Seguridad Industrial
              </DropdownItem>
              <DropdownItem tag={Link} to="/Herramientas">
                Herramientas
              </DropdownItem>
              <DropdownItem tag={Link} to="/soldadura">
                Soldadura
              </DropdownItem>
              <DropdownItem tag={Link} to="/Abrasivos">
                Abrasivos
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink tag={Link} to="/contactenos">CONTÁCTENOS</NavLink>
          </NavItem>
          <Form inline>
            <Input
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              style={{ width: "150px" }}
            />
          </Form>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
