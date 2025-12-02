import { Link } from "react-router";

export function NavBar () {
  return (
    <nav className="flex justify-center gap-4 p-4 bg-gray-200 w-3xl rounded">
      <Link className="bg-indigo-500 rounded hover:bg-indigo-800 transition-colors duration-300 px-2 py-3 " to="/">Home</Link>
      <Link className="bg-indigo-500 rounded hover:bg-indigo-800 transition-colors duration-300 px-2 py-3 " to="/navidad">Navidad</Link>
      <Link className="bg-indigo-500 rounded hover:bg-indigo-800 transition-colors duration-300 px-2 py-3 " to="/hallowen">Hallowen</Link>
    </nav>
  )
}