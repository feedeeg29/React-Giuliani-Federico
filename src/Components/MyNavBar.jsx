import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import CartWidget from "./CartWidget";
export default function MyNavBar() {
    return (
        <>
            <Navbar bg="light" variant="light" expand="lg">
                <CartWidget />
                <ToastContainer />
                <Container className="NavBar">
                    <Navbar.Brand href="#home">Colossus-Gaming</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" bg="light">Inicio</Nav.Link>
                            <Nav.Link href="#link" >Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1" >Productos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" >Página a Crear 1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" >Página a Crear 2</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Página a crear 3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}