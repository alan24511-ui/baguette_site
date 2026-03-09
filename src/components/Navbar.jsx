import { Link } from "react-router-dom"

export default function Navbar() {

  return (

    <nav className="bg-white shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-orange-500 font-bold text-xl">
          LA CASA DEL BAGUETTE
        </h1>

        <div className="flex gap-8 text-gray-700 font-medium">

          <Link to="/" className="hover:text-orange-500">
            Inicio
          </Link>

          <Link to="/pedidos" className="hover:text-orange-500">
            Pedidos
          </Link>

          <Link to="/about" className="hover:text-orange-500">
            Acerca de
          </Link>

        </div>

      </div>

    </nav>

  )
}