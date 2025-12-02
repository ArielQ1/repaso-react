import { CardDos } from "../components/CardDos";
import { Carrusel } from "../components/Carrusel";
import { NavBar } from "../components/NavBar";

export function Hallowen () {
  return (
    <>
      <h1>Hallowen Page</h1>
      <NavBar />
      <Carrusel />
      <CardDos titulo={'CARD DOS'} descripcion={'nkjsacbdsahcvbdshabchdsab'} />
      <CardDos titulo={'CARD DOS'} descripcion={'nkjsacbdsahcvbdshabchdsab'} >
        <button className="bg-white mt-2 px-4 py-2 rounded-lg hover:bg-gray-300">Comprar</button>
        <h2>Hola soy el hijo de Card</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, laboriosam! Sit rerum possimus, suscipit nobis earum, ea placeat et veniam, beatae unde porro mollitia! Temporibus atque sequi quibusdam autem doloremque.</p>
      </CardDos>

    </>
  )
}