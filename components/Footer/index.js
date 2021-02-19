import React from 'react';
import Link from 'next/link';
import Estilos from '../../assets/styles/_footer.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
function Footer() {
  return (
    <footer>
      <div className={Estilos.footer_content}>
        <Container>
          <Row>
            <Col md={3}>
              <div className={Estilos.footer_content_logos}>
                <figure className={Estilos.footer_content_logo}>
                  <img src='/logofull.svg' alt='' />
                </figure>
                <div className={Estilos.footer_content_redes}>
                  <figure className={Estilos.footer_content_red}>
                    <img src='/instagram.svg' alt='' />
                  </figure>
                  <figure className={Estilos.footer_content_red}>
                    <img src='/fb.svg' alt='' />
                  </figure>
                  <figure className={Estilos.footer_content_red}>
                    <img src='/twitter.svg' alt='' />
                  </figure>
                  <figure className={Estilos.footer_content_red}>
                    <img src='/youtube.svg' alt='' />
                  </figure>
                </div>
              </div>
            </Col>
            <Col md={2}>
              <div className={Estilos.footer_content_menu}>
                <h6>MENÚ</h6>

                <ul>
                  <li>
                    <Link href='/'>
                      <a>INICIO</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>NOSOTROS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>AFILIADOS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>DOCUMENTOS</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={2}>
              <div className={Estilos.footer_content_menu}>
                <div></div>
                <ul>
                  <li>
                    <Link href='/'>
                      <a>SERVICIOS</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>ACTUALIDAD</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>CONTACTO</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>ACCESO DE AFILIADOS</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={5}>
              <div className={Estilos.footer_content_contactos}>
                <h6>CONTACTO</h6>
                <div className={Estilos.footer_content_contacto}>
                  <figure>
                    <img src='/call.svg' alt='' />
                  </figure>
                  <p>administracion@cavidea.org comunicaciones@cavidea.org</p>
                </div>

                <div className={Estilos.footer_content_contacto}>
                  <figure>
                    <img src='/envelope.svg' alt='' />
                  </figure>
                  <p>
                    (+58212) 239 0918 / (+58212) 239 9818 (+58212) 234 2226 /
                    (+58212) 239 7031
                  </p>
                </div>

                <div className={Estilos.footer_content_contacto}>
                  <figure>
                    <img src='/placeholder.svg' alt='' />
                  </figure>
                  <p>
                    Av. Ppal. de los Ruices, Centro Empresarial Los Ruices, Piso
                    5, Ofic. 510. Caracas 1071. - Venezuela
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={Estilos.footer_ultimo}></div>
    </footer>
  );
}

export default Footer;
