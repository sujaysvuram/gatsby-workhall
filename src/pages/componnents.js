import * as React from "react"
import Layout from "../components/layout";
import { Button, Container, Row, Col, Navbar, Nav, NavDropdown, Card } from 'react-bootstrap';
import logoWhite from '../assets/logo-white.svg'
import logoDark from '../assets/logo-dark.svg'
import { Component } from "react";
import Slider from "react-slick";

const NotFoundPage = () => (
  <Layout>
  <h3 className="text-center mb-4 mt-4">Components</h3>
  <hr />
  <Container>

  <h4 className="mb-3 fw-600">Button</h4>

  <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="white">White Button</Button>{' '}
  <Button variant="link">Link</Button>
  <hr />

  <h4 className="mb-3 fw-600">Banners</h4>

  <div className="page-banner dark-gradient">
<Container>
<span className="text-center">CONTACT</span>
<h1 className="text-center">24/7 world-class support. Always free.</h1>
<p className="text-center">Workhall has the highest rated client support in the industry. We are here 24 hours a day, every day of the week, including holidays.</p>
  </Container>
  </div>

  <hr />

  <h4 className="mb-3 fw-600">Navbar</h4>

  <Navbar className="dark-gradient" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src={logoWhite} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<hr />

<Navbar bg="white" expand="lg">
  <Container>
    <Navbar.Brand href="#home"><img src={logoDark} /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto align-items-center">
     <span className="nav-lable">Already have an account?</span> <Button variant="secondary">Sign up</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


<hr/>


<h4 className="mb-3 fw-600">Cards</h4>





</Container>



  </Layout>
)


export default NotFoundPage
