import React from 'react';
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Noteboard from './Noteboard/Noteboard';
import Contacts from './Contacts/Contacts';
import Hobbies from './Hobbies/Hobbies';
import './Noteboard/Noteboard.css';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark" className="navFlex">
        <Container fluid>
        <Navbar.Brand >My Keeper</Navbar.Brand>
        <div>
        <Nav className="me-auto">
          <Nav.Link href="/noteboard">Noteboard</Nav.Link>
          <Nav.Link href="/hobbies">Hobbies</Nav.Link>
          <Nav.Link href="/contacts">Heroes</Nav.Link>
        </Nav>
        </div>
        </Container>
      </Navbar>
    );

}

export default NavBar;
