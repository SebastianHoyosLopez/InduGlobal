import React, { useState } from "react";
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
            <NavLink href="/inicio">INICIO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              style={{ color: "blue", width: "140px" }}
              href="/quienesSomos"
            >
              QUIENES SOMOS
            </NavLink>
          </NavItem>
          <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle
              style={{ color: "blue" }}
              tag="a"
              className="nav-link"
              caret
            >
              | PRODUCTOS |
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag="a" href="/SefuridadIndustrial">
                Seguridad Industrial
              </DropdownItem>
              <DropdownItem tag="a" href="/Herramientas">
                Herramientas
              </DropdownItem>
              <DropdownItem tag="a" href="/soldadura">
                Soldadura
              </DropdownItem>
              <DropdownItem tag="a" href="/Abrasivos">
                Abrasivos
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/contactenos">CONTÁCTENOS</NavLink>
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
