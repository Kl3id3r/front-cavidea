//@vendors
import Head from 'next/head'


// @sections
import Slider from "./sections/Slider"
import Afiliarte from "./sections/Afiliarte"
import Alianza from "./sections/Alianza"

// Components
import About from './sections/about';
import Servicios from './sections/Servicios';
import Actualidad from './sections/Actualidad';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cavidea | Inicio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Slider />
      <About />
      <Servicios />
      <Actualidad />
      <Afiliarte />
      <Alianza />
    </>
  );
}
