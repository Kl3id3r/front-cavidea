import Link from "next/link";

//@Bootstrap Component
import Carousel from "react-bootstrap/Carousel";

//@Statics
import Derecha from "../../public/images/Derecha"

import Izquierda from "../../public/images/Izquierda"

const carouselItem = [
  {
    link: "#",
    imgSrc: "/images/bg-aflilizarce.png",
    titulo: "Exemple title",
  },
  {
    link: "#",
    imgSrc: "/images/rose.jpg",
    titulo: "Exemple title",
  },
  {
    link: "#",
    imgSrc: "/images/Foto1.png",
    titulo: "Exemple title",
  },
];

const Slider = () => {
  return (
    <section id="carousel">
      <Carousel
        prevIcon={<Izquierda/>}
        nextIcon={<Derecha/>}
        className="main__slider"
      >
        {carouselItem.map(({ link, imgSrc, titulo }, key) => (
          <Carousel.Item key={`item-cs-${key}`}>
            <Link href={link}>
              <img
                className="carousel__item__img d-block w-100"
                src={imgSrc}
                alt={titulo}
              />
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;
