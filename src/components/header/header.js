import React from 'react'
import { Link } from "gatsby"
import {  Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import whiteLogo from '../../assets/logo-white.svg'

const Header = () => (

  <div className="header">
    <Navbar sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={whiteLogo} alt="WorkHall Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/404" className="nav-link">PRODUCT</Link>
            <Link to="/404" className="nav-link">LEARN</Link>
            <Link to="/404" className="nav-link">PARTNERS</Link>
            <Link to="/404" className="nav-link">BUY</Link>
            <Link to="/contact/contact" className="nav-link">CONTACT</Link>
            <Link to="/404" className="nav-link">SIGN IN</Link>
            <Link to="/404" className="nav-link" style={{borderRadius: "4px", background: "#181d31"}}>SIGN UP</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>

)

export default Header