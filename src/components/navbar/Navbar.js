import React from 'react'
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap'

const Navbars = () => {
  return (
    <Navbar variant="dark" bg="dark" expand={false} className="sticky-top" >
      <Container fluid>
        <Navbar.Brand href="#" className="welcome">Welcome.💻</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          bg="dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu.</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#about">About Me.</Nav.Link>
              <Nav.Link href="#projects">Projects.</Nav.Link>
              <Nav.Link href="#contact">Contact Me.</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}

export default Navbars