import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Inicio from "./Pages/Inicio";
import Pedidos from "./Pages/Pedidos";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;