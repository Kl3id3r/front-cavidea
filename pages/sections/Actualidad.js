import React from 'react';
import {
  Card,
  CardImg,
  Carousel,
  CarouselItem,
  Col,
  Container,
  Row,
  CardDeck,
} from 'react-bootstrap';

import Estilos from '../../assets/styles/home/_actualidad.module.scss';

function Actualidad() {
  return (
    <section className={Estilos.actualidad}>
      <Container>
        <h2 className={Estilos.actualidad_titulo}>ACTUALIDAD</h2>
        <Carousel controls={false} className="carrusel" >
          <CarouselItem>
            <CardDeck className={Estilos.actualidad_cartas}>
              <Card className={Estilos.actualidad_carta}>
                <figure className={Estilos.actualidad_carta_img}> <CardImg src='/slider.png' alt='' /> </figure>
                <Card.Title className={Estilos.actualidad_carta_titulo}>
                  Cómo planificar, reinventar y valorar en situaciones adversas
                </Card.Title>
                <Card.Text className={Estilos.actualidad_carta_texto}>
                  “No importa cuán en crisis estén las cosas, usted debe dirigir
                  la orquesta”.
                </Card.Text>
              </Card>

              <Card className={Estilos.actualidad_carta}>
                <figure className={Estilos.actualidad_carta_img}> <CardImg src='/slider2.png' alt='' /> </figure>
                <Card.Title className={Estilos.actualidad_carta_titulo}>
                  La clave está en el empaque
                </Card.Title>
                <Card.Text className={Estilos.actualidad_carta_texto}>
                  El empaque puede considerarse el alma de la industria
                  alimentaria. Tiene una función irremplazable y la necesidad de
                  combinar muchos atributos: seguridad, resistencia, atractivo,
                  adecuación a la normativa, costos controlados y minimización
                  de residuos
                </Card.Text>
              </Card>
            </CardDeck>
          </CarouselItem>
          <CarouselItem>
            <CardDeck className={Estilos.actualidad_cartas}>
              <Card className={Estilos.actualidad_carta}>
                <figure className={Estilos.actualidad_carta_img}> <CardImg src='/slider.png' alt='' /> </figure>
                <Card.Title className={Estilos.actualidad_carta_titulo}>
                  Cómo planificar, reinventar y valorar en situaciones adversas
                </Card.Title>
                <Card.Text className={Estilos.actualidad_carta_texto}>
                  “No importa cuán en crisis estén las cosas, usted debe dirigir
                  la orquesta”.
                </Card.Text>
              </Card>

              <Card className={Estilos.actualidad_carta}>
                <figure className={Estilos.actualidad_carta_img}> <CardImg src='/slider2.png' alt='' /> </figure>
                <Card.Title className={Estilos.actualidad_carta_titulo}>
                  La clave está en el empaque
                </Card.Title>
                <Card.Text className={Estilos.actualidad_carta_texto}>
                  El empaque puede considerarse el alma de la industria
                  alimentaria. Tiene una función irremplazable y la necesidad de
                  combinar muchos atributos: seguridad, resistencia, atractivo,
                  adecuación a la normativa, costos controlados y minimización
                  de residuos
                </Card.Text>
              </Card>
            </CardDeck>
          </CarouselItem>
        </Carousel>
      </Container>
    </section>
  );
}

export default Actualidad;
