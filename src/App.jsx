import { Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import { Navidad } from "./pages/Navidad"
import { Hallowen } from "./pages/Hallowen"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navidad" element={<Navidad />} />
      <Route path="/hallowen" element={<Hallowen />} />
    </Routes>
  )
}

export default App
