import React, { useState } from "react";
import Logo from "../images/TBL_logo_with_title.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
// import {NavLink} from 'react-router-dom';


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="nav-main">
        <NavbarBrand href="/">
          <img className="logo-img" src={Logo} alt="logo_with_title"></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">America</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Europe</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Asia</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Africa</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;