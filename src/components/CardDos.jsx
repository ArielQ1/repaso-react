export function CardDos ({ titulo, descripcion, children }) {
  return (
    <div className="bg-blue-600 rounded-xl w-96 p-3">
      <h2 className="font-bold">{titulo}</h2>
      {children}
      <p>{descripcion}</p>
    </div>
  )
}