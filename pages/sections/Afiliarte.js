//@Bootstrap Component
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Afiliarte = () => {
  return (
    <section className="my-3">
      <div className="afiliarce__container">
        <Container className="afiliarce__position afiliarce__color">
          <Row>
            <Col xs={6} className="m-auto">
              <h2 className="text-uppercase mb-3 font-weight-bold display-4">
                ESTÁS LISTO <br />
                PARA AFILIARTE
              </h2>
              <span className="h5 mt-5">
                Únete a la comunidad empresarial más importante Del gremio de la
                producción de alimentos
              </span>
            </Col>
            <Col xs={{ span: 5, offset: 1 }}>
              <Card className="py-5">
                <Form>
                  <Card.Body>
                    <Form.Group controlId="formGroupText">
                      <Form.Control
                        className="afiliarce__input"
                        type="text"
                        placeholder="Nombre"
                      />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Control
                        className="afiliarce__input"
                        type="email"
                        placeholder="Email"
                      />
                    </Form.Group>
                    <Button className="btn--themeBlue btn--size" size="lg" block>
                      Enviar Mensaje
                    </Button>
                  </Card.Body>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Afiliarte;
