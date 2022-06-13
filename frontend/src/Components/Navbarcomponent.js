import React from 'react'
import{Navbar,Nav,Container,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'


function Navbarcomponent() {
  return (
    <div>
       <Navbar style={{backgroundColor:"#f5eff6"}} className="py-0" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Userslab</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="INFO" id="collasible-nav-dropdown">
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
    </div>
  )
}

export default Navbarcomponent