//@Vendors
import Image from "next/image";

//@Components
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

//@Statics

export default function Header() {
  return (
    <>
      <div className="--bgColor py-2">
        <Container>
          <Row>
            <Col className="d-flex justify-content-end">
              <button className={` btn btn__outline--white`}>
                ACCESO AFILIADOS
              </button>{" "}
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar expand="lg" variant="light" className="nav__main">
        <Container>
          <Navbar.Brand href="#">
            {" "}
            <Image
              src="/images/logo.png"
              alt="Picture of the author"
              width={190}
              height={90}
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link className="nav__main__link" href="#features">
              Inicio
            </Nav.Link>
            <NavDropdown
              className="nav__main__link nav__dropdown"
              title="Nosotros"
              id="collasible-nav-dropdown"
            >
              <li className="nav__main__item">
                <NavDropdown.Item className="sub__nav__item" href="#action/3.1">Action</NavDropdown.Item>
              </li>
              <li className="nav__main__item">
                <NavDropdown.Item className="sub__nav__item" href="#action/3.2">
                  Another action
                </NavDropdown.Item>
              </li>
              <li className="nav__main__item">
                <NavDropdown.Item className="sub__nav__item" href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </li>
              <li className="nav__main__item">
                <NavDropdown.Item className="sub__nav__item" href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </li>
            </NavDropdown>

            <Nav.Link className="nav__main__link" href="#pricing">
              AFILIADOS
            </Nav.Link>

            <Nav.Link className="nav__main__link" href="#pricing">
              Documentos
            </Nav.Link>

            <Nav.Link className="nav__main__link" href="#pricing">
              Servicios
            </Nav.Link>
            <Nav.Link className="nav__main__link" href="#pricing">
              Servicios
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
