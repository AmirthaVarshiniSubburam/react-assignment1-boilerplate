import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
 return (
    <div>
       
    <Navbar bg="warning" color="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">DD News</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home" className="ms-2" >Home</Nav.Link>
            <Nav.Link href="#" className="ms-2" >Trending</Nav.Link>
            
            <NavDropdown title="Catergories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action4"> Politics</NavDropdown.Item>
              <NavDropdown.Item href="#action5"> Cinema</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6"> World News</NavDropdown.Item>
              
              
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="search..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    </div>
 )
}

export default Header;