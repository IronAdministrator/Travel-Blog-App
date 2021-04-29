import React, { useState } from "react";
import '../App.css';
import Logo from "../images/TBL_logo_small_v02.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from "reactstrap";
import {Link} from 'react-router-dom';


const NavBar = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div ref={props.titleRef} className='container-fluid'>
      <Navbar light expand="md" className="nav-main">
        <NavbarBrand href="/">
          <Link exact to="/">
             <img className="logo-img" src={Logo} alt="logo" />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          
            <NavItem>
              <Link exact to="/america">America</Link>
            </NavItem>
            <NavItem>
              <Link exact to="/europe">Europe</Link>
            </NavItem>
            <NavItem>
              <Link exact to="/asia">Asia</Link>
            </NavItem>
            <NavItem>
              <Link exact to="/africa">Africa</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;