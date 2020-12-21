import {NavBar, Nav, NavItem, Navbar, FormControl, Form, Button} from 'react-bootstrap';
import React from 'react';

function NavB(){
	return(
<>
<div class="border-bottom">
  <Navbar bg="white" variant="light" class="d-flex justify-content-end">
    <Navbar.Brand href="#home">Seeda</Navbar.Brand>
    <Nav  className="ml-auto">
      <Nav.Link href="Features">Features</Nav.Link>
      <Nav.Link href="About">About</Nav.Link>
      <Nav.Link href="RoadMap">RoadMap</Nav.Link>
      <Nav.Link href="Pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>   
      <Button variant="outline-primary">Sign Up</Button>
    </Form>
  </Navbar>
  </div>
</>
	);
}

export default NavB;