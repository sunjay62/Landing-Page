import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Brand from "./../assets/images/brand.png";
import {
  FaHome,
  FaBullhorn,
  FaQuestionCircle,
  FaHeadset,
  FaTags,
} from "react-icons/fa";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <img src={Brand} alt="ATHome Net" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1">
              <FaHome />
              &nbsp;Home
            </Nav.Link>
            <FaTags className="fa-tags" />

            <NavDropdown id="navbarScrollingDropdown" title="Paket & Harga">
              <NavDropdown.Item href="#action3">Paket Up To</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Paket Dedicated
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Paket Broadband
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#action5">
              <FaBullhorn /> Promo
            </Nav.Link>
            <Nav.Link href="#action6">
              <FaQuestionCircle />
              &nbsp;Bantuan
            </Nav.Link>
            <Nav.Link href="#action7">
              <FaHeadset />
              &nbsp;Hubungi Kami
            </Nav.Link>
            <Button variant="success">
              <span className="btn-daftar">Daftar</span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
