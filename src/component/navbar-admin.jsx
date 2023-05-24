import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";


function NavBar() {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Bukapedia</Navbar.Brand>  
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/recap'>Rekap Penjualan</Nav.Link>
            <Nav.Link as={Link} to='/logout'>Log Out</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
        </div>
    );
};

export default NavBar;