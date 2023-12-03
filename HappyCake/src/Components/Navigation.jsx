import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <div>
<Navbar bg="primary" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link to='/' className=" mt-2 pe-2 text-decoration-none">Home</Link>
          <Link to='/contact' className=" mt-2 text-decoration-none">Contacto</Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">Happy Cake</Navbar.Brand>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navigation