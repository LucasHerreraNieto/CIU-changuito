import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return ( 
        <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top" >
        <Container>
          <Navbar.Brand href="#home">MUEBLES</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Sillon</Nav.Link>
            <Nav.Link href="#pricing">Silla</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    );
}
 
export default NavBar;