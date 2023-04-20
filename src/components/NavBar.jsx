import React from 'react';
import { CartWidget } from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SuperMercado</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Mi Tienda</Nav.Link>
            <Nav.Link href="#features">Contacto</Nav.Link>
            <Nav.Link href="#pricing">Sobre Nosotros</Nav.Link>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>
  )
}
