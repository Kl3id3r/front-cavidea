import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Estilos from '../../assets/styles/home/_about.module.scss';

function About() {
  return (
    <section className={Estilos.acerca}>
      <Container>
        <h2 className={Estilos.acerca_titulo}>SOMOS CAVIDEA</h2>
        <p className={Estilos.acerca_descripcion}>
          La Cámara Venezolana de la Industria de Alimentos promueve el
          desarrollo de la industria manufacturera de alimentos en Venezuela, a
          través de una efectiva participación gremial; bajo los principios de
          promoción de la libre empresa; la sana competencia y el compromiso
          ético y social.
        </p>
        <Row>
          <Col xs={12} sm={4}>
            <article className={Estilos.acerca_card}>
              <Link href='/'>
                <a>
                  <figure>
                    <img src='/edif.png' alt='' />
                  </figure>
                  <h5>Quienes somos</h5>
                  <p className={Estilos.acerca__ver_mas}>ver más</p>
                </a>
              </Link>
            </article>
          </Col>
          <Col xs={12} sm={4}>
            <article className={Estilos.acerca_card}>
              <Link href='/'>
                <a>
                  <figure>
                    <img src='/discussion.png' alt='' />
                  </figure>
                  <h5>Comités</h5>
                  <p className={Estilos.acerca__ver_mas}>ver más</p>
                </a>
              </Link>
            </article>
          </Col>
          <Col xs={12} sm={4}>
            <article className={Estilos.acerca_card}>
              <Link href='/'>
                <a>
                  <figure>
                    <img src='/smile.png' alt='' />
                  </figure>
                  <h5>Comités</h5>
                  <p className={Estilos.acerca__ver_mas}>ver más</p>
                </a>
              </Link>
            </article>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
