import { Card } from "../components/Card"
import { NavBar } from "../components/NavBar"
import imagen1 from "../assets/navidad1.webp"


export const Navidad = () => {
  return (
    <>
      <h1>Navidad Page</h1>
      <NavBar />
      <div className="flex gap-4 flex-wrap justify-center">
        <Card titulo={'Primera Imagen'} descripcion={'Esta es mi primera imagen'} imagen={imagen1} />
        <Card titulo={'Segunda Imagen'} descripcion={'Esta es mi primera imagen'} imagen={imagen1}/>
        <Card titulo={'Tercera Imagen'} descripcion={'Esta es mi primera imagen'} imagen={imagen1}/>
        <Card titulo={'Cuarta Imagen'} descripcion={'Esta es mi primera imagen'} imagen={imagen1}/>
        <Card titulo={'Quinta Imagen'} descripcion={'Esta es mi primera imagen'} imagen={imagen1}/>
      </div>
    </>
  )
}