//@Vendors
import Link from "next/link";
import Image from "next/image";

//@Bootstrap Component
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Alianza = () => {
  return (
    <section id="alianza">
      <Container>
        <h2 className="h2 text-uppercase text-center my-5">ALIANZAS</h2>
        <Row className="my-5">
          <Col xs={4} className="my-auto">
            <Link href="#">
              <figure className="d-flex justify-content-center">
                <Image
                  className="d-block w-100 alianza__img"
                  src="/images/Imagen 4.png"
                  alt="exemple"
                  width="116px"
                  height="127px"
                />
              </figure>
            </Link>
          </Col>
          <Col xs={4} className="my-auto">
            <Link href="#">
              <figure className="d-flex justify-content-center">
                <Image
                  className="d-block w-100 alianza__img"
                  src="/images/Imagen 6.png"
                  alt="exemple"
                  width="250px"
                  height="83px"
                />
              </figure>
            </Link>
          </Col>
          <Col xs={4} className="my-auto">
            <Link href="#">
              <figure className="d-flex justify-content-center">
                <Image
                  className="d-block w-100 alianza__img"
                  src="/images/Imagen 7.png"
                  alt="exemple"
                  width="122px"
                  height="102px"
                />
              </figure>
            </Link>
          </Col>
        </Row>
        <Row className="my-5">
          <Col xs={4} className="my-auto">
            <Link href="#">
              <figure className="d-flex justify-content-center">
                <Image
                  className="d-block w-100 alianza__img"
                  src="/images/eb-belgica.png"
                  alt="exemple"
                  width="330px"
                  height="138px"
                />
              </figure>
            </Link>
          </Col>
          <Col xs={4} className="my-auto">
            <Link href="#">
              <figure className="d-flex justify-content-center">
                <Image
                  className="d-block w-100 alianza__img"
                  src="/images/eb-alemania.png"
                  alt="exemple"
                  width="390px"
                  height="200px"
                />
              </figure>
            </Link>
          </Col>
          <Col xs={4} className="my-auto">
            <Link href="#">
              <figure className="d-flex justify-content-center">
                <Image
                  className="d-block w-100 alianza__img"
                  src="/images/eb-brasil.png"
                  alt="exemple"
                  width="182px"
                  height="92px"
                />
              </figure>
            </Link>
          </Col>
        </Row>
       </Container>
    </section>
  );
};

export default Alianza;
