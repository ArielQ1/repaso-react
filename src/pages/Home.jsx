import { NavBar } from "../components/NavBar";

export function Home () {
  return (
    <div className="bg-indigo-700 w-screen h-screen">
      <NavBar />
      <h1 className="text-7xl font-extrabold text-center">Home page</h1>
    </div>
  )
}