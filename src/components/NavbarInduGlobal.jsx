import React from "react";
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
} from "reactstrap";

export default function Example() {
  return (
    <Navbar color="none" light expand="md" className="mt-5">
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink href="/inicio">INICIO</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color:"blue"}} href="/components/">QUIENES SOMOS</NavLink>
        </NavItem>
        <UncontrolledDropdown setActiveFromChild>
          <DropdownToggle style={{color:"blue"}} tag="a" className="nav-link" caret>
            PRODUCTOS
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem tag="a" href="/inicio">
              Seguridad Industrial
            </DropdownItem>
            <DropdownItem tag="a" href="/quienesSomos">
              Herramientas
            </DropdownItem>
            <DropdownItem tag="a" href="/quienesSomos">
              Soldadura
            </DropdownItem>
            <DropdownItem tag="a" href="/quienesSomos">
              Abrasivos
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
          <NavLink href="/components/">CONTÁCTENOS</NavLink>
        </NavItem>
      </Nav>
      <Form inline>
        <Input type="text" placeholder="Search" className="mr-sm-2" style={{width:"150px"}} />
      </Form>
    </Navbar>
  );
}
