import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Estilos from '../../assets/styles/home/_servicios.module.scss';

function Servicios() {
  return (
    <section className={Estilos.servicios}>
      <Container>
        <h2 className={Estilos.servicios_titulo}>NUESTROS SERVICIOS</h2>
        <Row>
          <Col xs={6} md={3}>
            <article className={Estilos.servicio}>
              <Link href='/'>
                <a>
                  <figure>
                    <img src='/papel.svg' alt='' />
                  </figure>
                  <p className={Estilos.servicio_nombre}>
                    Documentos de interés
                  </p>
                </a>
              </Link>
            </article>
          </Col>
          <Col xs={6} md={3}>
            <article className={Estilos.servicio}>
              <Link href='/'>
                <a>
                  <figure>
                    <img src='/file.svg' alt='' />
                  </figure>
                  <p className={Estilos.servicio_nombre}>Informe trimestral</p>
                </a>
              </Link>
            </article>
          </Col>
          <Col xs={6} md={3}>
            <article className={Estilos.servicio}>
              <Link href='/'>
                <a>
                  <figure>
                    <img src='/tendencia.svg' alt='' />
                  </figure>
                  <p className={Estilos.servicio_nombre}>Tendencias</p>
                </a>
              </Link>
            </article>
          </Col>
          <Col xs={6} md={3}>
            <article className={Estilos.servicio}>
              <Link href='/'>
                <a>
                  <figure>
                    <img src='/logoblanco.svg' alt='' />
                  </figure>
                  <p className={Estilos.servicio_nombre}>Cavidea Informa</p>
                </a>
              </Link>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Servicios;
