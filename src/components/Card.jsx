export function Card ({ titulo, imagen, descripcion }) {
  return (
    <div className="bg-blue-600 rounded-xl w-96 p-3">
      <img src={imagen} alt="" />
      <h2 className="font-bold">{titulo}</h2>
      <p>{descripcion}</p>
    </div>
  )
}