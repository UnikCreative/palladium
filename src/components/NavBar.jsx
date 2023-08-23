import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";  
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const NavBar = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        
        <Navbar.Brand href="#">CodeExam</Navbar.Brand>

        <Nav>
           <Nav.Link href="/">Products</Nav.Link>
        </Nav>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          
          <Navbar.Text>
            <Link to="/cart">Add to Cart</Link>  
          </Navbar.Text>

        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );

}

export default NavBar;